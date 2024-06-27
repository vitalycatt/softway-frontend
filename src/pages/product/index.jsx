import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../api/products";

export const Product = () => {
  const [productInfo, setProductInfo] = useState(null);

  const { id } = useParams();
  const product = useProduct(id);

  useEffect(() => {
    product.then((res) => setProductInfo(res));
  }, [id]);

  if (!productInfo) return null;

  return (
    <div className="product">
      <h1 className="product__title">Product Info</h1>

      <div className="product__categories-list">
        <div className="product__category">
          <div className="product__category-title">category:</div>
          {productInfo.category}
        </div>

        <div className="product__category">
          <div className="product__category-title">title:</div>
          {productInfo.title}
        </div>

        <div className="product__category">
          <div className="product__category-title">description:</div>
          {productInfo.description}
        </div>

        <div className="product__category">
          <div className="product__category-title">image:</div>
          <img width={60} src={productInfo.image} alt="product-image" />
        </div>

        <div className="product__category">
          <div className="product__category-title">price:</div>
          {productInfo.price}
        </div>
      </div>
    </div>
  );
};
