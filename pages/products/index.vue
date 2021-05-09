<template>
<div class="">

    <v-container>
        <v-row class="mt-5"> 

        <v-col md="2" xs="12" xl="2">
          <v-row>
            <v-col>
              <Filters 
              :FilterItems="[{item : 'brand 1'},{item : 'brand 2'},{item : 'brand 3'},{item : 'brand 4'}]" 
              :ModuleName="`Brands`" />           
            </v-col>

            <v-col>
              <Filters 
              :FilterItems="[{item : 'category 1'},{item : 'category 2'}]" 
              :ModuleName="`Categories`" />           
            </v-col>

             <v-col>
              <Filters 
              :FilterItems="[{item : 'abc 1'},{item : 'abc 2'}]" 
              :ModuleName="`Testing`" />           
            </v-col>


          </v-row>
        </v-col>  

        <v-col md="10">
          <LattestProducts />
        </v-col> 

        <v-col md="2"></v-col>

         <v-col md="10">
          <RelatedProducts />
        </v-col> 

        </v-row>

      
  </v-container>
</div>

 
</template>

<script>
  export default {

    layout : 'web',
    data () {
      return {

        loading: false,

     
      }
    },
  }
</script>