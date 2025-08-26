import styles from "../shop/shop.module.scss";
import shop01_img from "../../assets/images/shop01_img.png";
import { useProduct_api_context } from "../../_api/products_api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Items from "../../components/items/Items";
function Shop() {
  const { products } = useProduct_api_context([]);
  // console.log(products);
  return (
    <div className={styles.parent_wrapper}>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <div>
            <article>
              <p>NEW ARRIVAL ONLY</p>
              <h2>
                new <FontAwesomeIcon icon={faThumbsUp} fontSize={45} />
              </h2>
              <h2>collections for everyone</h2>
              <button>Last Collection </button>
            </article>
          </div>

          <div>
            <img src={shop01_img} alt="image" />
          </div>
        </section>

        <section className={styles.sec_02}>
          <Items />
        </section>
      </div>
    </div>
  );
}

export default Shop;
