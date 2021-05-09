<template>
<div>
<v-row>
<v-col cols="5">

<v-hover   v-slot="{ hover }">
<v-card height="400px" width="500px">
    <v-img height="100%" :src="img">
<v-expand-transition>
<div
v-if="hover"
class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-2 white--text"
style="height: 100%;"
>
Rs. {{price}}
</div>
</v-expand-transition>
</v-img>
</v-card>
</v-hover>
</v-col>
<v-col cols="7" class="">
<div class=" title mb-1">
<b>
    {{title}}
</b>
<p class="font-weight-light mb-2">
Rs. {{price}}
</p>
<p class="font-weight-light mb-2">
Rating: Five Star
</p>
<p class="font-weight-light mb-2">
Vendor: Vendor Name 
</p>
<p class="font-weight-light mb-2">
Avaiability:<span color="red" :class="StockQty < 5 ? 'red--text' : ''"> Items in Stock {{StockQty}}</span>
</p>
<p class="font-weight-light mb-2">
Product Type: Kitchen
</p>

<p class="font-weight-light mt-5 mb-2">
Color: &nbsp;
<span>
        <v-btn style="border:5px white solid;" x-small fab class="red"></v-btn>
        <v-btn style="border:5px white solid;" x-small fab class="green"></v-btn>
        <v-btn style="border:5px white solid;" x-small fab class="blue"></v-btn>
</span>
</p>

<p class="font-weight-light mt-5 mb-2">
Size: &nbsp;
<span>
        <v-btn small class="sbc elevation-5">XS</v-btn>
        <v-btn small class="sbc elevation-5">S</v-btn>
        <v-btn small class="sbc elevation-5">M</v-btn>
        <v-btn small class="sbc elevation-5">L</v-btn>
        <v-btn small class="sbc elevation-5">XL</v-btn>

</span>
</p>
<p>
        <v-text-field placeholder="Qty" v-model="ItemQty" type="number"></v-text-field>
</p>
<p>
    <v-btn class="blue" dark small>Buy Now</v-btn>
    <v-btn class="grey" dark  @click="addItemToCart" small>add to cart</v-btn>
</p>
</div>
<p>
<b>Product Description:</b>
<br>{{description}}
</p>


</v-col>
</v-row>

</div>
</template>


<script>
export default {
data : ()  => ({
CartItem : 0,

id : 1,
title : 'item name 1 long title ',
description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum itaque nisi blanditiis numquam, nobis, deserunt vitae nam rerum perspiciatis cum ullam. Ipsum in excepturi libero tempore sequi sapiente perferendis!',
img:"/s1.jpg",
price : 500,
discount : 40,
StockQty : 4,
ItemQTY  :5,



}),
methods : {
addItemToCart(){
this.CartItem++
this.$store.commit('addCartToItem',this.CartItem)


}
}
}
</script>

<style>
.sbc{
    background:none;
    border:1px solid black !important; 
    border-radius:0;
}
.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}
</style>