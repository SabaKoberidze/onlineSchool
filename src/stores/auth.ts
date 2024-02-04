import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;

export const logInState = defineStore("user", {
  state: () => ({
    loginUrl:  "http://localhost:3000/api/users/login",
    logoutUrl: "http://localhost:3000/api/users/logout",
    verificationUrl: "http://localhost:3000/api/users/verification",
    isLoggedIn: false,
    isTeacher: false,
    user: null,
    options: [],
  }),
  actions: {
    async logIn(Username: string, Password: string) {
      await axios
        .post(this.loginUrl, {
          username: Username,
          password: Password,
        })
        .then((res) => {
          if (res.status === 200) {
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }
          this.user = res.data;
        });
    },
    async authenticate() {
      await axios.get(this.loginUrl).then((res) => {
        if (res.status === 200) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
        this.user = res.data;
      });
    },
    async logOut() {
      console.log(this.user);
      await axios.post(this.logoutUrl, this.user).then((res) => {
        if (res.status === 200) {
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
        }
        this.user = null;
      });
    },
  
  },
});
