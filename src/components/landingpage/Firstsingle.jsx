import React, { useContext, useState } from "react";
import { CountContext } from "../../countcontext/CountContext.jsx";

import styles from "./landing.module.css";

const Firstsingle = ({ prod }) => {
  const { handleadddata, handledeldata } = useContext(CountContext);
  const [count, setcount] = useState(0);

  const handlecount = () => {
    setcount(count + 1);
    handleadddata(prod);
  };

  const handleccount = () => {
    setcount(count + 1);
    handleadddata(prod);
  };

  const handledelcount = () => {
    setcount(count - 1);
    handledeldata(prod);
  };

  return (
    <div>
      <img
        style={{
          height: "300px",
          width: "375px",
          borderTopRightRadius: "15px",
          borderTopLeftRadius: "15px",
        }}
        src={prod.image}
        alt=""
      />
      <h5 style={{ marginLeft: "15px", marginTop: "15px" }}>{prod.name}</h5>
      <p style={{ color: "#a3a3a3" }}>{prod.des}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <p style={{ fontSize: "12px", fontWeight: "800" }}>
          Net Weight: {prod.weight}
        </p>
        <p style={{ fontSize: "12px", fontWeight: "800" }}>
          Gross Weight: {prod.gross}
        </p>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <p style={{ color: "#e1003e", fontWeight: "600" }}>
          MRP: {prod.originalprice}
        </p>
        <p style={{ textDecoration: "line-through", color: "#a3a3a3" }}>
          MRP: {prod.markprice}
        </p>
        <p style={{ color: "green", fontWeight: "600" }}>{prod.off}</p>

        {count === 0 ? (
          <button className={styles.sigbudiv} onClick={handlecount}>
            ADD TO CART
          </button>
        ) : (
          <div style={{ marginLeft: "20px" }}>
            <button
              onClick={handledelcount}
              style={{ border: "1px solid #e1003e" }}
            >
              -
            </button>{" "}
            <b>{count}</b>{" "}
            <button
              onClick={handleccount}
              style={{ border: "1px solid #e1003e" }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Firstsingle;
