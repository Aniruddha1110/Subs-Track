import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Subs-Track",
    description: "Privacy Policy for Subs-Track - The Subscription Tracker",
};

export default function PrivacyPolicy() {
    return (
        <div className="legal-page">
            <div className="legal-header">
                <h1>Privacy Policy</h1>
                <p>Last updated: June 1, 2026</p>
            </div>

            <div className="legal-content">
                <section>
                    <h2>1. Overview</h2>
                    <p>
                        Subs-Track ("we", "our", or "the app") is a personal subscription tracking application
                        built and maintained by Aniruddha Dutta. This Privacy Policy explains how we collect,
                        use, and protect your information when you use Subs-Track.
                    </p>
                    <p>
                        By using Subs-Track, you agree to the collection and use of information as described
                        in this policy.
                    </p>
                </section>

                <section>
                    <h2>2. Information We Collect</h2>
                    <h3>Account Information</h3>
                    <p>
                        When you create an account, we collect your email address and a securely hashed
                        password. This is handled entirely by Firebase Authentication — we never store
                        your password in plain text.
                    </p>
                    <h3>Subscription Data</h3>
                    <p>
                        We store the subscription information you manually enter, including subscription
                        names, costs, billing frequencies, start dates, categories, payment methods,
                        and any notes you add. This data is stored in your personal Firestore document
                        and is only accessible by your account.
                    </p>
                    <h3>Usage Data</h3>
                    <p>
                        We do not collect analytics, usage tracking, or behavioral data. We do not use
                        any third-party analytics services.
                    </p>
                </section>

                <section>
                    <h2>3. How We Use Your Information</h2>
                    <p>Your information is used solely to:</p>
                    <ul>
                        <li>Authenticate you and maintain your session</li>
                        <li>Store and display your subscription data</li>
                        <li>Calculate spending analytics shown on your dashboard</li>
                        <li>Send renewal reminders (if enabled)</li>
                    </ul>
                    <p>
                        We do not sell, rent, share, or trade your personal information with any
                        third parties for any purpose.
                    </p>
                </section>

                <section>
                    <h2>4. Data Storage & Security</h2>
                    <p>
                        Your data is stored securely in Google Firebase (Firestore), which provides
                        industry-standard encryption at rest and in transit. Firebase is operated by
                        Google and complies with major data protection regulations.
                    </p>
                    <p>
                        Access to your data is restricted by Firestore security rules — only your
                        authenticated account can read or write your subscription data.
                    </p>
                </section>

                <section>
                    <h2>5. Third-Party Services</h2>
                    <p>Subs-Track uses the following third-party services:</p>
                    <ul>
                        <li>
                            <strong>Firebase (Google)</strong> — Authentication and database storage.
                            Subject to <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a>.
                        </li>
                    </ul>
                    <p>
                        We do not use advertising services, social media trackers, or any other
                        third-party data collection services.
                    </p>
                </section>

                <section>
                    <h2>6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access all data associated with your account at any time via the dashboard</li>
                        <li>Edit or delete any subscription data you have entered</li>
                        <li>Delete your account and all associated data at any time</li>
                        <li>Export your subscription data (feature coming soon)</li>
                    </ul>
                </section>

                <section>
                    <h2>7. Data Retention</h2>
                    <p>
                        Your data is retained as long as your account exists. If you delete your account,
                        all associated data including subscription records will be permanently deleted
                        from our database within 30 days.
                    </p>
                </section>

                <section>
                    <h2>8. Children's Privacy</h2>
                    <p>
                        Subs-Track is not intended for use by individuals under the age of 13. We do not
                        knowingly collect personal information from children. If you believe a child has
                        provided us with personal information, please contact us immediately.
                    </p>
                </section>

                <section>
                    <h2>9. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be reflected
                        with an updated date at the top of this page. Continued use of Subs-Track after
                        changes constitutes acceptance of the revised policy.
                    </p>
                </section>

                <section>
                    <h2>10. Contact</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy, please reach out
                        via the <Link href="/help">Get Help</Link> page.
                    </p>
                </section>
            </div>

            <div className="legal-footer">
                <Link href="/tos">Terms of Service →</Link>
                <Link href="/">← Back to Home</Link>
            </div>
        </div>
    );
}