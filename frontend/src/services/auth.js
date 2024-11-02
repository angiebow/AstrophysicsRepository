// src/services/auth.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem(
            "username",
            JSON.stringify(response.data.username)
          );
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("username");
  }

  register(user) {
    return axios.post(API_URL + "register", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
