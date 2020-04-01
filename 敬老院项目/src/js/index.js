var vm = new Vue({
    el: "#app",
    data: {
        bar:[
            {name:"镇海之家",isShow:"true"},
            {name:"温馨大院",isShow:"false"},
            {name:"关于我们",isShow:"false"},
        ],
        bgIndex:0,
        bgColor:'rgb(255,100,0)'
    },
    mounted: function () {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
        //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
        // new Swiper('.swiper-container')
        // var mySwiper = document.querySelector('.swiper-container').swiper
        // mySwiper.slideNext();
    },
    methods:{
        tab(index){
            this.bgIndex = index;
        }
    }
})