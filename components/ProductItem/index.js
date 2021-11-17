import React, { useState } from "react";
import { Image, View, Text } from "react-native";
import cartStore from "../../stores/cartStore";
import styles from "../../StyleSheet";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = (value) => {
    setQuantity(value);
    cartStore.addItemToCart(product, value);
  };

  return (
    <View style={styles.shopDetailWrapper}>
      <Image style={styles.shopDetailImage} source={{ uri: product.image }} />
      <Text style={styles.shopDetailTitle}>{product.name}</Text>
      <NumericInput
        totalWidth={240}
        totalHeight={50}
        value={quantity}
        minValue={1}
        onChange={(value) => handleAdd(value)}
      />
    </View>
  );
};

export default observer(ProductItem);
