<template>
  <div class="">
    <div class="container my-0 my-md-4">
      <div class="row align-items-center justify-content-between">
        <div class="col-12 col-md-5 p-0 p-md-2">
          <div class="d-flex flex-column">
            <div class="col-12 px-md-2 d-none d-md-block">
              <div class="" style="cursor: pointer">
                <b-img
                  :src="mainImage"
                  alt=""
                  style="width: 100%"
                  class="image"
                  @click="showMainImage()"
                ></b-img>
              </div>
            </div>

            <div class="d-block d-md-none col-12 px-0">
              <b-carousel v-model="slide" controls :interval="0">
                <b-carousel-slide
                  v-for="(image, index) in this.images"
                  :key="index"
                  :img-src="image"
                ></b-carousel-slide>
              </b-carousel>
            </div>

            <div class="col-12 d-none d-md-block my-4">
              <div class="row">
                <div
                  class="col-3"
                  v-for="(image, index) in images"
                  :key="index"
                >
                  <div class="thumbnail" @click="changeMainImage(image)">
                    <b-img
                      :src="image"
                      style="width: 100%"
                      alt=""
                      class="image"
                      :class="mainImage === image ? 'activess' : ''"
                    ></b-img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 text-left my-3">
          <div class="container">
            <div>
              <span
                style="
                  font-size: 13px;
                  letter-spacing: 1px;
                  color: hsl(229, 100%, 55%);
                  font-weight: 700;
                "
              >
                Apple
              </span>
            </div>

            <div class="mt-2 mb-4">
              <span
                style="
                  font-size: 40px;
                  font-weight: 900;
                  color: black;
                  line-height: 2.8rem;
                "
              >
                {{ title }}
              </span>
            </div>

            <div class="my-3">
              <span class="text-muted">
                {{description}}                
              </span>
            </div>

            <div class="row">
              <div class="col-8 col-md-12 d-flex flex-row align-items-center">
                <div>
                  <span style="font-size: 24px; font-weight: 900">
                    ${{ parseFloat(price).toFixed(2) }}
                  </span>
                </div>
                <div class="">
                  <span
                    class="mx-3 discount px-2 py-1 rounded"
                    style="
                      font-weight: 900;
                      font-size: 14px;
                      color: hsl(229, 100%, 55%);
                    "
                  >
                    2%
                  </span>
                </div>
              </div>

              <div class="col-4 col-md-12 my-1">
                <span
                  class=""
                  style="
                    font-weight: 700;
                    color: rgb(183, 183, 183);
                    text-decoration: line-through;
                  "
                >
                  $1326.00
                </span>
              </div>
            </div>

            <div class="my-3 row">
              <div class="col-12 col-md-4 text-center px-md-0 mt-3">
                <div
                  class="bg-quantity d-flex flex-row justify-content-between"
                  style="font-weight: 700"
                >
                  <div class="plus-minus">
                    <i class="fas fa-minus" @click="decrement()"></i>
                  </div>
                  <div class="">
                    {{ count }}
                  </div>
                  <div class="plus-minus">
                    <i class="fas fa-plus" @click="increment()"></i>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-8 text-center mt-3">
                <b-button
                  class="bg-add-cart border-0"
                  :disabled="this.count == 0"
                  style="width: 100%"
                  @click="submit"
                >
                  <span class="mx-3">
                    <i class="fas fa-shopping-cart text-white"></i>
                  </span>
                  <span style="font-weight: 700"> Add to cart </span>
                </b-button>
                <div class="d-none bg-add-cart" @click="submit">
                  <span class="mx-3">
                    <i class="fas fa-shopping-cart text-white"></i>
                  </span>
                  <span style="font-weight: 700"> Add to cart </span>
                </div>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
      <div class="col-12 text-center mt-3 bg-quantity">
        <div>
          <b-form-rating
            v-model="rating"
            variant="warning"
            class="mb-2"
          ></b-form-rating>
        </div>
        <br />
        <div>
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter review..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </div>
        <br />
        <b-button type="submit" variant="primary" @click="submitReview"
          >Submit</b-button
        >
      </div>

      <b-modal
        v-model="showImageModal"
        variant="transparent"
        size="md"
        backdrop
        shadow
        hide-footer
      >
        <template #modal-header-close>
          <i class="fas fa-times" style="color: #fff"></i>
        </template>
        <div class="container">
          <div class="d-flex flex-column">
            <div class="col-12 px-0 px-md-2">
              <div class="">
                <b-carousel v-model="slide" controls :interval="0">
                  <b-carousel-slide
                    v-for="(image, index) in this.images"
                    :key="index"
                    :img-src="image"
                    class=""
                  ></b-carousel-slide>
                </b-carousel>
              </div>
            </div>

            <div class="d-none col-12 px-0 px-md-2">
              <div class="text-center">
                <b-img
                  :src="this.mainImage"
                  alt=""
                  style="width: 100%"
                  class="image"
                ></b-img>
              </div>
            </div>

            <div class="col-12 my-3">
              <div class="row">
                <div
                  class="col-3"
                  v-for="(image, index) in images"
                  :key="index"
                >
                  <div class="thumbnail">
                    <b-img
                      :src="image"
                      style="width: 100%"
                      alt=""
                      class="image"
                      :class="index === slide ? 'activess' : ''"
                    ></b-img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <br />
      <br />
      <br />
      <div style="background-color: grey">
        <h4>REVIEWS</h4>
      </div>
      <br />
      <div
        class="col-12 text-center mt-1"
        style="border-style: dotted dashed solid double"
        v-for="(review, index) in getReviews"
        :key="index"
      >
        <div class="d-flex flex-row justify-content-between col-md-4">
          <b-form-rating
            v-model="review.rating"
            variant="warning"
            class="mb-2"
            disabled
          ></b-form-rating>
        </div>
        <div>
          <p align="left" class="mt-2 text-left">{{ review.text }}</p>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "ProductPage",
  props: {},
  components: {},
  data() {
    return {
      title: "",
      price: "",
      count: 1,
      mainImage: "", 
      imageTableArray: [],
      images: [],
      rating: 0,
      text: "",
      reviews: [],
      cartItems: [],
      showImageModal: false,
      slide: 0,
      product: [],
      description: ""
    };
  },
  beforeMount() {
    this.getProductDetails();
  },
  async mounted() {
    
    this.reviews = await axios.post('http://localhost:40541/api/reviews', {
             productId: 2
        })
        .then(function (response) {
           return response.data;
                })
        .catch(function (error) {
           console.log(error);
        });
    const items = JSON.parse(localStorage.getItem("myCart"));
    console.log("items123s", items);
    this.cartItems = items;
    this.getReviews;
  },
  computed: {
    getReviews() {
      return this.reviews;
    },
  },
  methods: {
    async getProductDetails(){
    this.imageTableArray =await axios.post('http://localhost:40541/api/images', {
             productId: 2,
        })
        .then(function (response) {
          console.log(response.data);
          return response.data;
          })
        .catch(function (error) {
           console.log(error);
        });
          this.mainImage = this.imageTableArray[0].imageUrl;
          (this.imageTableArray).forEach(element => {
            this.images.push(element.imageUrl);
          });
    this.product = await axios.post('http://localhost:40541/api/products', {
             productId: 2
        })
        .then(function (response) {
           return response.data[0];
                })
        .catch(function (error) {
           console.log(error);
        });
        console.log(this.product.productName)
            this.title = this.product.productName;
      this.price = this.product.productPrice; 
      this.description = this.product.productDescription; 
    },
    showMainImage() {
      this.showImageModal = true;
    },
    increment() {
      this.count += 1;
    },
    decrement() {
      if (this.count - 1 >= 0) {
        this.count -= 1;
      }
    },
    changeMainImage(image) {
      this.mainImage = image;
    },
    calcPrice(item) {
      return parseFloat(
        parseFloat(item.price).toFixed(2) * item.quantity
      ).toFixed(2);
    },
    deleteItem(item, index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("myCart", JSON.stringify(this.cartItems));
    },
    async submitReview() {
    axios.post('http://localhost:40541/api/addReview', {
             rating: this.rating,
             text: this.text,
             productId: 2,
             email: localStorage.getItem("email")
        }) 
        .then(function (response) {
          console.log(response.data);
          })
        .catch(function (error) {
           console.log(error);
        }); 
        
        this.reviews = await axios.post('http://localhost:40541/api/reviews', {
             productId: 2,
           }
        )
        .then(function (response) {
           return response.data;
                })
        .catch(function (error) {
           console.log(error);
        });
        this.getReviews;
      this.rating = 0;
      this.text = "";
    },
    submit() {
      var existingEntries = JSON.parse(localStorage.getItem("myCart"));

      if (existingEntries == null) existingEntries = [];

      var entry = {
        productId: 2,
        title: this.title,
        price: this.price,
        quantity: this.count,
        image: this.mainImage,
      };

      localStorage.setItem("latestItem", JSON.stringify(entry));

      // Save allEntries back to local storage
      existingEntries.push(entry);
      localStorage.setItem("myCart", JSON.stringify(existingEntries));

      console.log("myCart", JSON.parse(localStorage.getItem("myCart")));

      this.cartItems = JSON.parse(localStorage.getItem("myCart"));
      console.log(JSON.parse(localStorage.getItem("myCart")).length);
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
  box-shadow: 0px 23px 19px 10px hsl(229, 100%, 94%);
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
  color: hsl(24, 91%, 86%);
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
  background-color: hsl(226, 97%, 72%) !important;
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
</style>
