'use client';
import { useState } from "react";
import Login from "@/components/Login";
import SubscriptionsDisplay from "@/components/SubscriptionsDisplay";
import SubscriptionSummary from "@/components/SubscriptionSummary";
import SubscriptionForm from "@/components/SubscriptionForm";
import { useAuth } from "@/context/AuthContext";
const blankSubscription = {
        name: "",
        category: "Web Services",
        cost: "",
        currency: "USD",
        billingFrequency: "Monthly",
        nextBillingDate: "",
        paymentMethod: "Credit Card",
        startDate: "",
        renewalType: "",
        notes: "",
        status: "Active"
  };
export default function DashboardPage() {
  const [formData, setFormData] = useState(blankSubscription);
  const { handleDeleteSubscription, userData, currentUser, loading } = useAuth();
  const isAuthenticated = !!currentUser;
  function handleChangeInput(e){
        const newData = {
            ...formData,
            [e.target.name]: e.target.value
        };
        setFormData(newData);
  }
  function handleEditSubscription(index){
    const data = userData.subscriptions.find((val, valIndex) => {
      return valIndex === index;
    });
    setFormData(data);
    handleDeleteSubscription(index);
    setIsAddEntry(true);
  }
  // const isAuthenticated = true;
  const [isAddEntry, setIsAddEntry] = useState(false);
  function handleResetForm(){
    setFormData(blankSubscription);
  }
  function handleToggleInput() {
    setFormData({
      name: "",
      category: "Web Services",
      cost: "",
      currency: "USD",
      billingFrequency: "Monthly",
      nextBillingDate: "",
      paymentMethod: "Credit Card",
      startDate: "",
      renewalType: "",
      notes: "",
      status: "Active"
    });
    setIsAddEntry(!isAddEntry);
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!isAuthenticated) {
    return (
      <Login />
    )
  }
  return (
    <>
      <SubscriptionSummary />
      <SubscriptionsDisplay handleEditSubscription={handleEditSubscription} handleShowInput={isAddEntry ? () => {} : handleToggleInput}/>
      {isAddEntry && (<SubscriptionForm handleResetForm={handleResetForm} closeInput={handleToggleInput} formData={formData} handleChangeInput={handleChangeInput}/>)}
    </>
  );
}