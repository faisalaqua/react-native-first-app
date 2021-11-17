import { observer } from "mobx-react";
import React from "react";
import { View, Text } from "react-native";
import ProductItem from "../ProductItem";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} />
  ));
  return <View>{productList}</View>;
};

export default ProductList;
