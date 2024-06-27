import React from "react";
import { useForm } from "react-hook-form";
import { addProduct } from "../../reducers";
import { useDispatch, useSelector } from "react-redux";

const defaultValues = {
  price: "",
  title: "",
};

export const AddProduct = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products.productsState);
  const { handleSubmit, register, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    const prepareProductData = {
      id: productsState.length + 1,
      ...data,
    };

    dispatch(addProduct(prepareProductData));
    reset(defaultValues);
  };

  return (
    <div className="add-product">
      <h1 className="add-product__title">add product</h1>

      <form className="add-product__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="add-product__input"
          placeholder="Input title"
          {...register("title")}
        />

        <input
          type="number"
          className="add-product__input"
          placeholder="Input price"
          {...register("price")}
        />

        <input type="submit" />
      </form>
    </div>
  );
};
