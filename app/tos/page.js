import Link from "next/link";

export const metadata = {
    title: "Terms of Service | Subs-Track",
    description: "Terms of Service for Subs-Track - The Subscription Tracker",
};

export default function TermsOfService() {
    return (
        <div className="legal-page">
            <div className="legal-header">
                <h1>Terms of Service</h1>
                <p>Last updated: June 1, 2026</p>
            </div>

            <div className="legal-content">
                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using Subs-Track ("the app"), you agree to be bound by these
                        Terms of Service. If you do not agree to these terms, please do not use the app.
                    </p>
                    <p>
                        Subs-Track is a personal subscription tracking application developed and
                        maintained by Aniruddha Dutta as a solo project.
                    </p>
                </section>

                <section>
                    <h2>2. Description of Service</h2>
                    <p>
                        Subs-Track provides tools to help you track, manage, and analyze your personal
                        subscriptions. Features include subscription logging, spending analytics,
                        renewal reminders, and budgeting tools.
                    </p>
                    <p>
                        The app is provided as-is for personal use. Features may be added, changed,
                        or removed at any time without prior notice.
                    </p>
                </section>

                <section>
                    <h2>3. User Accounts</h2>
                    <p>To use Subs-Track, you must:</p>
                    <ul>
                        <li>Create an account using a valid email address and password</li>
                        <li>Be at least 13 years of age</li>
                        <li>Provide accurate information when registering</li>
                        <li>Keep your login credentials confidential</li>
                    </ul>
                    <p>
                        You are responsible for all activity that occurs under your account. If you
                        suspect unauthorized access, change your password immediately.
                    </p>
                </section>

                <section>
                    <h2>4. Acceptable Use</h2>
                    <p>You agree to use Subs-Track only for lawful personal purposes. You must not:</p>
                    <ul>
                        <li>Use the app for any commercial or business purpose without permission</li>
                        <li>Attempt to reverse engineer, hack, or exploit any part of the app</li>
                        <li>Upload or enter malicious, harmful, or illegal content</li>
                        <li>Attempt to access another user's data</li>
                        <li>Use automated tools to scrape or access the app at scale</li>
                    </ul>
                </section>

                <section>
                    <h2>5. Your Data</h2>
                    <p>
                        All subscription data you enter belongs to you. We do not claim any ownership
                        over the content you create within Subs-Track.
                    </p>
                    <p>
                        You are responsible for the accuracy of the data you enter. Subs-Track displays
                        information based solely on what you provide — we do not automatically fetch
                        or verify subscription data from external sources.
                    </p>
                </section>

                <section>
                    <h2>6. Disclaimer of Warranties</h2>
                    <p>
                        Subs-Track is provided "as is" without warranties of any kind, either express
                        or implied. We do not guarantee that:
                    </p>
                    <ul>
                        <li>The app will be available at all times without interruption</li>
                        <li>The app will be free of bugs or errors</li>
                        <li>Spending calculations or renewal reminders will always be accurate</li>
                        <li>Data will never be lost due to technical failures</li>
                    </ul>
                    <p>
                        Always maintain your own records of important financial information. Do not
                        rely solely on Subs-Track for critical financial decisions.
                    </p>
                </section>

                <section>
                    <h2>7. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, Aniruddha Dutta shall not be liable
                        for any indirect, incidental, special, or consequential damages arising from
                        your use of or inability to use Subs-Track, including but not limited to
                        financial loss resulting from missed subscription renewals or inaccurate
                        spending data.
                    </p>
                </section>

                <section>
                    <h2>8. Termination</h2>
                    <p>
                        You may stop using Subs-Track and delete your account at any time. We reserve
                        the right to suspend or terminate accounts that violate these Terms of Service.
                    </p>
                    <p>
                        Upon termination, your data will be deleted in accordance with our
                        <Link href="/privacy"> Privacy Policy</Link>.
                    </p>
                </section>

                <section>
                    <h2>9. Changes to Terms</h2>
                    <p>
                        These Terms of Service may be updated at any time. The date at the top of this
                        page reflects the most recent revision. Continued use of the app after changes
                        are posted constitutes acceptance of the updated terms.
                    </p>
                </section>

                <section>
                    <h2>10. Contact</h2>
                    <p>
                        For questions about these Terms of Service, please use the
                        <Link href="/help"> Get Help</Link> page.
                    </p>
                </section>
            </div>

            <div className="legal-footer">
                <Link href="/privacy">Privacy Policy →</Link>
                <Link href="/">← Back to Home</Link>
            </div>
        </div>
    );
}