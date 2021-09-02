var app = new Vue({
    el: "#app",
    data: {
        brand: "Vue Mastery",
        product: "Socks",
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./vmSocks-green.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./vmSocks-blue.jpg",
                variantQuantity: 0
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        reduceCart() {
            this.cart -= 1;
            if (this.cart < 0) {
                this.cart = 0
            }
        }
    },
    computed: {
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
});