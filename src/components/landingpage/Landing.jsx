import React, { useEffect, useState } from "react";
import Firstsingle from "./Firstsingle";
import styles from "./landing.module.css";
import Secondsingle from "./Secondsingle";
import data from "../../db.json";

const Landing = () => {
  const [datamap, setdatamap] = useState(data.Bestseller);
  const [dada, setdada] = useState(data.Boneless);

  // useEffect(() => {
  //   const getdata1 = async () => {
  //     try {
  //       let res = await fetch("http://localhost:8080/Bestseller");
  //       let data = await res.json();
  //       setdatamap(data);
  //       // console.log(data);
  //     } catch (err) {
  //       console.log("err", err);
  //     }
  //   };

  //   console.table("Bestseller", data.Bestseller);

  //   const getdata2 = async () => {
  //     try {
  //       let res = await fetch("http://localhost:8080/Boneless");
  //       let data = await res.json();
  //       setdada(data);
  //       // console.log(data);
  //     } catch (err) {
  //       console.log("err", err);
  //     }
  //   };

  //   getdata1();
  //   getdata2();
  // }, []);

  return (
    <div className="max-width">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="1000">
            <img
              style={{ height: "400px" }}
              src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_6297c2d3987d0"
              class="d-block w-100"
              alt="dfhgdh"
            />
          </div>
          <div class="carousel-item" data-interval="2000">
            <img
              style={{ height: "400px" }}
              src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7b6d14949"
              class="d-block w-100"
              alt="bdbhd"
            />
          </div>
          <div class="carousel-item">
            <img
              style={{ height: "400px" }}
              src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7a8d9a432"
              class="d-block w-100"
              alt="bdbd"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href=""
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href=""
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div className={styles.luccdiv}>
        <div>
          <img
            src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg"
            alt="luciousmetiapalogo"
          />
          <button>JOIN NOW</button>
        </div>
        <hr />
        <p>
          Enjoy unlimited free delivery & perks crafted for true meat lovers
        </p>
      </div>

      <h2
        style={{
          textAlign: "center",
          color: "#e1003e",
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        Know the Licious way
      </h2>

      <div className={styles.premiumdiv}>
        <div>
          <p>Premium</p>
          <p>Produce</p>
        </div>

        <div>
          <p>World-Class Central</p>
          <p>Production Unit</p>
        </div>

        <div>
          <p>150 Quality</p>
          <p>Checks</p>
        </div>

        <div>
          <p>Delivered Fresh</p>
          <p>Everyday</p>
        </div>

        <div>
          <p>Extraordinary</p>
          <p>Cooking</p>
        </div>
      </div>

      <select className={styles.ssdiv}>
        <option value="discover">Discover How</option>
      </select>

      <div>
        <img
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            height: "110px",
            marginLeft: "20px",
            cursor: "pointer",
            width: "1100px",
          }}
          src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/ebcb9b65-1eb2-396c-ab34-0f0744af0ae8/original/static-bank-units-June-web_(11).jpg?format=webp"
          alt=""
        />
      </div>

      <div className={styles.invitediv}>
        <img
          src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_referral_banner_icon.png"
          alt="micimage"
        />
        <h1>Invite friends and get Rs 200 per referral</h1>
        <img
          style={{ height: "40px", paddingTop: "20px" }}
          src="https://www.licious.in/img/rebranding/play_symbol.png"
          alt="greatersign"
        />
      </div>

      <h2 style={{ color: "#4a4a4a", marginTop: "30px", marginBottom: "30px" }}>
        Best Sellers
      </h2>
      <div className={styles.firdiv}>
        {datamap.map((item) => {
          return <Firstsingle prod={item} />;
        })}
      </div>

      <h2 style={{ color: "#4a4a4a", marginTop: "30px", marginBottom: "30px" }}>
        Boneless
      </h2>
      <div className={styles.firdiv} style={{ marginBottom: "40px" }}>
        {dada.map((item) => {
          return <Secondsingle prod={item} />;
        })}
      </div>

      {/* Rewards div */}
      <div className={styles.rewarddiv}>
        <img
          src="https://www.licious.in/img/rebranding/rewards/rewards_icon.svg"
          alt="revardslogo"
        />
        <div>
          <p>
            <b>My Rewards</b>
            <br />
            Place an order and win your next reward!
          </p>

          <a href="#">Click to View {">"}</a>
        </div>
      </div>

      {/* Checkout blog */}

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#4a4a4a",
          }}
        >
          <h4>Check out our blog</h4>
          <b>
            <p style={{ color: "#e1003e", cursor: "pointer" }}>See all</p>
          </b>
        </div>

        <div className={styles.checkoutdiv}>
          <div>
            <img
              src="https://dao54xqhg9jfa.cloudfront.net/Category/8209cc57-cc85-4e5d-ac6b-4d8f2f36c1ce/original/1604645369.2866--2020-11-0612_19_29--738.jpeg?format=webp"
              alt=""
            />
            <h5>
              This Tangy and spicy Trevally Fish Recipie will soon become your
              favourate!
            </h5>
          </div>

          <div>
            <img
              src="https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_311878256.jpg"
              alt=""
            />
            <h5>
              Make The Most Delicious Lunchbox reciepe at home With Licious!
            </h5>
          </div>
          <div>
            <img
              src="https://www.licious.in/blog/wp-content/uploads/2022/05/Shutterstock_2018885939-2.jpg"
              alt=""
            />
            <h5>
              Take a trip to Italy With This Easy & Delectable Tuskan Baked Fish
              Recipe !
            </h5>
          </div>
        </div>
      </div>

      {/* bannerdiv */}
      <img
        style={{ marginTop: "25px" }}
        src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34bf41463d"
        alt="bannne"
      />

      <div>
        <h4 style={{ color: "#4a4a4a", marginTop: "50px" }}>In The NEWS</h4>

        <div className={styles.newsdiv}>
          <div>
            <img
              src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_629f29838e296"
              alt=""
            />
            <h6 style={{ color: "#4a4a4a" }}>
              Licious announces continous liquidity of ESOP'S From 2022
            </h6>
          </div>

          <div>
            <img
              src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/27/inthenews_61a248a937ab5"
              alt=""
            />
            <h6 style={{ color: "#4a4a4a" }}>
              {" "}
              Why Licious want to become everything store for meet
            </h6>
          </div>

          <div>
            <img
              src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_61a250d471d48"
              alt=""
            />
            <h6 style={{ color: "#4a4a4a" }}>
              India's Licious becomes unicorn with $52 millio
            </h6>
          </div>

          <div>
            <img
              src=" https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_629f2b2c49d88"
              alt=""
            />
            <h6 style={{ color: "#4a4a4a" }}>
              They slayed COVID, went on to build a unicorn: meet
            </h6>
          </div>

          <div>
            <img
              src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/30/inthenews_61a24b7143569"
              alt=""
            />
            <h6 style={{ color: "#4a4a4a" }}>
              {" "}
              Lucious Founder on build unicorn startup based
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
