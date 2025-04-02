"use client";
import { useEffect } from "react";

export default function EmbeddedForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="/widget/survey/ke9FShcRiYeUBR9N1AY3"
      style={{ border: "none", width: "100%", height: "600px" }}
      scrolling="no"
      id="ke9FShcRiYeUBR9N1AY3"
      title="Survey Widget"
    ></iframe>
  );
}

