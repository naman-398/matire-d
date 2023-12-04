import React from "react";
import sliderimg from "../images/sliderimg.png";
const Section4 = () => {
  return (
    <div>
      <h6 className="ff-work fs-2sm fw-7 linear-gradient-font text-center d-flex justify-content-center gap-8 align-items-center">
        Modules <svg width="44" height="1" viewBox="0 0 44 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="44" y2="0.5" stroke="black"/>
<line y1="0.5" x2="44" y2="0.5" stroke="url(#paint0_linear_19268_1837)"/>
<defs>
<linearGradient id="paint0_linear_19268_1837" x1="6.67021" y1="1" x2="7.99292" y2="7.77879" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD9B2B"/>
<stop offset="1" stop-color="#F14F09"/>
</linearGradient>
</defs>
</svg>

      </h6>
      <h2 className="ff-work fw-7 fs-lg color-black text-center">
        Why Choose <span className=" linear-gradient-font">Maître D?</span>
      </h2>
      <div className="slider-card mx-auto">
        <div className="row">
          <div className="col-md-6 col-12 d-flex justify-content-center">
            <img src={sliderimg} alt="img" className="w-100 slider-img" />
          </div>
          <div className="col-md-6 col-12 mt-md-0 mt-24">
            <div className="d-flex align-items-center justify-content-between">
              <p className="ff-work fs-md fw-7 color-black">
                Manage Your{" "}
                <span className="linear-gradient-font"> Customer Queues </span>
              </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="29"
                  viewBox="0 0 27 29"
                  fill="none"
                >
                  <path
                    d="M8.51074 1L18.124 28.4384"
                    stroke="#F6A915"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M1 20.5908L26 10.1648"
                    stroke="#F6A915"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
            </div>
            <p className="ff-work fs-2sm fw-4 color-lightblack mt-24 lh-154">
              The Maitre D queue management system is designed to allow your
              customers to sign up for walk-in appointments and select the
              services they want ahead of time. The queue will provide them with
              estimated wait times, costs and will allow them to even select
              their preferred stylist.
            </p>
            <p className="ff-work fs-2sm fw-4 color-lightblack mt-24 lh-154">
              As the queue gets bigger or smaller, its easy to monitor your
              operations and understand when wait periods are getting too long
              to service your customer base and to better resource your stores
              during busy periods. Beat the frustration of your customers ahead
              of time and help manage how they wait for your services
            </p>
            <div className="mt-24">
              <a
                href="#"
                className="text-decoration-none ff-work fw-7 color-white fs-3sm buy"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
