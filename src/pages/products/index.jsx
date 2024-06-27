import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../api/products";
import { fetchProducts } from "../../reducers";
import { useDispatch, useSelector } from "react-redux";

export const Products = () => {
  const [productsLimit, setProductsLimit] = useState(8);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  const products = useProducts(productsLimit);

  useEffect(() => {
    products.then((res) => dispatch(fetchProducts(res)));
  }, [productsLimit]);

  if (state.productsAPI.length === 0) return null;

  return (
    <div className="products">
      <h1 className="products__title">all products</h1>

      <div className="products__list-wrapper">
        <h3 className="products__list-title">Api Products</h3>

        <ul className="products__list">
          {state.productsAPI.length !== 0 &&
            state.productsAPI.map((product) => (
              <li className="products__list-item" key={product.title}>
                <Link
                  className="products__list-item"
                  to={`/product/${product.id}`}
                >
                  {product.id}. {product.title} {product.price}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="products__pagination">
        <div
          className="products__pagination-button"
          onClick={() => setProductsLimit(8)}
        >
          8
        </div>

        <div
          className="products__pagination-button"
          onClick={() => setProductsLimit(16)}
        >
          16
        </div>

        <div
          className="products__pagination-button"
          onClick={() => setProductsLimit("")}
        >
          load all products
        </div>
      </div>

      <div className="products__list-wrapper">
        <h3 className="products__list-title">State Products</h3>

        <ul className="products__list">
          {state.productsState.length !== 0 &&
            state.productsState.map((product) => (
              <li className="products__list-item" key={product.title}>
                {product.id}. {product.title} {product.price}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
