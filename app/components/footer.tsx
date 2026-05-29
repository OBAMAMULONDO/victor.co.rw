"use client"; // Include this if you are using Next.js App Router

import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // 1. Create the script element
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;

    // 2. Append it to the body to load it safely
    document.body.appendChild(script);

    // 3. Cleanup function: removes the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty array ensures this only runs once when the footer loads

  return (
    <footer className="site-footer">
        <h3 className="text-center font-bold text-xl">We Value Your Feedback</h3>
      <div className="footer-section grid grid-cols-1 md:grid-cols-2 p-8">

        <div>
            CONTENT SECTION
        </div>

        {/* Visme Form Container */}
        <div
          className="visme_d"
          data-title="Customer Service Feedback Form"
          data-url="6vz38ny7-customer-service-feedback-form"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="183150"
        ></div>
      </div>
    </footer>
  );
}