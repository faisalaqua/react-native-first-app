import React from "react";
import { Image, View, Text } from "react-native";
import shopStore from "../../stores/shopStore";
import { baseURL } from "../../stores/instance";
import { observer } from "mobx-react";
import styles from "../../StyleSheet";
import ProductList from "../ProductList";
import { Spinner } from "native-base";

const ShopDetail = ({ navigation, route }) => {
  if (shopStore.loading) return <Spinner />;
  const { shop } = route.params;
  //   const shop = shopStore.shops.find((shop) = shopParam === shop)
  return (
    <View>
      <Image source={{ uri: shop.image }} style={{ width: 50, height: 50 }} />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <ProductList products={shop.products} />
    </View>
  );
};

export default observer(ShopDetail);
