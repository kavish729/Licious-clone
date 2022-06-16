import React, { useContext, useState } from "react";
import styles from "./cart.module.css";
import { CountContext } from "../countcontext/CountContext";
import { useNavigate } from "react-router";
const Cart = () => {
  const { cdata } = useContext(CountContext);
  const navigate = useNavigate()

  const [promo, setpromo] = useState("");
  const [sample, setsample] = useState([cdata]);
  console.log("sample", sample[0]);

  var totalprice = sample[0].reduce(function (acc, elem) {
    return acc + elem.prod.originalprice;
  }, 0);

  const hc = (e) => {
    setpromo(e.target.value);
  };

  const [aftercoupen, setaftercoupen] = useState(totalprice);
  const apppromo = () => {
    if (promo == "KAVISH40") {
      totalprice = totalprice - 40;
    }
    setaftercoupen(totalprice);
    console.log(totalprice);
  };


const handcheck = ()=>{
  navigate("/checkout")
}

  return (
    <div className="max-width">
      <div style={{ textAlign: "center" }}>
        <p style={{ paddingTop: "10px", marginLeft: "20px", fontSize: "20px" }}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
          Cart Data
        </p>
      </div>

      <div style={{ backgroundColor: "black" }}>
        <p style={{ color: "white", textAlign: "center" }}>
          Apply Promo Code <b>KAVISH40 </b> For Discount ₹40 Rupess.
        </p>
      </div>

      <div className={styles.ccdiv}>
        <div style={{ width: "65%" }}>
          <hr />
          <div style={{ display: "flex", gap: "100px", marginLeft: "170px" }}>
            <div>
              {" "}
              <p>
                {" "}
                <b>Name </b>
              </p>
            </div>
            <div>
              {" "}
              <p style={{ marginLeft: "190px" }}>
                {" "}
                <b>Quantity</b>
              </p>
            </div>
            <div>
              {" "}
              <p>
                {" "}
                <b>Price</b>
              </p>
            </div>
          </div>
          {/* data mapping */}
          <div className={styles.ddddddiv}>
            {sample[0].map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    marginBottom: "10px",
                    border: "1px solid black",
                  }}
                >
                  <div>
                    <img
                      style={{ height: "100px" }}
                      src={item.prod.image}
                      alt=""
                    />
                  </div>
                  <div style={{ width: "35%" }}>
                    <p>{item.prod.name}</p>
                  </div>

                  <div style={{ marginLeft: "130px" }}>
                    <p>1</p>
                  </div>
                  <div style={{ marginLeft: "130px" }}>
                    <p>₹{item.prod.originalprice}</p>
                  </div>
                </div>
              );
            })}
          </div>{" "}
          <hr />
          <div style={{ display: "flex", gap: "550px", marginLeft: "40px" }}>
            <p>
              {" "}
              <b> {sample[0].length} item</b>
            </p>
            <p>
              <b>Total: ₹{totalprice}</b>
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            border: "1px solid black",
            height: "290px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <div>
            <p>Enter Promo Code</p>
          </div>
          <div style={{ display: "flex" }}>
            <input
              style={{ width: "200px", marginRight: "10px" }}
              type="text"
              placeholder="Promo Code"
              onChange={hc}
            />
            <button onClick={apppromo} className={styles.divvv}>
              SUBMIT
            </button>
          </div>

          <div>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <p style={{ width: "80%", color: "#a3a3a3" }}>Shipping cost</p>
              <p style={{ width: "20%", textAlign: "right", color: "#a3a3a3" }}>
                +₹40
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <p style={{ width: "80%", color: "#a3a3a3" }}>Discount</p>
              <p style={{ width: "20%", textAlign: "right", color: "#a3a3a3" }}>
                -₹40
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ width: "95%", color: "#a3a3a3" }}>Tax</p>
              <p style={{ width: "20%", textAlign: "right", color: "#a3a3a3" }}>
                ₹0.00
              </p>
            </div>

            <div style={{ display: "flex", gap: "150px" }}>
              <b>
                {" "}
                <p>Estimated Cost</p>
              </b>
              <b>
                <p style={{ width: "20%", textAlign: "right" }}>
                  ₹{aftercoupen}
                </p>
              </b>
            </div>

            <button
            onClick={handcheck}
              style={{
                backgroundColor: "yellow",
                border: "1px solid yellow",
                borderRadius: "10px",
                height: "40px",
                width: "200px",
                marginTop: "30px",
                marginLeft: "50px",
              }}
            >
              {" "}
              <b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  fill="currentColor"
                  class="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
                Checkout
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
