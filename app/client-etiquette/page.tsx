import React from "react";
import Header from "@/components/header/HeaderFour";
import FooterFour from "@/components/footer/FooterFour";
import ClientEtiquette from "@/components/legal/ClientEtiquette";

export const metadata = {
  title: "Client Etiquette - Foundwell Services",
  description: "Guidelines and expectations for a positive client relationship.",
};

export default function ClientEtiquettePage() {
  return (
    <div className="main-page-wrapper">
      <Header />

      <div className="fancy-text-block-nineteen mt-100 mb-200 md-mt-150 md-mb-150">
        <ClientEtiquette />
      </div>
    </div>
  );
}

