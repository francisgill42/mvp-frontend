<template>
<div class="">  
          <v-row>
        <v-col cols="12">
        <v-carousel>
        <v-carousel-item
        v-for="(slider,i) in sliders"
        :key="i"
        :src="slider.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        ></v-carousel-item>
        </v-carousel>
        </v-col>

        </v-row>

    <v-container>

     <v-navigation-drawer
      class="hidden-sm-and-up"        
      v-model="drawer"
      :clipped="clipped"
      fixed
    >
        <v-container>
           <v-row class="hidden-md-and-up">
          
            <v-col cols="12" md="12" sm="12" xs="12">
              <Filters 
              :FilterItems="[{item : 'brand 1'},{item : 'brand 2'},{item : 'brand 3'},{item : 'brand 4'}]" 
              :ModuleName="`Brands`" />           
            </v-col>

            <v-col cols="12" md="12" sm="12" xs="12">
              <Filters 
              :FilterItems="[{item : 'category 1'},{item : 'category 2'}]" 
              :ModuleName="`Categories`" />           
            </v-col>

             <v-col cols="12" md="12"  sm="12" xs="12"> 
              <Filters 
              :FilterItems="[{item : 'abc 1'},{item : 'abc 2'}]" 
              :ModuleName="`Testing`" />           
            </v-col>


          </v-row>
        </v-container>


    </v-navigation-drawer>
    
        <v-row class="mt-5"> 
            <v-col cols="12" class="hidden-md-and-up">
              <v-btn v-model="drawer" :right="right" @click.stop="drawer = !drawer" width="100%" class="primary">
                 <v-icon>mdi-filter</v-icon> Click me to apply Filters
              </v-btn>
            </v-col>
        <v-col md="2" sm="12" xs="12">

          <v-row class="hidden-md-and-down">
          
            <v-col md="12" sm="4" xs="4">
              <Filters 
              :FilterItems="[{item : 'brand 1'},{item : 'brand 2'},{item : 'brand 3'},{item : 'brand 4'}]" 
              :ModuleName="`Brands`" />           
            </v-col>

            <v-col md="12" sm="4" xs="4">
              <Filters 
              :FilterItems="[{item : 'category 1'},{item : 'category 2'}]" 
              :ModuleName="`Categories`" />           
            </v-col>

             <v-col md="12"  sm="4" xs="4"> 
              <Filters 
              :FilterItems="[{item : 'abc 1'},{item : 'abc 2'}]" 
              :ModuleName="`Testing`" />           
            </v-col>


          </v-row>
        </v-col>  

        <v-col md="10" cols="12">
          <LattestProducts />
          
          <RelatedProducts />
          
          <TrendingProducts />
          
          <BestSellerProducts />

          <NewsLetters />
        </v-col> 
        

        </v-row>

        <v-row class="hidden-md-and-up">
          <v-col cols="12">
            <LattestProducts />
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

        drawer : false,

        loading: false,

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
      }
    },
  }
</script>