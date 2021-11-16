import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="ShopList" component={ShopList} />
      <Screen name="ShopDetail" component={ShopDetail} />
      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
