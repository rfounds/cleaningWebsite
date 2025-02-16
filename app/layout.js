'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../components/ScrollToTop";
import Context from '@/context/Context';
import { useEffect } from 'react'
import '../public/main.scss'
import FooterFour from "../components/footer/FooterFour";






export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto:wght@300;400;500;700&family=Rubik:wght@300;400;500&display=swap" />
      </head>
      <body  ><div ><Context> {children}</Context></div>
        {<ScrollToTop />}</body>
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

        <div className="container ">
          <div className="bottom-footer-content w-25">
            <p className="">
              Copyright @{new Date().getFullYear()}{" "}
              Foundwell Services
            </p>
          </div>
          {/* /.bottom-footer */}
        </div>
      </footer>
    </html>
  )
}
