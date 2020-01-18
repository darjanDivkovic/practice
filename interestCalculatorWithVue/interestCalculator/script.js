let app = new Vue({

    el: '#calculator-box',

    data: {
        principal: null,
        years: null,
        rateOfInterest: null,
        result: 0,
    },

    methods: {
        calculate: function(){
            console.log("hi");
            this.result = (this.principal * this.years * this.rateOfInterest) / 100;
        }
    },
});