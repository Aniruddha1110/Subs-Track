import "./globals.css";
import "./fanta.css";
import Head from "./Head";
import Link from "next/link";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";
import { HELP_FORM_URL, FEEDBACK_FORM_URL } from "@/utils/links";
export const metadata = {
  title: "Subs-Track",
  description: "Keep track of your subscriptions easily",
};
export default function RootLayout({ children }) {
  const header = (
    <header>
      <div>
        <Link href={'/'}>
          <h1 className="text-gradient">Subs-Track</h1>
        </Link>
        <p>The Subscription Tracker</p>
      </div>
      <div>
        <GoTo />
      </div>
    </header>
  )
  const footer = (
    <footer>
      <div className="hard-line"/>
      <div className="footer-content">
        <div>
          <div>
            <h4>Subs-Track</h4>
            <p>|</p>
            <button disabled>Install app</button>
          </div>
          <p className="copyright">© Copyright 2026, Aniruddha Dutta. <br/> All rights reserved.</p>
        </div>
        <div>
          <p>Facing issues <a href={HELP_FORM_URL} target="_blank" rel="noopener noreferrer">Get Help</a></p>
          <p>Suggestions for improvement? <a href={FEEDBACK_FORM_URL} target="_blank" rel="noopener noreferrer">Share Feedback</a></p>
          <div>
            <Link href={'/privacy'}>Privacy Policy</Link>
            <Link href={'/tos'}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body>
          {header}
          <div className="full-line"/>
          <main>
            {children}
          </main>
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
