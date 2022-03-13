

<template>
  <div class="container">
    <h1>Login</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              v-model="username"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" @click="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
 import Router from '../router'
export default {
  name: "Login",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      password: "",
      user:[],
    };
  },
  methods: {
    
    submit: function(){
      if(this.username != "" && this.password != ""){
 
        axios.get('http://localhost:8080/api/users', {
           params: {
             email: this.username,
             password: this.password
           }
        })
        .then(function (response) {
           user = response.data[0];
        var loginImage = user.userImage;
        localStorage.setItem("loginImage", loginImage);
        window.dispatchEvent(new CustomEvent("login-image"));

        var email = user.email;
        localStorage.setItem("email", email);
        var user = user.name;
        localStorage.setItem("userName", user);
        console.log(localStorage.getItem("userName"));
        window.dispatchEvent(new CustomEvent("login-image"));
        Router.push({ name: "Home" });
        })
        .catch(function (error) {
           console.log(error);
        });
        
      }
      
    },
  },
};
</script>

<style scoped></style>
