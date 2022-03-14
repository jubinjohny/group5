<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      style="height=200px"
    >
      <h4 class="alert-heading">Your Purchase was successfull!</h4>
    </b-alert>
    <section v-if="cartItemsCount > 0">
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
        <tr v-for="(item, index) in cartItems" :key="index">
          <td>
            <img :src="`${item.image}`" :alt="item.title" class="product-img" />
            <h3 class="product-name">{{ item.title }}</h3>
          </td>
          <td>
            <h4 class="price">{{ item.price }} $</h4>
          </td>
          <td>
            <button @click="decreaseCount(item, index)" class="quantity-adjust">
              -
            </button>
            <strong> {{ item.quantity }}</strong>
            <button @click="increaseCount(item)" class="quantity-adjust">
              +
            </button>
          </td>
          <td>{{ item.quantity * item.price }} $</td>
          <td>
            <button @click="deleteItem(item, index)" class="delete-product">
              x
            </button>
          </td>
        </tr>
      </table>

      <section class="payment">
        <app-card />
        <div class="total">
          <div class="caption">
            <p>
              <strong>Subtotal:</strong>
            </p>
            <p>Shipping:</p>
            <p class="golden">Total:</p>
          </div>
          <div class="num">
            <p>
              <strong>{{ total }} $</strong>
            </p>
            <p>Free Shipping</p>
            <p class="golden">{{ total }} $</p>
          </div>
        </div>
      </section>
      <br />
      <b-button
        @click="showAlert"
        v-if="buttonVisible"
        pill
        variant="outline-primary"
        class="m-1"
      >
        Purchase
      </b-button>
    </section>

    <section v-else class="center">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>Your cart is empty, fill it up!</p>
      <button class="pay-with-stripe">
        <nuxt-link exact to="/">Back Home</nuxt-link>
      </button>
    </section>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  components: {},
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      cartItems: [],
      buttonVisible: false,
      total: 0,
    };
  },
  mounted() {
    const items = JSON.parse(localStorage.getItem("myCart"));
    console.log("items1111111111111111111111111111111111111111111111", items);
    this.cartItems = items;
    this.cartTotal();

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
      this.cartTotal();
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
      console.log(this.loginImage);
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
    calcPrice(item) {
      return parseFloat(
        parseFloat(item.price).toFixed(2) * item.quantity
      ).toFixed(2);
    },
    deleteItem(item, index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("myCart", JSON.stringify(this.cartItems));
      this.cartTotal();
      window.dispatchEvent(new CustomEvent("localstorage-changed"));
    },
    removeAllFromCart() {
      this.cartItems = [];
      localStorage.setItem("myCart", JSON.stringify(this.cartItems));
      this.cartTotal();
      window.dispatchEvent(new CustomEvent("localstorage-changed"));
    },
    decreaseCount(item, index) {
      item.quantity--;
      if (item.quantity == 0) {
        this.deleteItem(item, index);
      }
      localStorage.setItem("myCart", JSON.stringify(this.cartItems));
      this.cartTotal();
      window.dispatchEvent(new CustomEvent("localstorage-changed"));
    },
    increaseCount(item) {
      item.quantity++;
      localStorage.setItem("myCart", JSON.stringify(this.cartItems));
      this.cartTotal();
      window.dispatchEvent(new CustomEvent("localstorage-changed"));
    },
    cartTotal() {
      this.total = 0;
      if (this.cartItems != []) {
        this.cartItems.forEach((item) => {
          this.total += item.price * item.quantity;
        });
      }
      if (this.total > 0) {
        this.buttonVisible = true;
      } else {
        this.buttonVisible = false;
      }
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
        var email= localStorage.getItem("email");
        if(email ==null){
          email= localStorage.getItem("userName");
        }
      this.cartItems.forEach((item) => {
        var tPrice =item.quantity * item.price;
          axios.get('http://localhost:8080/api/addToCart', {
           params: {
             productId: item.productId,
             cartItemQty: item.quantity,
             email: email,
             price: item.price,
             totalPrice: tPrice
           }
        })
        .then(function (response) {
           response.data;
                })
        .catch(function (error) {
           console.log(error);
        });
        });
        
          axios.get('http://localhost:8080/api/order', {
           params: {
             email: email,
             orderTotal: this.total
           }
        })
        .then(function (response) {
           response.data;
                })
        .catch(function (error) {
           console.log(error);
        });
      this.removeAllFromCart();
    },
  },
};
</script>

<style scoped>
.product-img {
  float: left;
  margin-right: 15px;
  width: 100px;
}

.total {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 100px;
}

table {
  width: 100%;
  margin-top: 20px;
}

tr {
  text-align: center;
}

th {
  padding: 10px 0;
}

td,
th {
  border-bottom: 1px solid #ccc;
}

.golden {
  background: #f2eee2;
  font-weight: bold;
  padding: 10px;
}

.product-name,
.product-size {
  text-align: left;
}

.product-name {
  padding-top: 36px;
}

.product-size {
  font-weight: 100;
}

.num {
  text-align: right;
}

button a {
  color: white;
  transition: 0.3s all ease;
}

.delete-product,
.quantity-adjust:first-of-type,
.quantity-adjust:last-of-type {
  padding: 5px 7px;
  border: none;
}

.quantity-adjust:first-of-type {
  margin-right: 5px;
}

.quantity-adjust:last-of-type {
  margin-left: 5px;
}

.delete-product:hover {
  background-color: rgb(255, 85, 85);
  border-radius: 100%;
  border: none;
}

.delete-product:focus,
.delete-product:active {
  outline: none;
}

@media screen and (min-width: 700px) {
  .payment {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
  }

  .total {
    width: 90%;
  }
}

@media screen and (max-width: 699px) {
  .payment {
    width: 94%;
    margin-left: 2%;
  }
}
</style>
