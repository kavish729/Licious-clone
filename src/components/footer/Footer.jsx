import React from "react";

import styled from "./footer.module.css";
const footer = () => {
  return (
    <div className="max-width">
      <img
        style={{ width: "120px", height: "50px", marginBottom: "15px" }}
        src="https://www.licious.in/img/rebranding/licious-logo.svg"
        alt="footerlogo"
      />

      <div className={styled.fmdiv}>
        {/* first footer div column*/}
        <div>
          <li style={{ fontWeight: "600px", color: "rgb(100 100 100);" }}>
            <b>USEFUL LINKS</b>
          </li>
          <li>Why Licious?</li>
          <li>Refer & Earn</li>
          <li>Licious Cash & Cash+</li>
          <li>Careers</li>
          <li>BLOG</li>
          <li>Campaign</li>
          <li>Bug Bounty Guidelines</li>
          <li>About Us</li>
          <li>FSSC 22000 Certification</li>
          <li>FSSAI Licenses</li>
          <li>Sitemap</li>
        </div>

        {/* second footer div column*/}

        <div>
          <li style={{ fontWeight: "600px", color: "rgb(100 100 100)" }}>
            <b>EXPERIENCE LICIOUS APP ON MOBILE</b>
          </li>
          <div>
            <img
              style={{ width: "120px", height: "40px" }}
              src="https://www.licious.in/img/rebranding/app-store-new.svg"
              alt=""
            />
            <img
              style={{ marginLeft: "15px", width: "120px", height: "40px" }}
              src="https://www.licious.in/img/rebranding/play-store-new.png"
              alt=""
            />
          </div>
        </div>

        {/* Third footer div */}

        <div>
          <div>
            <li style={{ fontWeight: "600px", color: "rgb(100 100 100)" }}>
              <b>CONTACT US</b>
            </li>
            <li>Call: 1800-4190-786</li>
            <li> Talktous@licious.com</li>
          </div>

          <div>
            <li style={{ fontWeight: "600px", color: "rgb(100 100 100)" }}>
              <b>REGISTERED OFFICE ADDRESS:</b>
            </li>
            <li>House of Licious, Zed Pearl, No 12,</li>
            <li>Domlur Layout</li>
            <li>Bangalore, Karnataka - 560071</li>
          </div>
        </div>
        {/* Fourth part of footer div */}

        <div>
          <div>
            <li>T&C</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </div>

          <div>
            <li style={{ fontWeight: "600px", color: "rgb(100 100 100)" }}>
              <b>HAVE SECURITY CONCERN?</b>
            </li>
            <li>Mail us to:</li>
            <li>security@licious.com</li>
          </div>
        </div>

        <div>
          <img
            style={{ height: "30px", width: "150px" }}
            src="https://www.licious.in/img/rebranding/3-dsecure.png"
            alt="footercartlogo"
          />
        </div>
      </div>

      <br />
      {/* social media div */}
      <div className={styled.fmiddiv}>
        <span>KEEP IN TOUCH</span>
        <i className="fa-brands fa-instagram i1"></i>
        <i className="fa-brands fa-facebook-square i2"></i>
        <i className="fa-brands fa-twitter i3"></i>
      </div>
      <br />
      {/* more no of listed div */}
      <div className={styled.citidiv}>
        <li>CITIES WE SERVE</li>
        <hr />
      </div>

      <div className={styled.fddiv}>
        <div>
          <li>
            Bangaluru <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            NCR <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Hydrabad <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Chandigarh <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Panchkula <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Mohali <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Mumbai <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Pune <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            chennai <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Coimbatore <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Jaipur <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>Cochin</li>
        </div>
        <div>
          <li>
            Visakhapatnam <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Pondicherry <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Kolkata <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Trichy <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Lucknow <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Kanpur <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Agra <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Thrissur <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Nagpur <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Bhilai <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>
            Nashik <span style={{ marginLeft: "20px" }}>|</span>
          </li>

          <li>Palakkad</li>
        </div>
      </div>

      <hr />

      <p style={{ textAlign: "center", fontSize: "14px", color: "#333a3f" }}>
        @ 2022
        <span>
          <b>Delightful Gourmet Pvt Ltd. All Rights Reserved.</b>
        </span>
      </p>
      <p
        style={{
          fontFamily: "Lato",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "19.5px",
          color: "#585858",
        }}
      >
        Licious is your one-stop fresh meat delivery shop. In here, you get
        nothing but the freshest meat & seafood, delivered straight to your
        doorstep. Now you can buy meat online anytime at your convenience.
        Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish,
        Prawns, Crabs), Marinades & Cold Cuts. All our products are completely
        natural and healthy. Once you've experienced Licious, you'll
        <br />
        <span style={{ marginLeft: "410px" }}>
          never go back to the old way of buying meat and seafood.
        </span>
      </p>
    </div>
  );
};

export default footer;
