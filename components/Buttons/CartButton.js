import { Badge, Button } from "native-base";
import React from "react";
import { View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable>
      <Badge
        colorScheme="danger"
        rounded="999px"
        mb={-2}
        mr={3}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{ fontsize: 12 }}
      >
        {cartStore.totalQuantity}
      </Badge>
      <Icon
        size={25}
        onPress={() => navigation.navigate("CartList")}
        name="cart"
      />
    </Pressable>
  );
};

export default observer(CartButton);
