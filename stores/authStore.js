import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.user = decode(token);
      console.log({ user });
    } catch (error) {
      console.log(error);
    }
  };

  signup = async (user, navigation) => {
    try {
      const res = await instance.post("/signup", user);
      this.setUser(res.data.token);
      navigation.navigate("CartList");
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (user, navigation) => {
    try {
      const res = await instance.post("/signin", user);
      this.setUser(res.data.token);
      navigation.replace("CartList");
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    AsyncStorage.removeItem("myToken");
    this.user = null;
  };

  //   checkForToken = () => {
  //     // const token = localStorage.getItem("myToken");
  //     if (token) {
  //       const currentTime = Date.now();
  //       const user = decode(token);
  //       if (user.exp >= currentTime) {
  //         this.setUser(token);
  //       } else {
  //         this.signout();
  //       }
  //     }
  //   };
}

const authStore = new AuthStore();
// authStore.checkForToken();
export default authStore;
