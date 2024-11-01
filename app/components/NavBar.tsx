import Link from "next/link";
import React from "react";
import Image from "next/image";
import webLogo from "/public/mydailyapps-logo-w2.webp";
import { FaHome } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar bg-white text-primary">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-base align-middle">
          <Image
            src={webLogo}
            alt="My Daily Apps - Free Template and Apps"
            width={200}
          />{" "}
          <FaHome className="ml-6" /> Home {">"}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
