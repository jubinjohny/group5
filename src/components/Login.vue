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
export default {
  name: "Login",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      if (this.username == "admin@g5shopping.com" && this.password == "admin") {
        var loginImage = "./assets/image-avatar-post-login.svg";
        localStorage.setItem("loginImage", loginImage);
        console.log(localStorage.getItem("loginImage"));
        window.dispatchEvent(new CustomEvent("login-image"));
      }
    },
  },
};
</script>

<style scoped></style>
