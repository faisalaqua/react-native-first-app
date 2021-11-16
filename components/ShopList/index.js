import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import shopStore from "../../stores/shopStore";
import ShopItem from "../ShopItem";

const ShopList = () => {
  const shopList = shopStore.shops.map((shop) => <ShopItem shop={shop} />);
  return (
    <View>
      <Text> HELLO! </Text>
      {shopList}
    </View>
  );
};

export default observer(ShopList);

const styles = StyleSheet.create({});
