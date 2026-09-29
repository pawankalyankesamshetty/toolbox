import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'ToolBox privacy policy.' };

export default function Privacy() {
  return (
    <div className="container prose">
      <h1>Privacy Policy</h1>
      <p>Last updated: September 2026</p>
      <h2>Information you provide</h2>
      <p>ToolBox does not require an account for its core tools. Browser-based tools may process files or text locally on your device.</p>
      <h2>Files and local processing</h2>
      <p>Tools designed for client-side processing do not intentionally upload your input to a ToolBox server. Processing behavior can differ by tool, so review the individual tool page before using it with sensitive information.</p>
      <h2>Analytics and advertising</h2>
      <p>ToolBox may use analytics and Google advertising services after they are configured. These services may use cookies or similar technologies according to their own policies and applicable consent requirements.</p>
      <h2>Contact</h2>
      <p>For privacy questions, use the contact address published on our Contact page.</p>
    </div>
  );
}
