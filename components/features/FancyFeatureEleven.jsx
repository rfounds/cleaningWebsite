'use client'



import React from "react";
import Link from "next/link";
import Image from "next/image";

const FancyFeatureEleven = () => {
  return (
    <>
      <div id="mission" className="block-style-sixteen mt-0 mb-0 py-0">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              <h3 className="title">Our Mission</h3>
              <p>
                Our mission at Foundwell Services LLC is to provide exceptional cleaning services tailored specifically for the real estate industry. We aim to support our clients in showcasing properties in the best possible light, enhancing their appeal to potential buyers or tenants.
              </p>
            </div>
          </div>
        </div>
        <Image width={765} height={745}
          style={{ height: 'fit-content' }}
          src="/images/kitchen.jpg"
          alt="image"
          className="shapes screen-one"
        />
      </div>
      {/* /.block-style-sixteen */}

    </>
  );
};

export default FancyFeatureEleven;
