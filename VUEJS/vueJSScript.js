let app = new Vue({

    el: '#app',

    data: {
        gates: false,
    },

    methods: {
        
        useGates: function(){
            this.gates = !this.gates;
        }
     
    },

});