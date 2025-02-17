import React from "react";
import Header from "@/components/header/HeaderFour";
import AboutUs from "@/components/about/AboutUs";

export const metadata = {
  title: "About Us - Foundwell Services",
  description: "Learn about the Foundwell Services team.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="main-page-wrapper">
      <Header />

      <div className="fancy-text-block-nineteen mt-100 mb-200 md-mt-150 md-mb-150">
        <AboutUs />
      </div>
    </div>
  );
} 
