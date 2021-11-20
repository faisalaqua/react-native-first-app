import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class CartStore {
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  removeItemFromCart = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  addItemToCart = async (product, quantity) => {
    const foundItem = this.items.find(
      (item) => item.product._id === product._id
    );
    if (foundItem) {
      foundItem.quantity = quantity;
    } else {
      const newItem = {
        product: product,
        quantity: quantity,
      };
      this.items.push(newItem);
    }
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total = total + item.quantity));
    return total;
  }

  checkout = async () => {
    try {
      const cart = this.items.map((item) => ({
        ...item,
        quantity: item.quantity,
      }));
      const res = await instance.post("checkout", { items: cart });
      this.items = [];
      await AsyncStorage.removeItem("myCart");
      alert("Items are checked out");
    } catch (error) {
      console.log(error);
    }
  };

  fetchCart = async () => {
    try {
      const cart = await AsyncStorage.getItem("myCart");
      if (cart) {
        this.items = JSON.parse(cart);
      } else {
        this.items = [];
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const cartStore = new CartStore();
export default cartStore;
