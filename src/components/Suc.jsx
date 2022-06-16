import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../countcontext/CountContext";
import style from "./placeholder.module.css";

const Suc = () => {
  const { setcdata } = useContext(CountContext);

  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/");
    setcdata([]);
  };
  return (
    <>
      <div className={style.cont}>
        <img
          className={style.imag}
          src="https://cdn.pixabay.com/photo/2017/10/18/14/31/box-2864327_640.png"
          alt=""
        />
        <div className={style.box}>
          <h2 className={style.head}>Order Confirmation</h2>
          <p>Thank you for placing your order with us.</p>
          <p>
            Please check your email for more details. For any questions and
            further information, please contact our customer support.
          </p>
        </div>
        <button onClick={handleChange} className={style.btn}>
          Continue Ordering
        </button>
      </div>
    </>
  );
};

export default Suc;
