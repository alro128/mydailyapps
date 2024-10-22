import Link from "next/link";
import React from "react";
import Image from "next/image";
import webLogo from "/public/mydailyapps-logo-w2.webp";
import { FaHome } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar bg-white text-primary">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-primary"
          >
            <li>
              <a>Free Templates</a>
            </li>
            <li>
              <a>Social</a>
              <ul className="p-2">
                <li>
                  <a>Latecomer</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Gardening</a>
              <ul className="p-2">
                <Link href={"/plantprofiler"}>Plant Profiler</Link>
                <Link href={"/plantpotvolume"}>
                  Plant Pot Volume Calculator
                </Link>
              </ul>
            </li>
            <li>
              <a>Music</a>
              <ul className="p-2">
                <li>
                  <a>Chord Metronome</a>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}
        <Link href={"/"} className="btn btn-ghost text-base">
          <Image
            src={webLogo}
            alt="My Daily Apps - Free Template and Apps"
            width={200}
            //height={60}
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />{" "}
          <FaHome className="ml-6" /> Home {">"}
        </Link>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Free Templates</a>
          </li>
          <li>
            <details>
              <summary>Social</summary>
              <ul className="p-2 w-72 bg-primary">
                <li>
                  <a>Latecomer Bill Calculator</a>
                </li>
                <li>
                  <Link href={"/users"}>Users</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Gardening</summary>
              <ul className="p-2 w-72 bg-primary">
                <li>
                  <Link href={"/plantprofiler"}>Plant Profiler</Link>
                </li>
                <li>
                  <Link href={"/plantpotvolume"}>
                    Plant Pot Volume Calculator
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Music</summary>
              <ul className="p-2 w-72 bg-primary">
                <li>
                  <Link href={"/plantpotvolume"}>Chord Metronome</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>School</summary>
              <ul className="p-2 w-72 bg-primary">
                <li>
                  <Link href={"/wordcounter"}>Word Counter</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div> */}
      <div className="navbar-end"></div>
    </div>
  );
};

export default NavBar;
