import axios from "axios";
import {AddressType} from "../types";


const addAddress = (no: string, name: string, street: string, locality: string, city: string, state: string, pincode: number ) => {
    const url = "http://localhost:5000/address";
    return axios
        .post<AddressType>(url, {no, name, street, locality, city, state, pincode})
        .catch((e) => Promise.reject(e.response.data));
}

export default {addAddress};