let app = new Vue({
    el: '#app',

    data: {
        message: "We are in boys!",
        name: "Dacija",
        price: 2000,
    },

    methods: {
        discount: function(){
            return this.price - 100; 
        }
    }
});