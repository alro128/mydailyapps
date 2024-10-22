import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="flex justify-center align-top min-h-screen bg-base-200 p-6">
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy for our Daily Apps website"
        />
      </Head>
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">
          At our Daily Apps website, we take your privacy seriously. This
          Privacy Policy outlines the types of personal information we do and do
          not collect, how we use this information, and how we ensure your data
          remains secure.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Do Not Collect
        </h2>
        <p className="mb-4">
          We do not collect, store, or share any personal information. No
          private data, such as names, emails, or usage data, is gathered from
          our users. All interactions occur solely on your device, ensuring
          complete user privacy.
        </p>
        <h2 className="text-2xl font-semibold mb-4">2. Cookies and Tracking</h2>
        <p className="mb-4">
          Our website does not use cookies or any tracking technologies to
          monitor user behavior or collect data. You can use our applications
          with full assurance that your privacy is protected.
        </p>
        <h2 className="text-2xl font-semibold mb-4">3. Third-Party Services</h2>
        <p className="mb-4">
          We do not integrate or rely on any third-party services that collect
          or process user data. All functionality is built to operate
          independently without external data sharing.
        </p>
        <h2 className="text-2xl font-semibold mb-4">4. Security</h2>
        <p className="mb-4">
          We are committed to maintaining a high level of security for our
          users. Since no personal data is collected or stored, there is no risk
          of data breaches or unauthorized access.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          5. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Users are
          encouraged to review this page periodically to stay informed about any
          changes. Your continued use of the site indicates your acceptance of
          the updated policy.
        </p>
        <div className="text-center mt-8 underline text-secondary">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
