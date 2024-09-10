import React from "react";
import Link from "next/link";
import FeaturesEight from "../features/FeaturesEight";
import Image from "next/image";

const HeroBannerFour = () => {
  return (
    <div className="hero-banner-four background-image">
      <Image
        width="213"
        height="86"
        src="/images/shape/100.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <Image
        width="10"
        height="19"
        src="/images/shape/101.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <Image
        width="242"
        height="433"
        src="/images/shape/102.svg"
        alt="shape"
        className="shapes shape-six"
      />
      <Image
        width="246"
        height="400"
        src="/images/shape/103.svg"
        alt="shape"
        className="shapes shape-seven"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last">
              <Image
                src="/images/dining.jpg"
                alt="shape"
                className="illustration"
                width={660}
                height={471}
              />
          </div>
          {/* End .col */}

          <div className="col-lg-6 order-lg-first">
            <div className="text-wrapper">
              <h1 data-aos="fade-up" data-aos-duration="1200">
                Cleaning services In the San Diego area.
              </h1>
              <p
                className="sub-text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Clean spaces, happy faces
              </p>
              <Link
                href="/login"
                className="theme-btn-five"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                {" "}
                Let’s get started
              </Link>
            </div>
            {/* /.text-wrapper */}
          </div>
          {/* End .col */}
        </div>
      </div>

      <div className="fancy-feature-eight mt-160 md-mt-100">
        <div className="container">
          <div className="bg-wrapper">
            <FeaturesEight />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-eight */}
    </div>
  );
  //  {/* /.hero-banner-four */}
};

export default HeroBannerFour;
