<template>
  <v-row>
    <v-col cols="12" sm="12" xs="12" md="5">

      <v-carousel>
      <v-carousel-item
      v-for="(slider,i) in sliders"
      :key="i"
      :src="slider.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      ></v-carousel-item>
      </v-carousel>

    <!-- <v-row>
    <v-col cols="2" v-for="s , i in smallSlider" :key="i">
    <v-card class="mt-2" height="60px" width="70px">
    <v-img @click="setHeroImage(s.src)" height="100%" :src="s.src"></v-img>
    </v-card>

    </v-col>

    </v-row> -->
    </v-col>

    <v-col cols="12" sm="12" xs="12" md="5">

      <v-row>
      <v-col cols="12">
      <p class="mb-1">{{title}}</p>
      <p class="mb-1 font-weight-light"> Rs. {{price}}</p>
      <p class="mb-1 font-weight-light">
      <v-rating v-model="rating" background-color="orange lighten-3" color="orange" dense />
      </p>
      <p class="mb-1 font-weight-light"> Vendor: Vendor Name </p>
      <p class="mb-1 font-weight-light">
      Availability:<span color="red" :class="StockQty < 5 ? 'red--text' : ''"> Items in Stock {{StockQty}}</span>
      </p>
      <p class="mb-1 font-weight-light">Product Type: Kitchen</p>
      <p class="mb-1 font-weight-light mt-3">
      Color: &nbsp;
      <span>
      <v-btn style="border:5px white solid;" x-small fab class="red"></v-btn>
      <v-btn style="border:5px white solid;" x-small fab class="green"></v-btn>
      <v-btn style="border:5px white solid;" x-small fab class="blue"></v-btn>
      </span>
      </p>
      <p class="font-weight-light mt-3">
      Size: &nbsp;
      <span class="hidden-md-and-up">
      <v-btn x-small class="elevation-5">XS</v-btn>
      <v-btn x-small class="elevation-5">S</v-btn>
      <v-btn x-small class="elevation-5">M</v-btn>
      <v-btn x-small class="elevation-5">L</v-btn>
      <v-btn x-small class="elevation-5">XL</v-btn>

      </span>
      <span class="hidden-md-and-down">
      <v-btn small class="elevation-5">XS</v-btn>
      <v-btn small class="elevation-5">S</v-btn>
      <v-btn small class="elevation-5">M</v-btn>
      <v-btn small class="elevation-5">L</v-btn>
      <v-btn small class="elevation-5">XL</v-btn>
      </span>
      </p>
      <p>
      <v-text-field placeholder="Qty" v-model="ItemQty" type="number"></v-text-field>
      </p>
      <p>
      <v-btn class="primary" dark small>Buy Now</v-btn>
      <v-btn class="primary" dark  @click="addItemToCart" small>add to cart</v-btn>
      </p>

      <p>
      <b>Product Description:</b>
      <br>{{description}}
      </p>

      </v-col>

      </v-row>

    </v-col>
  </v-row>

</template>


<script>
export default {
data : ()  => ({

 sliders: [
          {
            src: '/s1.jpg',
          },
          {
            src: '/s2.jpg',
          },
          {
            src: '/s3.jpg',
          },
        ],
smallSlider : [],
CartItem : 0,

id : 1,
title : 'item name 1 long title ',
description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum itaque nisi blanditiis numquam, nobis, deserunt vitae nam rerum perspiciatis cum ullam. Ipsum in excepturi libero tempore sequi sapiente perferendis!',
img:"/s1.jpg",
price : 500,
discount : 40,
StockQty : 4,
ItemQty : 5,
rating: 4,



}),
created () {
    this.getsmallSlider();
},
methods : {

getsmallSlider(){
    this.smallSlider = this.sliders.filter((v => v.src !== '/s1.jpg'));
},

setHeroImage (v){

    this.sliders[0].src = v; 
    alert(v)
},    
addItemToCart(){
this.CartItem++
this.$store.commit('addCartToItem',this.CartItem)


}
}
}
</script>

<style>

.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}
</style>