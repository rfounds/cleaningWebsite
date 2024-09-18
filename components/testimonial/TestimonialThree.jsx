'use client'


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialThree() {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
  };

  const TestimonilContent = [
    {
      desc: `Foundwell is such a breath of fresh air and a beautifully run company. Emily and her team of professionals really put my mind at ease prior to hosting family. When stress levels are high, she was immediately responsive, kind, easy and seamless to get a hold of and work with.`,
      reviewerName: "Jessica F",
      designation: "Beverly Hills, CA",
    },
    {
      desc: `I found Emily via recommendations on NextDoor. I am so glad I did. She and her team were thorough, hardworking and knowledgeable about cleaning older homes. Great value for a job well done.`,
      reviewerName: "K. A.",
      designation: "San Diego, CA",
    },
    {
      desc: `I found an outstanding house cleaner who is very detailed and reliable. I am so pleased with her service, and her commitment.Emily does NOT charge for providing an estimate.`,
      reviewerName: "Richard S.",
      designation: "Poway, CA",
    }, ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div
          className="item"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <p>{val.desc}</p>
          <h6 className="name">{val.reviewerName}</h6>
          <span className="desig">{val.designation}</span>
        </div>
      ))}
    </Slider>
  );
}
