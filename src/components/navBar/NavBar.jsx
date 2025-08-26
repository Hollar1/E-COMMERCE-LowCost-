import { useState } from "react";
import styles from "../navBar/navBar.module.scss";
import shopping_bag from "../../assets/icons/shopping_bag.png";
import shopping_cart from "../../assets/icons/shopping_cart.png";
import { Link } from "react-router-dom";
import { useCart } from "../../pages/cart/Cart";

function NavBar() {
  const { cartItems } = useCart(); // get cart items
  const [isFocus, setIsFocus] = useState("");
  return (
    <div className={styles.parent_wrapper}>
      <nav>
        <div>
          <img src={shopping_bag} alt="" />
          <strong>LowCost</strong>
        </div>

        <div>
          <ul>
            <li
              onClick={() => {
                setIsFocus("shop");
              }}
            >
              {" "}
              <Link style={{ textDecoration: "none" }} to={"/"}>
                {" "}
                Shop{" "}
              </Link>
              {isFocus === "shop" ? <hr /> : null}
            </li>
            <li
              onClick={() => {
                setIsFocus("men");
              }}
            >
              {" "}
              <Link style={{ textDecoration: "none" }} to={"/men"}>
                {" "}
                Men{" "}
              </Link>
              {isFocus === "men" ? <hr /> : null}
            </li>
            <li
              onClick={() => {
                setIsFocus("women");
              }}
            >
              <Link style={{ textDecoration: "none" }} to={"/women"}>
                {" "}
                Women{" "}
              </Link>
              {isFocus === "women" ? <hr /> : null}
            </li>
            <li
              onClick={() => {
                setIsFocus("kids");
              }}
            >
              {" "}
              <Link style={{ textDecoration: "none" }} to={"/kids"}>
                Kids
              </Link>
              {isFocus === "kids" ? <hr /> : null}
            </li>
          </ul>
        </div>

        <div>
          <button>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              Login
            </Link>
          </button>

          <span>
            <Link style={{ textDecoration: "none" }} to={"/cart"}>
              <img src={shopping_cart} alt="" />
            </Link>
            <p>{cartItems.length}</p>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
