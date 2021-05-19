import axios from "axios";
import StorageService from "./StorageService";

const createOrderDetails = (name:string,amount: number, productId: number) => {
    const url = "http://localhost:5000/orderDetails";
    return StorageService.getData("token").then((token) =>
      axios.post(
        url,
        { name, amount, productId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
    );
};
const createOrder = (name:string,amount: number) => {
    const url = "http://localhost:5000/order";
    return StorageService.getData("token").then((token) =>
      axios.post(
        url,
        { name, amount },
        { headers: { Authorization: `Bearer ${token}` } }
      )
    );
};
  export default { createOrder, createOrderDetails };