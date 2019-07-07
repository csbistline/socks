// import Vue from 'vue'
// import App from './App.vue'

var app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    description: "Oh so warm and fluffy!",
    image: "./assets/vmSocks-green-onWhite.jpg",
    altText: "A pair of socks",
    inStock: true,
    inventory: 100,
    onSale: true,
    details: ["80% cotton", "20% polyester", "100% gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantSizes: ["L", "M", "S"],
        variantImage: "./assets/vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantSizes: ["M", "S"],
        variantImage: "./assets/vmSocks-blue-onWhite.jpg"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },

    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },

    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
})