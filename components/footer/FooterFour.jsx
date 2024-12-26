import React from "react";
import Link from "next/link";
import Image from "next/image";

const linksFooterContent = [
  {
    itemName: "Home",
    routePath: "#"
  },
  {
    itemName: "About Us",
    routePath: "#about",
  },
  {
    itemName: "Our Mission",
    routePath: "#mission",
  },
  {
    itemName: "Testimonials",
    routePath: "#testimonials",
  },
  {
    itemName: "Services",
    routePath: "#services",
  },
];

const legalFooterContent = [
  {
    itemName: "Terms of use",
    routePath: "#",
  },
  {
    itemName: "Privacy Policy",
    routePath: "#",
  },
  {
    itemName: "Client Etiquete",
    routePath: "/client-etiquette",
  },
];

const productsFooterContent = [
  {
    itemName: "Take the tour",
    routePath: "#",
  },
  {
    itemName: "Team",
    routePath: "#",
  },
  {
    itemName: "Self Service",
    routePath: "#",
  },
  {
    itemName: "Contact",
    routePath: "#",
  },
];

const FooterFour = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-xl-4 col-lg-3 col-12 footer-about-widget">
        <div className="logo">
          <Link     href="/">
            <Image width={136} 
              height={136} src="/images/FoundwellNoText2.0.svg" alt="brand" />
          </Link>
        </div>
        <ul className="font-rubik mt-10">
          <li>
            <a href="mailto:@efounds@foundwellservices.com">efounds@foundwellservices.com</a>
          </li>
          <li>
            <a href="tel:+19186953818">(918) 695-3818</a>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}

      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Links</h5>
        <ul>
          {linksFooterContent.map((list, i) => (
            <li key={i}>
              <Link     href={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* /.footer-list */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Legal</h5>
        <ul>
          {legalFooterContent.map((list, i) => (
            <li key={i}>
              <Link     href={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}

      <div className="col-xl-2 col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Products</h5>
        <ul className="pe-5">
          {productsFooterContent.map((list, i) => (
            <li key={i}>
              <Link     href={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
  );
};

export default FooterFour;
