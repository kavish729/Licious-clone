import React, { useContext } from "react";
import styles from "../navbar/navbar.module.css";

// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   Button,
//   Input,
// } from "@chakra-ui/react";
import { CountContext } from "../../countcontext/CountContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { cdata } = useContext(CountContext);
  const { isAuth, setisAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();

  const logg = () => {
    if(isAuth==true) {
    setisAuth(!isAuth);
    }
  };

  const handc = () => {
    navigate("/cart");
  };
  return (
    <div className="max-width">
      <div className={styles.headmaindiv}>
        <Link to="/">
          <img
            src="https://www.licious.in/img/rebranding/licious-logo.svg"
            alt="logoimg"
          />
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <img
            src="https://www.licious.in/img/rebranding/location_icon.svg"
            alt="location logo"
          />
          <select style={{ borderRadius: "5px", border: "2px solid #d11243" }}>
            <option value="">Select City</option>
            <option value="bangaluru">Bangaluru</option>
            <option value="kota">Kota</option>
            <option value="bundi">Bundi</option>
            <option value="bhilwara">bhilwara</option>
            <option value="jaipur">jaipur</option>
            <option value="bijoliya">Bijoliya</option>
            <option value="Pune">Pune</option>
            <option value="Chennai">chennai</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={{ display: "flex", cursor: "pointer" }}>
          <input
            type="search"
            placeholder="Search for any delicious products..."
          />
          <button className={styles.headsearchdiv}>
            <img
              src="https://www.licious.in/img/rebranding/search_icon.svg"
              alt="serachlogo"
            />
          </button>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <img
            src="https://www.licious.in/img/rebranding/profile_icon.svg"
            alt="userlogo"
          />
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "#d11243",
              color: "white",
              border: "none",
              outline: "none",
              borderRadius: "5px",
              height: "30px",
              fontSize: "20px",
            }}
            onClick={logg}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              {isAuth ? "LOGOUT" : "LOGIN"}
            </Link>
          </button>
        </div>

        {/* food catogary div */}

        <div className={styles.cartdiv}>
          <Link to="/cart">
            <button
              type="button"
              class="btn  position-relative"
              onClick={handc}
            >
              <img
                src="https://www.licious.in/img/rebranding/cart_icon.svg"
                alt="cartlogo"
              />

            
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cdata.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Caurasal div part */}
    </div>
  );
};

export default Navbar;
