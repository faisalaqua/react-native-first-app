import { Avatar, HStack, VStack } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-svg";

const CartItem = ({ item }) => {
  return (
    <HStack>
      <Avatar size="50px" source={{ uri: item.product.image }} />
      <VStack>
        <Text>{item.product.name}</Text>
        <Text>{item.quantity}</Text>
      </VStack>
    </HStack>
  );
};

export default CartItem;
