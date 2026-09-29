import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ToolBox',
  description: 'Contact ToolBox for questions, feedback or reports.',
};

export default function Contact() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@example.com';
  return (
    <div className="container prose">
      <h1>Contact</h1>
      <p>For feedback, corrections, accessibility issues or tool problems, email us at <a href={`mailto:${email}`}>{email}</a>.</p>
      <p>When reporting a tool issue, include the tool name, browser, device and a short description of what happened. Please do not send confidential files or sensitive personal information.</p>
    </div>
  );
}
