import { observer } from "mobx-react";
import { Button, Center, VStack } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return (
    <View>
      {cartList}
      <Center>
        <VStack space="5">{cartList}</VStack>
        <Button onPress={cartStore.checkout}>Checkout</Button>
      </Center>
    </View>
  );
};

export default observer(CartList);
