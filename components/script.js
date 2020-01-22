Vue.component('squarecalc',{
    template: '<div><h1>square calc!</h1><input type="text" ref="squareof"><button v-on:click="calculate()">Calculate</button><p>{{result}}</p></div>',
    
    data: function(){
        return{
            result:' ',
        };
    },

    methods:{
        calculate: function(){
            this.result = this.$refs.squareof.value * this.$refs.squareof.value;
        },
    },

});


let app = new Vue({
    el: '#app',

    data: {
        result: ' ',
    },

    methods: {
        calculate: function(){
            this.result = this.$refs.squareof.value * this.$refs.squareof.value;
        }
    }
});