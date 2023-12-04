import React from "react";
import footerlogo from "../images/footer-logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer-bg-img footer-bg-img footer-top-margin position-relative z-1">
        <div className="container">
          <div className="d-flex justify-content-center footer-top-padding">
            <img src={footerlogo} alt="footer-logo" />
          </div>
          <h4 className="ff-work fw-4 fs-1sm color-white text-center footer-para mx-auto pt-16">
            Proudly Australian developed software. Focused on increasing
            efficiency and growing business within the beauty industry.
          </h4>
          <div className=" d-flex gap-51 align-items-center justify-content-center pt-34">
            <a
              href="#"
              className="ff-work fw-6 fs-1sm color-white text-decoration-none"
            >
              Navigation
            </a>
            <a
              href="#"
              className="ff-work fw-6 fs-1sm color-white text-decoration-none"
            >
              Company
            </a>
            <a
              href="#"
              className="ff-work fw-6 fs-1sm color-white text-decoration-none"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="container">
          <div className="ff-work fw-4 fs-sm color-white text-center py-15">
            Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
