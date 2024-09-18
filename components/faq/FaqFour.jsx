'use client'


import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: "Pre-listing Cleaning",
    desc: `Prepare properties to impress potential buyers or renters.`,
    expand: "a",
  },
  {
    title: "Move-In/Move-Out Cleaning",
    desc: `Ensure properties are move-in ready or restored to pristine condition after a tenant departs.`,
    expand: "b",
  },
  {
    title: "Vacant Property Cleaning",
    desc: `Maintain cleanliness in vacant homes to aid in faster sales or rentals.`,
    expand: "c",
  },
  {
    title: "Open House Cleaning",
    desc: `Make a lasting impression during open houses with our thorough cleaning services.`,
    expand: "d",
  },
  {
    title: "Post-Construction Cleaning",
    desc: `Remove debris and dust to reveal the true potential of newly constructed or renovated spaces.`,
    expand: "e",
  },
  {
    title: "Airbnb Cleaning Services",
    desc: `At Foundwell Services we ensure that your Airbnb property is immaculately clean and inviting for every guest arrival. With our dedicated team and tailored cleaning approach, we strive to help you achieve outstanding guest satisfaction and maximize your rental income.`,
    expand: "f",
  },
];

const FaqFour = () => {
  return (
    <div
      className="accordion-style-four"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="faq-wrraper">
        <Accordion preExpanded={["b"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem className="card" key={i} uuid={item.expand}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h5 className="mb-0">
                    <button className="btn btn-link">{item.title}</button>{" "}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel className="card-body fadeInUp">
                <p>{item.desc}</p>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqFour;
