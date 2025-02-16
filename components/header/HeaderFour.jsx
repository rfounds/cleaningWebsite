"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";
import Image from "next/image";

const HeaderFour = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 68) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu bg-none fixed"
            : "theme-main-menu sticky-menu bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link href="/">
              <Image
                width={100}
                height={100}
                src="../images/FoundwellNoText2.0.svg"
                alt="Foundwell Services logo"
              />
            </Link>
          </div>
          {/* End Logo */}

          <div className="flex-1 flex justify-center pl-96 !important">
            <Link href="/">
              <Image
                width={450}
                height={180}
                src="../images/FoundwellText.svg"
                alt="Foundwell Services logo"
              />
            </Link>
          </div>
          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex align-items-center">
                  {/* End MegaMenu */}
                  <ul className="right-button-group d-flex align-items-center justify-content-center">
                    <li>
                      <Link href="#contact" className="theme-btn-five ">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  {/* End right-button-group  */}
                </div>
              </div>
            </div>
          </nav>
          {/* End nav */}
        </div>


        {/* 	End Mega Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default HeaderFour;
