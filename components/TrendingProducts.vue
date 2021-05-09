<template>
<div class="mb-15">
<h2 class="mt-5 primary white--text pa-1 mb-2 text-center ">Trending Products</h2>  
<v-row>
<v-col v-for="(item , i) in items" :key="i" cols="12" xs="12" sm="4" xl="4">

<v-hover v-slot="{ hover }">
<v-card :to="`/products/${item.id}`" color="grey lighten-4">
    <v-img :aspect-ratio="16/9" :src="item.img">
    <v-expand-transition>
    <div
    v-if="hover"
    class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-2 white--text"
    style="height: 100%;"
    >
    Rs. {{item.price}}
    </div>
</v-expand-transition>
</v-img>
<v-card-text>

<div class="font-weight-light grey--text title mb-1">
{{item.item}}
</div>
<p class="font-weight-light primary--text mb-2">
Rs. {{item.price}}
</p>
<!-- <div class="font-weight-light title mb-2">
{{item.description}}
</div> -->
<v-btn class="primary" small  dark>Buy Now</v-btn>
<v-btn class="primary"  @click="addItemToCart" small dark>add to cart</v-btn>
</v-card-text>
</v-card>
</v-hover>
</v-col>
</v-row>

</div>
</template>


<script>
export default {
data : ()  => ({
CartItem : 0,

items : [
{
id : 1,
item : 'item name 1',
description : 'desc',
img:"/s1.jpg",
price : 500,
discount : 0,

},
{
id : 2,
item : 'item name 2',
description : 'desc',
img:"/s2.jpg",
price : 400,
discount : 0,
},
{
id : 3,
item : 'item name 3',
description : 'desc',
img:"/s3.jpg",
price : 300,
discount : 0,
}
]
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
.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}
</style>