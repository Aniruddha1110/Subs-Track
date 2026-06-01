'use client';
import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "@/firebase";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
export const AuthContext = createContext();
export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider(props){
    const {children} = props;
    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logout(){
        setCurrentUser(null);
        setUserData(null);
        return signOut(auth);
    }
    async function saveToFirebase(data){
        try{
            const userRef = doc(db, "users", currentUser.uid);
            const res = await setDoc(userRef, {
                subscriptions: data
            },{ merge: true });
        }
        catch(error){
            console.error("Error saving data to Firestore:", error.message);
        }
    }
    async function handleAddSubscription(newSubscription){
        if(userData.subscriptions.length > 30){
            alert("Subscription limit reached. Please delete some subscriptions before adding new ones.");
            return;
        }
        // Modify the local state (global context)
        const newSubscriptions = [...userData.subscriptions, newSubscription];
        setUserData({ subscriptions: newSubscriptions});
        // Write the changes to our firebase database (asyncronous)
        await saveToFirebase(newSubscriptions);
    }
    async function handleDeleteSubscription(index){
        // Delete the entry at that index.
        const newSubscriptions = userData.subscriptions.filter((val, valIndex) => {
            return valIndex !== index;
        });
        setUserData({ subscriptions: newSubscriptions});
        // Write the changes to our firebase database (asyncronous)
        await saveToFirebase(newSubscriptions);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                setCurrentUser(user);
                if (!user) {
                    return;
                }
                // Fetch user data from Firestore and set it in state
                // Oh we found a user, lets check the database
                setLoading(true);
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                console.log("User data from Firestore:", docSnap.data());
                // let firebaseData = {subscriptions}
                let firebaseData = { subscriptions: [] }; // Default data structure for new users.
                if (docSnap.exists()){
                    // Oh we found data
                    console.log("User data from Firestore:", docSnap.data());
                    firebaseData = docSnap.data();
                }
                setUserData(firebaseData);
            } catch (error) {
                console.error("Error updating user state:", error.message);
            } finally {
                setLoading(false);
            }
        });
        return unsubscribe;
    }, []);
    const value = {currentUser, userData, loading, signup, login, logout, handleAddSubscription, handleDeleteSubscription};
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}