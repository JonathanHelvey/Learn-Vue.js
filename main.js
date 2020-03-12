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
        color: "green",
      },
      {
        id: 455,
        color: "red",
      },
      {
        id: 333,
        color: "black",
      }
    ],
    sizes: ["SM", "MD", "LG", "XL"],
  }
})