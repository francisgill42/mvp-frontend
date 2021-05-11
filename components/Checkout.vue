<template>
        <v-row>
            <v-col cols="12" sm="12" xs="12" md="6">
                   
                        <h3>Billing Address</h3>
                              <v-form>
                                <v-text-field v-model="full_name" :label="`Full Name`" />
                                <v-text-field v-model="address" :label="`Address`" />
                                <v-text-field v-model="town_city" :label="`Town/City`" />
                                <v-text-field v-model="email" :label="`Email`" />
                              </v-form>
            </v-col>
             <v-col cols="12" sm="12" xs="12" md="6">
                  
                 <h3>Your Order Details</h3>
                 <br>
                

                              <v-row class="pa-2">
                                  <v-col>Products</v-col>
                                  <v-col>1</v-col>
                              </v-row>
                               <v-divider></v-divider>
                              <v-row  class="pa-2">
                                  <v-col>Cart Subtotal</v-col>
                                  <v-col>1</v-col>
                              </v-row>
                               <v-divider></v-divider>
                              <v-row  class="pa-2">
                                  <v-col>Shipping</v-col>
                                  <v-col>1</v-col>
                              </v-row>
                               <v-divider></v-divider>
                              <v-row  class="pa-2">
                                  <v-col>Total</v-col>
                                  <v-col>1</v-col>
                              </v-row>
                               <v-divider></v-divider>
                              <v-row>
                                  <v-col>
                                      <v-radio-group v-model="payment_method">
                                          <v-radio label="Bank Transer" value="bank_transer"></v-radio>
                                          <v-radio label="Debit/Credit Card" value="card"></v-radio>
                                          <v-radio label="Cash on delivery" value="cod"></v-radio>
                                      </v-radio-group>
                                      {{payment_method}}
                                  </v-col>
                              </v-row>
                              <v-row>
                                   <v-col>
                                    <v-btn small class="primary">Place Order</v-btn>
                                    <v-btn small class="primary">Continer Shopping</v-btn>
                                  </v-col>
                              </v-row>
            </v-col>
        </v-row>
</template>

<script>
export default {
    data : () => ({
        full_name: '',
        town_city: '',
        address: '',
        email: '',
        payment_method : '',
    })
}
</script>
