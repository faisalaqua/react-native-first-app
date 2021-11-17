import { Button, Icon } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import styles from "../../StyleSheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("ShopList")}
        size="sm"
        leftIcon={<Icon as={MaterialCommunityIcons} name="menu" size="sm" />}
        title="Click Here"
      >
        Home
      </Button>
    </View>
  );
};

export default Home;
