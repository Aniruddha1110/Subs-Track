'use client'
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
export default function Login()
{
    const params = useSearchParams();
    const isRegistrationParam = params.get("register");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistration, setIsRegistration] = useState(isRegistrationParam);
    const [error, setError] = useState(null);
    const [authenticating, setAuthenticating] = useState(false);
    const { signup, login } = useAuth();
    async function handleAuthentication(){
        if(!email || !email.includes("@") || password.length < 6 || authenticating){
            return;
        }
        setError(null);
        setAuthenticating(true)
        try{
            if(isRegistration){
                // Register the user
                await signup(email, password);
            }
            else{
                // Login the user
                await login(email, password);
            }
        }
        catch(error){
            console.log("Authentication error:", error.message);
            setError(error.message);
        }
        finally{
            setAuthenticating(false);
        }
    }
    return(
        <div className="login">
            <h2>{isRegistration ? 'Create an Account' : 'Login'}</h2>
            {error && (
                <div className="error-message">
                    <p>{error}</p>
                </div>
            )}
            <input 
                placeholder="Email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication} disabled={authenticating}>
                {authenticating ? 'Processing...' : 'Submit'}
            </button>
            <div className="full-line"/>
            <div>
                <p>{isRegistration ? 'Already have an account?' : 'Don\'t have an account?'}</p>
                <button onClick={()=>{
                    setIsRegistration(!isRegistration)
                }}>{isRegistration ? 'Login' : 'Sign Up'}</button>
            </div>
        </div>
    )
}