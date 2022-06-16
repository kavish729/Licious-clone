import React from "react";
import styles from "./checkout.module.css"
import {useNavigate} from "react-router-dom"

const Checkout = () => {

const navigate  = useNavigate()

const hcc  = ()=>{
  navigate("/payment")
}

  return (
    <div className="max-width">
      <div style={{margin:"0px 300px" }}>
        <p>Contact Information</p>
        <input type="email" placeholder="Email" style={{border:"1px solid black"}}/>

        <div style={{display:"flex",gap:"10px"}}>
          <input type="checkbox" style={{height:"20px",paddingLeft:"10px", width:"20px"}}/>
          <p style={{fontSize:"12px", marginTop:"10px"}}>Keep me up to date on news and exclusive offers</p>
        </div>

        <p>Shipping Address</p>

        <div style={{ display:"flex" ,gap:"10px", width:"30%", marginBottom:"10px"}}>
          <input type="text" placeholder="First Name"  style={{border:"1px solid black", width:"200px"}}/>
          <input type="text" placeholder="Last Name"  style={{border:"1px solid black"}}/>
        </div>

        <input type="text" placeholder="company(Optional)"  style={{border:"1px solid black" , marginBottom:"10px"}}/>
                <br></br>

        <input type="text" placeholder="Address"  style={{border:"1px solid black" , marginBottom:"10px"}}/>
        <br></br>
        <input type="text" placeholder="Appartmen, suite etc. (optional)"  style={{border:"1px solid black" , marginBottom:"10px"}}/>
        <br></br>
        <input type="text" placeholder="city"  style={{border:"1px solid black" , marginBottom:"10px"}}/>

        <div style={{display:"flex", gap:"10px", width:"34.5%", marginBottom:"10px"}}>
          <input type="text" placeholder="country"  style={{border:"1px solid black"}}/>
          <input type="number" placeholder="Postal code"  style={{border:"1px solid black"}}/>
        </div>

        <input type="number" placeholder="Phone(optional)"  style={{border:"1px solid black", width:"30%"}}/>

        <button className={styles.bubdiv} onClick={hcc}> <b>Continue to payment</b></button>
      </div>
    </div>
  );
};

export default Checkout;
