

'use client'
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";
import MenuLinkTwo from "./MenuLinkTwo";


const Pricing = [
  {
    name: "Customer Support",
    routerPath: "/pricing-cs",
  },
  {
    name: "Event Organiser",
    routerPath: "/pricing-eo",
  },
  {
    name: "Project Management",
    routerPath: "/pricing-pm",
  },
];
const AboutUs = [
  {
    name: "Customer Support",
    routerPath: "/about-cs",
  },
  {
    name: "Event Organiser",
    routerPath: "/about-eo",
  },
  {
    name: "Project Management",
    routerPath: "/about-pm",
  },
  {
    name: "Documentation",
    routerPath: "/about-doc",
  },
];

const ContactUS = [
  {
    name: "Customer Support",
    routerPath: "/contact-cs",
  },
  {
    name: "Event Organiser",
    routerPath: "/contact-eo",
  },
  {
    name: "Project Management",
    routerPath: "/contact-pm",
  },
  {
    name: "Documentation",
    routerPath: "/contact-doc",
  },
];

const Services = [
  {
    name: "Service Version 01",
    routerPath: "/service-v1",
  },
  {
    name: "Service Version 02",
    routerPath: "/service-v2",
  },
  {
    name: "Service Version 03",
    routerPath: "/service-v3",
  },
  {
    name: "Service Version 04",
    routerPath: "/service-v4",
  },
  {
    name: "Service Details",
    routerPath: "/services/1",
  },
];

const MegaMenu = () => {
  const pathname = usePathname();
  const [currentTopRoute, setCurrentTopRoute] = useState('Home')
  return (
    <ul className="navbar-nav">

      <li className={currentTopRoute == 'Pages' ? "nav-item active dropdown":"nav-item dropdown" }>
        <a className={currentTopRoute == 'Pages' ? "nav-link dropdown-toggle active":"nav-link dropdown-toggle"} href="#" data-toggle="dropdown">
          Pages
        </a>
        <ul className="dropdown-menu">
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              className={ Pricing.filter((elm)=>elm.routerPath.split('/')[1] == pathname.split('/')[1])[0]? 'dropdown-item dropdown-toggle active':'dropdown-item dropdown-toggle'}
              
              data-toggle="dropdown"
            >
              Pricing
            </a>
            <ul className="dropdown-menu">
              {Pricing.map((val, i) => (
                <MenuLink topMenu={'Pages'}  val={val} key={i} setCurrentTopRoute={setCurrentTopRoute} />
              ))}
            </ul>
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              className={AboutUs.filter((elm)=>elm.routerPath.split('/')[1] == pathname.split('/')[1])[0]? 'dropdown-item dropdown-toggle active':'dropdown-item dropdown-toggle'}
              
              data-toggle="dropdown"
            >
              About Us
            </a>
            <ul className="dropdown-menu">
              {AboutUs.map((val, i) => (
                <MenuLink topMenu={'Pages'}  val={val} key={i} setCurrentTopRoute={setCurrentTopRoute} />
              ))}
            </ul>
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              className={ContactUS.filter((elm)=>elm.routerPath.split('/')[1] == pathname.split('/')[1])[0]? 'dropdown-item dropdown-toggle active':'dropdown-item dropdown-toggle'}
              
              data-toggle="dropdown"
            >
              Contact Us
            </a>
            <ul className="dropdown-menu">
              {ContactUS.map((val,i)=>
            <MenuLink topMenu={'Pages'}  val={val} key={i} setCurrentTopRoute={setCurrentTopRoute} />)}
            </ul>
          </li>
          <li>
          <MenuLinkTwo topMenu={'Pages'}  val={{ name: 'FAQ',
    routerPath: '/faq'}} setCurrentTopRoute={setCurrentTopRoute} />

         
          </li>
          <li>
          <MenuLinkTwo topMenu={'Pages'}  val={{ name: 'Faq Details',
    routerPath: '/faqs/1'}} setCurrentTopRoute={setCurrentTopRoute} />
       
          </li>
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className={currentTopRoute == 'Feature' ? "nav-item active dropdown":"nav-item dropdown" }>
        <a className={currentTopRoute == 'Feature' ? "nav-link dropdown-toggle active":"nav-link dropdown-toggle"} href="#" data-toggle="dropdown">
          Feature
        </a>

        <ul className="dropdown-menu">
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              className={Services.filter((elm)=>elm.routerPath.split('/')[1] == pathname.split('/')[1])[0]? 'dropdown-item dropdown-toggle active':'dropdown-item dropdown-toggle'}
              
              data-toggle="dropdown"
            >
              Services
            </a>
            <ul className="dropdown-menu">
              {Services.map((val, i) => (
                <MenuLink topMenu={'Feature'}  val={val} key={i} setCurrentTopRoute={setCurrentTopRoute} />
              ))}
            </ul>
          </li>
          <li>
          <MenuLinkTwo topMenu={'Feature'}  val={{ name: 'Our Solution',
    routerPath: '/solution-management'}} setCurrentTopRoute={setCurrentTopRoute} />

          </li>
          <li>
          <MenuLinkTwo topMenu={'Feature'}  val={{ name: 'Product Feature',
    routerPath: '/product-customer-support'}} setCurrentTopRoute={setCurrentTopRoute} />
         
          </li>
          <li>
          <MenuLinkTwo topMenu={'Feature'}  val={{ name: 'Our Features',
    routerPath: '/features-customer-support'}} setCurrentTopRoute={setCurrentTopRoute} />
      
          </li>
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
