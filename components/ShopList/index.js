import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import shopStore from "../../stores/shopStore";
import ShopItem from "../ShopItem";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem navigation={navigation} shop={shop} key={shop._id} />
  ));
  return (
    <View>
      {shopList}
      <Text>Hello</Text>
    </View>
  );
};

export default observer(ShopList);

const styles = StyleSheet.create({});
