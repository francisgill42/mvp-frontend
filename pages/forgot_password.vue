<template>
<div class="">

    <v-container>
        <v-row class="mt-5"> 

      
         <v-col sm="12" md="6" cols="12" xs="12">
          <ForgotPasswordSvg />
        </v-col> 

          <v-col sm="12" md="6" cols="12" xs="12">
          <ForgotPassword />
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