let app = new Vue({
    el: '#app',

    data: {
        message: "We are in boys!",
        name: "Dacija",
        price: 2000,
        path: 'https://images.unsplash.com/photo-1579338775661-7d0b8621ec83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        
    },

    methods: {
        discount: function(disc){
            return this.price - disc; 
        }
    }
});