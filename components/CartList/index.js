import { observer } from "mobx-react";
import React from "react";
import { View, Text } from "react-native";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return <View>{cartList}</View>;
};

export default observer(CartList);
