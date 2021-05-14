import axios from "axios";
import {ProductType} from "../types";

const getProducts = () => {
    const url = 
        "http://localhost:5000/products"
    return axios.get<ProductType[]>(url);
};

export default { getProducts };  