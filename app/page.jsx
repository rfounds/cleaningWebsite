import React from "react";
import Link from "next/link";

import Header from "../components/header/HeaderFour";
import HeroBannerFour from "../components/hero-banner/HeroBannerFour";
import About from "../components/about/About";
import FancyFeatureEleven from "../components/features/FancyFeatureEleven";
import Faq from "../components/faq/Faq";
import PricingThree from "../components/pricing/PricingThree";
import TestimonialThree from "../components/testimonial/TestimonialThree";
import FaqFour from "../components/faq/FaqFour";
import FooterFour from "../components/footer/FooterFour";
import CallToActionFive from "../components/call-to-action/CallToActionFive";
import Image from "next/image";
import './globals.css';
import ContactForm from "../components/contact/form/ContactForm.jsx";
import ContactAddressTwo from "../components/contact/address/ContactAddressTwo";

export const metadata = {
  title: "Foundwell Services",
  description: `Clean with Care`,
};

export default function Home() {
  return (
    <div className="main-page-wrapper p0">
      <Header />
      {/* End HeaderFour */}

      <HeroBannerFour />
      {/* End Hero Banner Four */}

      {/* 
     =============================================
				Fancy Text Block
		============================================== */}
      <div id="about" className="relative -top-10"></div>
      <div className="fancy-text-block-nineteen mt-250 mb-200 md-mt-150 md-mb-150">
        <div className="container">
          <About />
        </div>
      </div>
      {/* End  .fancy-text-block-nineteen*/}

      <div className="fancy-feature-nine py-0 mt-12">
        <Image
          width={14}
          height={19}
          src="/images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image
          width={20}
          height={17}
          src="/images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <Image
          width={16}
          height={24}
          src="/images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <Image
          width={16}
          height={24}
          src="/images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <Image
          width={18}
          height={22}
          src="/images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <Image
          width={23}
          height={18}
          src="/images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />


        <div className="container">
          <FancyFeatureEleven />
        </div>
      </div>
      {/* 
     =============================================
				Client Feedback Slider
		============================================== */}
      <div className="client-feedback-slider-three mb-250 mt-250">
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-50">
            <div className="row">
              <div className="col-lg-7 col-md-9 m-auto">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  <span>Check what our clients </span>say about us.
                </h2>
              </div>
            </div>
          </div>
          {/* End title */}
          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <div className="testimonial-slider-wrapper">
                <Image
                  width={75}
                  height={54}
                  src="/images/icon/65.svg"
                  alt="icon"
                  className="m-auto"
                />
                <div className="clientSliderThree">
                  <TestimonialThree />
                </div>
              </div>
              {/* /.testimonial-slider-wrapper */}
            </div>
          </div>
        </div>
        {/* /.container */}
        <Image
          width={82}
          height={82}
          src="/images/openquote.svg"
          alt="media"
          className="shapes shape_1"
          data-aos="fade-up" data-aos-duration="1200"
        />
        <Image
          width={57}
          height={57}
          src="/images/endquote.svg"
          alt="media"
          className="shapes shape_6"
          data-aos="fade-up" data-aos-duration="1200"
        />
      </div>
      {/* /.client-feedback-slider-three */}

      <div className="faq-section-four">
        <Image
          width={182}
          height={397}
          src="/images/shape/120.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <Image
          width={176}
          height={433}
          src="/images/shape/121.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-60">
            <h6>Services</h6>
            <h2>
              <span>Services we offer</span>
            </h2>
          </div>

          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto">
              <FaqFour />
            </div>
          </div>
          <div
            className="text-center mt-60 md-mt-50"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* End Question and answer */}
      {/* 

     =============================================
			Call To Action
		============================================== */}

      {/* End .fancy-short-banner-five */}
<div className="main-page-wrapper">
        <div className="title-style-five text-center mb-0 md-mb-0">
          <h2>
            <span>Contact Us</span>
          </h2>
        </div>
        <div className="container">
          <div className="form-style-light mt-0">
            <ContactForm />
          </div>
        </div>

    </div>
  );

      {/* 
     =============================================
			Footer Four
		============================================== */}
      <footer className="theme-footer-four">
        <div className="top-footer">
          <div className="container">
            <FooterFour />
          </div>
          {/* /.container */}
        </div>

        <div className="container">
          <div className="bottom-footer-content">
            <p>
              Copyright @{new Date().getFullYear()}{" "}
              Foundwell Services
            </p>
          </div>
          {/* /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-four */}
    </div>
  );
}
