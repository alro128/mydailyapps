import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="flex justify-center align-top min-h-screen bg-base-200 p-6">
      <Head>
        <title>Terms of Use</title>
        <meta
          name="description"
          content="Terms of Use for our Daily Apps website"
        />
      </Head>
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Use</h1>
        <p className="mb-4">
          Welcome to our Daily Apps website. By accessing or using our website,
          you agree to abide by the following terms and conditions. Please read
          them carefully.
        </p>
        <h2 className="text-2xl font-semibold mb-4">1. No Data Collection</h2>
        <p className="mb-4">
          We do not collect, store, or process any personal data from our users.
          No private data is saved on our servers, ensuring complete user
          privacy. All interactions and data processing occur locally on your
          device.
        </p>
        <h2 className="text-2xl font-semibold mb-4">2. Use of the Website</h2>
        <p className="mb-4">
          You may use our apps for personal, non-commercial purposes only. You
          must not attempt to reverse-engineer, copy, or modify any part of our
          applications.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          3. Limitation of Liability
        </h2>
        <p className="mb-4">
          We are not responsible for any damages or data loss resulting from the
          use of our applications. All tools and services are provided &quot;as
          is&quot; without any warranties.
        </p>
        <h2 className="text-2xl font-semibold mb-4">4. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to update these terms at any time. Users are
          encouraged to review this page periodically to stay informed about the
          latest terms.
        </p>
        <div className="text-center mt-8 underline text-secondary">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
