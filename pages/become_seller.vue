<template>
<div class="">

    <v-container>
        <v-row class="mt-5"> 

      
         <v-col class="mt-15">
          <BecomeSellerSvg />
        </v-col> 

          <v-col>
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