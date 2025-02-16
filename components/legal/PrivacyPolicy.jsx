import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-wrapper">
          <div className="title-style-five mb-8">
            <h2>
              <span>Privacy Policy</span>
            </h2>
          </div>

          <p className="font-rubik mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h3 className="font-slab text-xl mb-4">1. Information We Collect</h3>
          <p className="font-rubik py-5">
            We collect information that you provide directly to us, including your name,
            email address, phone number, and any other information you choose to provide
            when using our services or contacting us.
          </p>

          <h3 className="font-slab text-xl mb-4">2. How We Use Your Information</h3>
          <p className="font-rubik py-5">
            We use the information we collect to provide, maintain, and improve our
            services, communicate with you about our services, and comply with legal
            obligations.
          </p>

          <h3 className="font-slab text-xl mb-4">3. Information Sharing</h3>
          <p className="font-rubik py-5">
            We do not sell, trade, or otherwise transfer your personally identifiable
            information to third parties. This does not include trusted third parties
            who assist us in operating our website or servicing you.
          </p>

          <h3 className="font-slab text-xl mb-4">4. Data Security</h3>
          <p className="font-rubik py-5">
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the Internet is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="font-slab text-xl mb-4">5. Contact Us</h3>
          <p className="font-rubik py-5">
            If you have any questions about this Privacy Policy, please contact us at:
            efounds@foundwellservices.com
          </p>

          <div className="name font-slab mt-8">Foundwell Services</div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 
