import React from "react";
import styles from "../../../styles/pages/menuSettings.module.css";



export default function CreateMenuProducts(props) {
  return (
    <div className={`${styles.productsContainer} flex flex-col`}>
      <p className={`${styles.categoryName} text-[1.3rem] font-bold mt-[20px]`}>{props.menuCategory.name}</p>
      {props.menuCategory.products.map(product => (
        <CreateMenuProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

function CreateMenuProduct(props) {
  console.log(props.product);

  return (
    <div className={`${styles.productContainer} flex flex-row`}>
      {props.product.name}
      {props.product.price}грн
      {props.product.grams}гм
    </div>
  );
}
