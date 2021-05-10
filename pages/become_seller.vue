<template>
<div class="">

    <v-container>
        <v-row class="mt-5"> 

      
         <v-col class="mt-15" sm="12" md="6" cols="12" xs="12">
          <BecomeSellerSvg />
        </v-col> 

          <v-col sm="12" md="6" cols="12" xs="12">
          <BecomeSeller />
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