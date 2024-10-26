import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/api", // Update with your backend URL
});

export default instance;
