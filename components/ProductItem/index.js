import React from "react";
import { Image, View, Text } from "react-native";
import styles from "../../StyleSheet";

const ProductItem = ({ product }) => {
  return (
    <View style={styles.shopDetailWrapper}>
      <Image style={styles.shopDetailImage} source={{ uri: product.image }} />
      <Text style={styles.shopDetailTitle}>{product.name}</Text>
    </View>
  );
};

export default ProductItem;
