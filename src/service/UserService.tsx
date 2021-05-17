import axios from "axios";
import { LoginResponseType } from "../types";
import StorageService from "./StorageService";

const login = (email: string, password: string) => {
    const url = "http://localhost:5000/auth/login";
    return axios
        .post<LoginResponseType>(url, { email, password})
        .catch((e) => Promise.reject(e.response.data))
};

const profile= () => {
    const url = "http://localhost:5000/auth/profile";
    return StorageService.getData('token').then((token) =>
        axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
    })
    );
};

export default { login, profile };