import React from "react";
import Header from "@/components/header/HeaderFour";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy - Foundwell Services",
  description: "Our commitment to protecting your privacy and personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="main-page-wrapper">
      <Header />

      <div className="fancy-text-block-nineteen mt-100 mb-200 md-mt-150 md-mb-150">
        <PrivacyPolicy />
      </div>
    </div>
  );
} 