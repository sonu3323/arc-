import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import FabButton from "../Fab/Fab";
import moment from "moment";

const Footer = () => {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <footer>
      <div className={styles.footerText}>
        © SONU SHARMA || MERN DEVELOPER {moment().format("YYYY")} <span></span>
      </div>
      {user && <FabButton />}
    </footer>
  );
};

export default Footer;
