let app = new Vue({

    el: '#Generator',

    data: {
        count: 0,
       
        srces : [
            "./img/pic1.jpg",
            "./img/pic2.jpg",
            "./img/pic3.jpg",
            "./img/pic4.jpg",
        ],
    },

    methods: {
        changePic : function(){
            if(this.count != this.srces.length-1){
                this.count++
            }
            else{
                this.count = 0;
            }
        }
    }

});