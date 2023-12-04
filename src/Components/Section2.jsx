import React from "react";
import mobileman from "../images/mobile-man.png";
const section2 = () => {
  return (
    <div>
      <div className="container">
        <div className="row pt-3">
          <div className="col-md-6 col-12 justify-content-center d-flex">
            <img src={mobileman} alt="" className="w-100 mx-auto s2-img" />
          </div>
          <div className="col-md-6 col-12  d-flex align-item-center justify-content-center flex-column">
            <div className="ff-work">
              <h6 className=" fw-6 fs-2sm linear-gradient-font d-flex align-items-center gap-8">
                About Us{" "}
                <svg
                  width="44"
                  height="1"
                  viewBox="0 0 44 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="44" y2="0.5" stroke="black" />
                  <line
                    y1="0.5"
                    x2="44"
                    y2="0.5"
                    stroke="url(#paint0_linear_19268_1799)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_19268_1799"
                      x1="6.67021"
                      y1="1"
                      x2="7.99292"
                      y2="7.77879"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD9B2B" />
                      <stop offset="1" stop-color="#F14F09" />
                    </linearGradient>
                  </defs>
                </svg>
              </h6>
              <h2 className=" fw-7 fs-lg color-black mt-8">
                What is <span className="linear-gradient-font">Maître D?</span>
              </h2>
              <p className=" fw-4 fs-2sm color-lightblack para pt-4">
                Maître D is a full service solution, designed specifically for
                salons and barbershops. Our approach is modular, which means you
                only pay for the functionality that you need. Each module is
                completely integrated into the solution, so your entire business
                always remains syncronized. Maître D allows you to see
                everything within your business, from one location.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;
