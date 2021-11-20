import { Badge, Button } from "native-base";
import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) navigation.navigate("CartList");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

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
        // onPress={() => navigation.navigate("CartList")}
        onPress={handlePress}
        name="cart"
      />
    </Pressable>
  );
};

export default observer(CartButton);
