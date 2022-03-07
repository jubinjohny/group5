<template>
  <div id="app">
    <div id="nav">
      <div class="">
        <div class="appbar-desktop d-none d-lg-block border-bottom">
          <b-navbar variant="faded" type="light" toggleable="lg" class="py-0">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-navbar-brand class="mb-0">
              <span
                style="font-size: 28px; font-weight: 700; font-family: Amaranth"
              >
                G5Shopping
              </span>
            </b-navbar-brand>

            <b-collapse id="nav-collapse" is-nav class="">
              <b-navbar-nav>
                <b-nav-item
                  class="py-4 category"
                  tag="router-link"
                  v-for="route in routes"
                  :key="route.path"
                  :to="route.path"
                >
                  {{ route.name }}
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>

            <b-navbar-nav class="ml-auto d-flex flex-row align-items-center">
              <b-nav-item class="col-6">
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                  right
                  style="padding: 0px 180px 0px 0px"
                >
                  <template #button-content>
                    <b-img src="/assets/icon-cart.svg" alt=""></b-img>
                    <span class="cart-count">
                      {{ cartItemsCount }}
                    </span>
                  </template>

                  <!-- <b-dropdown-item href="#"> -->
                  <div
                    style="
                      min-width: 350px;
                      box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
                      border-radius: 15px !important;
                    "
                  >
                    <div class="d-flex flex-column">
                      <div class="col-12 p-3 border-bottom">
                        <span style="font-weight: 700"> Cart </span>
                      </div>
                      <div
                        class="col-11 px-1 mt-3"
                        style="max-height: 200px; overflow: auto"
                      >
                        <div v-if="cartItems && cartItems.length > 0">
                          <div
                            v-for="(item, index) in cartItems"
                            :key="index"
                            class="d-flex flex-row justify-content-between my-3"
                          >
                            <div class="col-3 px-0 text-center">
                              <img
                                :src="item.image"
                                alt="product Image"
                                width="70%"
                                height="50px"
                                style="object-fit: cover; border-radius: 10px"
                              />
                            </div>
                            <div class="col-8 px-1 d-flex flex-column">
                              <div>
                                <span
                                  style="font-size: 14px"
                                  class="text-muted"
                                >
                                  {{ item.title }}
                                </span>
                              </div>
                              <div>
                                <span
                                  style="font-size: 15px"
                                  class="text-muted"
                                >
                                  ${{ parseFloat(item.price).toFixed(2) }} X
                                  {{ item.quantity }}
                                </span>
                                <span class="" style="font-weight: 700">
                                  ${{ calcPrice(item) }}
                                </span>
                              </div>
                            </div>
                            <div class="col-1 px-1">
                              <span @click="deleteItem(item, index)">
                                <img src="/assets/icon-delete.svg" alt="" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div v-else>
                          <div
                            class="row justify-content-center align-items-center"
                            style="min-height: 200px"
                          >
                            <div class="col-12 text-center">
                              <span class="text-muted" style="font-weight: 700">
                                Your cart is empty.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 my-3">
                        <router-link to="/checkout">
                          <button
                            class="p-3 text-white border-0 w-100 checkout-btn"
                            style="
                              background-color: hsl(229, 100%, 55%);
                              font-weight: 700;
                              font-size: 14px;
                              border-radius: 10px;
                            "
                          >
                            Checkout
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <!-- </b-dropdown-item> -->
                </b-dropdown>
              </b-nav-item>
              <b-nav-item>
                <span>
                  <router-link v-if="userName === `Guest`" to="/login">
                    <label style="color: black; font-weight: 900"
                      >{{ userName }} &nbsp;&nbsp;&nbsp;</label
                    >
                    <b-img
                      v-bind:src="imageLogin"
                      class="avatar"
                      rounded="circle"
                      alt="Circle image"
                      height="40px"
                    ></b-img>
                  </router-link>
                  <div v-else>
                    <label style="color: black; font-weight: 900"
                      >{{ userName }} &nbsp;&nbsp;&nbsp;</label
                    >
                    <b-img
                      v-bind:src="imageLogin"
                      class="avatar"
                      rounded="circle"
                      alt="Circle image"
                      height="40px"
                    ></b-img>
                  </div>
                </span>
              </b-nav-item>
              <b-nav-item v-if="userName !== `Guest`">
                <b-button variant="primary" @click="logout()">Logout</b-button>
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </div>

        <div class="appbar-mobile d-lg-none d-md-block">
          <b-navbar variant="faded" type="light" toggleable="lg">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-brand tag="h1" class="mb-0 mx-3">
              <span
                style="font-size: 24px; font-weight: 700; font-family: Amaranth"
              >
                G5Shopping
              </span>
            </b-navbar-brand>

            <b-navbar-nav
              class="ml-auto d-flex flex-row justify-content-between align-items-center"
            >
              <b-nav-item class="col-6">
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <b-img src="/assets/icon-cart.svg" alt=""></b-img>
                    <span class="cart-count">
                      {{ cartItemsCount }}
                    </span>
                  </template>

                  <div
                    style="
                      min-width: 350px;
                      box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
                      border-radius: 15px !important;
                    "
                  >
                    <div class="d-flex flex-column">
                      <div class="col-12 p-3 border-bottom">
                        <span style="font-weight: 700"> Cart </span>
                      </div>
                      <div
                        class="col-12 px-1 mt-3"
                        style="max-height: 200px; overflow: auto"
                      >
                        <div v-if="cartItems && cartItems.length > 0">
                          <div
                            v-for="(item, index) in cartItems"
                            :key="index"
                            class="d-flex flex-row justify-content-between my-3"
                          >
                            <div class="col-3 px-0 text-center">
                              <img
                                :src="item.image"
                                alt="product Image"
                                width="70%"
                                height="50px"
                                style="object-fit: cover; border-radius: 10px"
                              />
                            </div>
                            <div class="col-8 px-1 d-flex flex-column">
                              <div>
                                <span
                                  style="font-size: 14px"
                                  class="text-muted"
                                >
                                  {{ item.title }}
                                </span>
                              </div>
                              <div>
                                <span
                                  style="font-size: 15px"
                                  class="text-muted"
                                >
                                  ${{ parseFloat(item.price).toFixed(2) }} X
                                  {{ item.quantity }}
                                </span>
                                <span class="" style="font-weight: 700">
                                  ${{ calcPrice(item) }}
                                </span>
                              </div>
                            </div>
                            <div class="col-1 px-1">
                              <span @click="deleteItem(item, index)">
                                <img src="/assets/icon-delete.svg" alt="" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div v-else>
                          <div
                            class="row justify-content-center align-items-center"
                            style="min-height: 200px"
                          >
                            <div class="col-12 text-center">
                              <span class="text-muted" style="font-weight: 700">
                                Your cart is empty.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 my-3">
                        <button
                          class="p-3 text-white border-0 w-100 checkout-btn"
                          style="
                            background-color: hsl(229, 100%, 55%);
                            font-weight: 700;
                            font-size: 14px;
                            border-radius: 10px;
                          "
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </b-dropdown>
              </b-nav-item>
              <b-nav-item>
                <span>
                  <router-link v-if="userName === `Guest`" to="/login">
                    <label style="color: black; font-weight: 900"
                      >{{ userName }} &nbsp;&nbsp;&nbsp;</label
                    >
                    <b-img
                      v-bind:src="imageLogin"
                      class="avatar"
                      rounded="circle"
                      alt="Circle image"
                      height="35px"
                    ></b-img>
                  </router-link>

                  <div v-else>
                    <label style="color: black; font-weight: 900"
                      >{{ userName }} &nbsp;&nbsp;&nbsp;</label
                    >
                    <b-img
                      v-bind:src="imageLogin"
                      class="avatar"
                      rounded="circle"
                      alt="Circle image"
                      height="35px"
                    ></b-img>
                  </div>
                </span>
              </b-nav-item>
              <b-nav-item v-if="userName !== `Guest`">
                <b-button variant="primary" @click="logout()">Logout</b-button>
              </b-nav-item>
            </b-navbar-nav>

            <b-collapse id="nav-collapse" is-nav class="">
              <b-navbar-nav>
                <b-nav-item
                  class="py-4 category"
                  tag="router-link"
                  v-for="route in routes"
                  :key="route.path"
                  :to="route.path"
                >
                  {{ route.name }}
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </div>
    <router-view />
    <div><Footer /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductPage from "@/components/ProductPage.vue";
import ProductPage2 from "@/components/ProductPage2.vue";
import ProductPage3 from "@/components/ProductPage3.vue";
import ProductPage4 from "@/components/ProductPage4.vue";
import ProductPage5 from "@/components/ProductPage5.vue";
import MainPage from "@/components/MainPage.vue";
import About from "@/views/About.vue";
import Footer from "@/components/Footer.vue";
// import Carousel from '@/components/Carousel.vue';
// import AboutUs from '@/components/AboutUs.vue';
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "Home",
  props: {},
  components: {
    Footer,
  },
  data() {
    return {
      title: "Fall Limited Edition G5Shopping",
      price: "125.000",
      count: 1,
      mainImage: "/assets/image-product-1.jpg",
      images: [
        "/assets/image-product-1.jpg",
        "/assets/image-product-2.jpg",
        "/assets/image-product-3.jpg",
        "/assets/image-product-4.jpg",
      ],

      mainCategory: "Collections",
      categories: ["Collections", "Men", "Women", "About", "Contact"],
      cartItems: [],
      loginImage: "./assets/image-avatar-pre-login.svg",
      user: "Guest",
      routes: [
        {
          path: "/",
          component: MainPage,
          name: "Home",
        },
        {
          path: "/product",
          component: ProductPage,
          name: "iPhone 14",
        },
        {
          path: "/product2",
          component: ProductPage2,
          name: "iPhone 13",
        },
        {
          path: "/product3",
          component: ProductPage3,
          name: "iPhone 12",
        },
        {
          path: "/product4",
          component: ProductPage4,
          name: "Macbook Pro M2",
        },
        {
          path: "/product5",
          component: ProductPage5,
          name: "Macbook Pro M1",
        },
        {
          path: "/about",
          component: About,
          name: "About",
        },
      ],
    };
  },
  mounted() {
    const items = JSON.parse(localStorage.getItem("myCart"));
    console.log("items", items);
    this.cartItems = items;
    this.loginImage = JSON.stringify(localStorage.getItem("loginImage"));
    window.addEventListener("localstorage-changed", () => {
      this.cartItems = JSON.parse(localStorage.getItem("myCart"));
      this.cartItemsCount;
    });

    const profileImage = localStorage.getItem("loginImage");
    this.loginImage = profileImage;

    const profileName = localStorage.getItem("userName");
    this.user = profileName;

    window.addEventListener("login-image", () => {
      console.log(localStorage.getItem("loginImage"));
      console.log(localStorage.getItem("userName"));
      this.loginImage = localStorage.getItem("loginImage");
      console.log(this.loginImage);
      this.user = localStorage.getItem("userName");
      console.log(this.user);
      this.imageLogin;
      this.userName;
    });
  },
  computed: {
    cartItemsCount() {
      return this.cartItems.length;
    },
    userName() {
      console.log(this.user);
      if (this.user == null) {
        localStorage.setItem("userName", "Guest");
        return "Guest";
      }
      return this.user;
    },
    imageLogin() {
      if (this.loginImage == null) {
        localStorage.setItem(
          "loginImage",
          "./assets/image-avatar-pre-login.svg"
        );
        return "./assets/image-avatar-pre-login.svg";
      }
      return this.loginImage;
    },
  },
  methods: {
    logout(){
      window.localStorage.clear();
      this.user = null;
      this.userName;
      this.loginImage = null;
      this.loginImage;
    },
    calcPrice(item) {
      return parseFloat(
        parseFloat(item.price).toFixed(2) * item.quantity
      ).toFixed(2);
    },
    deleteItem(item, index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("myCart", JSON.stringify(this.cartItems));
      window.dispatchEvent(new CustomEvent("localstorage-changed"));
    },
  },
};
</script>
<style scoped>
.image {
  border-radius: 10px;
}

@media (max-width: 768px) {
  .image {
    border-radius: 0px !important;
  }
}

.discount {
  /* border-radius: 10px; */
  background-color: hsl(226, 100%, 94%);
}

.bg-quantity {
  background-color: #f1f1f1;
  border-radius: 10px;
  font-size: 16px;
  padding: 14px;
}

.bg-add-cart {
  background-color: hsl(229, 100%, 55%);
  color: white !important;
  border-radius: 10px;
  font-size: 15px;
  padding: 14px;
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 0px 23px 19px 10px hsl(226, 100%, 94%);
}

.bg-add-cart:hover {
  background-color: hsl(226, 91%, 86%);
}

.plus-minus {
  color: hsl(229, 100%, 55%);
  cursor: pointer;
}

.thumbnail img {
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;
}

.thumbnail:hover img {
  /* background-color: #d2d2d2 !important;  */
  opacity: 0.3 !important;
}

.activess {
  opacity: 0.4 !important;
  border: 3px solid hsl(229, 100%, 55%) !important;
}

i {
  transition: 0.3s;
}

i:hover {
  color: hsl(226, 91%, 86%);
}

/* navbar */
.avatar:hover {
  border: 2px solid hsl(229, 100%, 55%) !important;
}

.category {
  transition: 0.1s;
}

.category:hover {
  border-bottom: 3px solid hsl(229, 100%, 55%);
}

.category:hover .text {
  color: black !important;
}

.checkout-btn {
  transition: 0.3s;
}

.checkout-btn:hover {
  background-color: hsl(226, 91%, 86%) !important;
}

.cart-count {
  position: absolute;
  top: 3px;
  left: 22px;
  padding: 0px 7px;
  font-size: 9px;
  background-color: hsl(229, 100%, 55%);
  color: white;
  border-radius: 5px;
}
</style>
<style>
.dropdown-menu.dropdown-menu-right.show {
  padding: 0px !important;
  border: 0px !important;
}

.appbar-mobile .dropdown-menu.show {
  position: absolute;
  left: -220px;
  border: none;
  padding: 0px;
  border-radius: 15px;
}

.modal-content {
  background-color: transparent !important;
  border: none !important;
}

.modal-header {
  border: none !important;
}

.modal-header .close {
  opacity: 1 !important;
}

.carousel-control-prev {
  opacity: 1 !important;
  align-items: center !important;
  position: absolute;
  left: 0px !important;
}

.carousel-control-next {
  opacity: 1 !important;
  align-items: center !important;
  position: absolute;
  right: 0px !important;
}

.carousel-control-prev-icon {
  width: 30px !important;
  height: 30px !important;
}

.carousel-control-next-icon {
  width: 30px !important;
  height: 30px !important;
}

.navbar-toggler.collapsed {
  border: none;
  padding: 0px;
}

@media (max-width: 768px) {
  .carousel-item .img-fluid {
    border-radius: 0px !important;
  }
}
.carousel-item .img-fluid {
  border-radius: 30px;
}
#app {
  font-family: Kumbh Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
