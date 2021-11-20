import { Avatar, Box, Button, HStack, NumberInput, VStack } from "native-base";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-svg";
import NumericInput from "react-native-numeric-input";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleAdd = (value) => {
    setQuantity(value);
    cartStore.addItemToCart(item.product, value);
  };

  return (
    <Box
      bg="primary.400"
      p={4}
      shadow={2}
      margin={0.5}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
      }}
    >
      <HStack>
        <Avatar size="50px" source={{ uri: item.product.image }} />
        <VStack>
          <Text>{item.product.name}</Text>
          <Text>{quantity} </Text>
          <Text>Total Price: {item.quantity * item.product.price}KWD </Text>
          <NumericInput
            totalWidth={240}
            totalHeight={50}
            value={quantity}
            minValue={1}
            onChange={(value) => handleAdd(value)}
          />
        </VStack>
        <Button onPress={() => cartStore.removeItemFromCart(item.product._id)}>
          <Text>Delete</Text>
        </Button>
      </HStack>
    </Box>
  );
};

export default observer(CartItem);
