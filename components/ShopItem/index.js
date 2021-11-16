import { NavigationContainerRefContext } from "@react-navigation/core";
import { HStack, Pressable } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-svg";
import { baseURL } from "../../stores/instance";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("ShopDetail", { shop: shop })}
      w="100%"
      alignItems="center"
      space="3"
    >
      <HStack>
        <Text>{shop.name}</Text>
        <Image
          source={{ uri: baseURL + shop.image }}
          style={{ width: 50, height: 50 }}
        />
      </HStack>
    </Pressable>
  );
};

export default ShopItem;
