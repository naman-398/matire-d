import React from "react";
import lastimg from "../images/last-section-img.png";
const Section6 = () => {
  return (
    <div>
      <section className="position-relative z-1">
        <div className="container s6-padding">
          <div className="row position-relative z-1">
            <div className="col-md-6 col-12 d-flex justify-content-center flex-column">
              <h6 className="ff-work fw-6 fs-2sm linear-gradient-font d-flex align-items-center gap-8">
                Contact US{" "}
                <svg width="44" height="1" viewBox="0 0 44 1" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <h2 className="ff-work fw-7 fs-lg color-black mt-8">
                Get in touch!
              </h2>
              <div className="box3">
                <div className="d-flex align-items-center flex-xsm-column gap-24 mt-75">
                  <div className="bb-1 w-100">
                    <input
                      type="text"
                      placeholder="Full Name "
                      className="border-0 w-100 pb-16 outline-none"
                    />
                  </div>
                  <div className="bb-3 w-100">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="border-0 w-100 pb-16 outline-none"
                    />
                  </div>
                </div>
                <div className="bb-2 mt-24">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="border-0 pb-16 outline-none"
                  />
                </div>
                <div className="bb-2 mt-24">
                  <textarea
                    placeholder="Message"
                    className="border-0 pb-24 outline-none resize-none w-100"
                  ></textarea>
                </div>
              </div>
              <div className="mt-60">
                <a
                  href="#"
                  className="ff-work fw-7 fs-3sm color-white submit1 text-decoration-none"
                >
                  Submit
                </a>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center">
              <img
                src={lastimg}
                alt="form-section-img"
                className="w-100 h-100 last-section-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section6;
