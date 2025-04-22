import React from "react";
import Image from "next/image";
const FeatureContent = [
  {
    icon: "60",
    meta: "Contact Us",
    subTitle: `Message us directly and get a response within 24 hours.`,
  },
  {
    icon: "61",
    meta: "Register Here",
    subTitle: `Complete a brief form to get started with our services.`,
  },
  {
    icon: "62",
    meta: "Free Quote",
    subTitle: `Receive your free quote the next day.`,
  },
];

const FeaturesEight = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-thirteen">
            <div className="icon">
              <Image width={78} height={78} style={{objectFit:'contain'}}     src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title font-rubik">{val.meta}</div>
            <p>{val.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesEight;
