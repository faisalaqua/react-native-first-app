import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-svg";
import { baseURL } from "../../stores/instance";

const ShopItem = ({ shop }) => {
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default ShopItem;
