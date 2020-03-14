var app = new Vue({
  el: '#app',
  data: {
    product: 'Hello Vue!!!!!',
    description: 'Tis is my description!',
    image: './assets/socks1.jpg',
    inventory: 0,
    onSale: false,
    details: ["80% Cotton", "20% Polyester", "Gender-Nuteral"],
    variants: [
      {
        id: 123,
        color: "blue",
        variantImage: "./assets/socks1.jpg"
      },
      {
        id: 455,
        color: "red",
        variantImage: "./assets/socks2.jpg"
      },
    ],
    sizes: ["SM", "MD", "LG", "XL"],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if(this.cart === 0) {
        this.cart = 0
      } else {
        this.cart -= 1
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})