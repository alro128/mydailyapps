import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* 1. Copyright Section */}
        <div>
          <h3 className="font-bold mb-2">MyDailyApps</h3>
          <p>© 2024 MyDailyApps. All rights reserved.</p>
        </div>

        {/* 2. Support the Developer Section */}
        <div>
          <a
            href="https://buymeacoffee.com/alro128"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-bold mb-2">Support the Developer</h3>
            <p>If you enjoy these apps, support the developer.</p>
            <div className="flex justify-center items-center">
              <Image
                src="/buymeacoffee-button-transparent.png"
                width="142"
                height="40"
                alt={"Support the developer"}
              ></Image>
            </div>{" "}
          </a>
        </div>

        {/* 4. Links Section */}
        <div>
          <h3 className="font-bold mb-2">Legal</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
