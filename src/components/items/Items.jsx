import { useState } from "react";
import styles from "../items/items.module.scss";
import { useProduct_api_context } from "../../_api/products_api";
import { useCart } from "../../pages/cart/Cart";

function Items() {
  const { products, products_B } = useProduct_api_context([]);
  
  const { addToCart } = useCart();

  const removeTooLong = products_B.filter(
    (tooLong) => !tooLong.name.includes("Eau de Parfum - Floral Scent")
  );

  return (
    <div className={styles.wrapper}>
      <section className={styles.sec_01}>
        {products.map((item) => (
          <main key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <div>
              <b>Price:</b>
              <b>{item.price}</b>
            </div>

            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Add to Cart
            </button>
          </main>
        ))}
      </section>

      <section className={styles.sec_01}>
        {removeTooLong.map((item) => (
          <main key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <div>
              <b>Price:</b>
              <b>{item.priceCents}</b>
            </div>
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Add to Cart
            </button>
          </main>
        ))}
      </section>
    </div>
  );
}

export default Items;
