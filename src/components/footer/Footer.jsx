import React, { useState } from "react";
import shopping_bag from "../../assets/icons/shopping_bag.png";
import styles from "../footer/footer.module.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import whatsapp from "../../assets/icons/whatsapp.png";
function Footer() {
  const [isFocus, setIsFocus] = useState("");
  return (
    <div className={styles.wrapper}>
      <footer>
        <header>
          <img src={shopping_bag} alt="" />
          <strong>LowCost</strong>
        </header>

        <ul>
          <li>Company</li>
          <li>Product</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div>
          <img src={facebook} alt="Instagram" />
          <img src={instagram} alt="Facebook" />
          <img src={whatsapp} alt="Whatsapp" />
        </div>
        <hr />
        <i>Copyright @ 2025 - All Right Reserved</i>
      </footer>
    </div>
  );
}

export default Footer;
