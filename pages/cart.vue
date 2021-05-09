<template>
<div class="">

    <v-container>
        <v-row class="mt-5"> 

        <v-col>
          <Cart />
        </v-col> 

       
        </v-row>

      
  </v-container>
</div>

 
</template>

<script>
  export default {

    layout : 'web',
    data : () => ({ loading: false }) 
    
  }
</script>