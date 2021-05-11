<template>
  
  <v-container>
    <SingleProduct />
    <RelatedProducts />
  </v-container>

</template>

<script>
  export default {

    layout : 'web',
    data : () => ({ loading: false }) 
    
  }
</script>