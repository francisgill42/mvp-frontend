<template>
<span class="row">
    <v-col cols="12">
    <v-text-field placeholder="Subscribe to our News Letter"></v-text-field>
     <v-btn width="100%" text class="primary darken-1">News Letters</v-btn>  
    </v-col>
  
</span>
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