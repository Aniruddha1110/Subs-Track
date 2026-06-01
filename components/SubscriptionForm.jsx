'use client';
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
export default function SubscriptionForm(props)
{
    const { handleResetForm, closeInput, formData, handleChangeInput } = props;
    const { handleAddSubscription } = useAuth();

    function handleFormSubmit(e) {
        e.preventDefault(); // Prevent the random as behavior of reloading the webpage.
        handleAddSubscription(formData);
        handleResetForm();
        closeInput();
    }

    return(
        <section>
            <h2>Add a new Subscription</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    <span>Subscription Name</span>
                    <input value={formData.name} onChange={handleChangeInput} type="text" name="name" placeholder="e.g. Netflix, Spotify, AWS Hosting" required/>
                </label>
                <label>
                    <span>Category</span>
                    <select value={formData.category} onChange={handleChangeInput} name="category">
                        {["Cellular Mobile Network", "Data Add Ons", "Wifi", "Entertainment", "Music", "Productivity", "Utilities", "Education", "Health", "Software", "Web Services", "AI Tools", "Others"].map((cat, catIndex) => {
                            return(
                                <option key={catIndex} placeholder="Select">{cat}</option>
                            )
                        })}
                    </select>
                </label>
                <label>
                    <span>Cost</span>
                    <input value={formData.cost} onChange={handleChangeInput} type="number" name="cost" step="0.01" placeholder="e.g. 12.00" required/>
                </label>
                <label>
                    <span>Currency</span>
                    <select value={formData.currency} onChange={handleChangeInput} name="currency">
                        {["USD", "EUR", "GBP", "INR", "JPY", "CNY", "AUD", "CAD", "CHF", "SEK", "NZD", "Other"].map((cur, curIndex) => {
                            return(
                                <option key={curIndex} placeholder="Select">{cur}</option>
                            )
                        })}
                    </select>
                </label>
                <label>
                    <span>Billing Frequency</span>
                    <select value={formData.billingFrequency} onChange={handleChangeInput} name="billingFrequency">
                        {["Daily", "Weekly", "Monthly", "Yearly", "Custom"].map((freq, freqIndex) => {
                            return(
                                <option key={freqIndex} placeholder="Select">{freq}</option>
                            )
                        })}
                    </select>
                </label>
                <label>
                    <span>Payment Method</span>
                    <select value={formData.paymentMethod} onChange={handleChangeInput} name="paymentMethod">
                        {["Credit Card", "UPI", "Debit Card", "PayPal", "Bank Transfer", "Cryptocurrency", "Other"].map((method, methodIndex) => {
                            return(
                                <option key={methodIndex} placeholder="Select">{method}</option>
                            )
                        })}
                    </select>
                </label>
                <label>
                    <span>Subscription Start Date</span>
                    <input value={formData.startDate} onChange={handleChangeInput} type="date" name="startDate" required/>
                </label>
                <label>
                    <span>Status</span>
                    <select value={formData.status} onChange={handleChangeInput} name="status">
                        {["Active", "Paused", "Canceled"].map((status, statusIndex) => {
                            return(
                                <option key={statusIndex} placeholder="Select">{status}</option>
                            )
                        })}
                    </select>
                </label>
                <label className="fat-column">
                    <span>Additional Notes</span>
                    <textarea value={formData.notes} onChange={handleChangeInput} name="notes" placeholder="Any additional information about the subscription..."></textarea>
                </label>
                <div className="fat-column form-submit-btns">
                    <button onClick={closeInput}>Cancle</button>
                    <button type="submit">Add Subscription</button>
                </div>
            </form>
        </section>
    )
}