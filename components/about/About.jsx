import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
        <Image width={550} height={649} style={{ height: 'fit-content' }} src="/images/livingroom.jpg" alt="about" className="m-auto" />
      </div>
      {/* End .col */}

      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
        <div className="text-wrapper">
          <div className="title-style-five">
            <h2>
              <span>Business Overview</span>
            </h2>
          </div>
          <p className="font-rubik">
            Welcome to Foundwell Services, your premier partner in sub-leasing and real estate-focused cleaning solutions. At Foundwell Services, we understand the pivotal role cleanliness plays in presenting properties at their best.
          </p>
          <div className="name font-slab">Emily Founds, Owner</div>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default About;
