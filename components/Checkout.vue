<template>
    <div>
        <v-row>
            <v-col>
                  
                    <v-card class="">
                        <v-toolbar class="primary" flat>
                        <h3 class="white--text">Billing Address</h3>
                        </v-toolbar>
                        <br>
                          <v-card-text>
                              <v-form>
                                <v-text-field v-model="full_name" :label="`Full Name`" />
                                <v-text-field v-model="address" :label="`Address`" />
                                <v-text-field v-model="town_city" :label="`Town/City`" />
                                <v-text-field v-model="email" :label="`Email`" />
                              </v-form>
                          </v-card-text>
                     


                    </v-card>
            </v-col>
             <v-col>
                  
                    <v-card class="">
                        <v-toolbar class="primary" flat>
                        <h3 class="white--text">Your Order</h3>
                        </v-toolbar>
                        <br>
                          <v-card-text>

                              <v-row class="pa-2">
                                  <v-col>Products</v-col>
                                  <v-col>1</v-col>
                              </v-row>
                               <v-divider></v-divider>
                              <v-row class="pa-2">
                                  <v-col>Cart Subtotal</v-col>
                                  <v-col>1</v-col>
                              </v-row>
                               <v-divider></v-divider>
                              <v-row class="pa-2">
                                  <v-col>Shipping</v-col>
                                  <v-col>1</v-col>
                              </v-row>
                               <v-divider></v-divider>
                              <v-row class="pa-2">
                                  <v-col>Total</v-col>
                                  <v-col>1</v-col>
                              </v-row>
                               <v-divider></v-divider>
                              <v-row class="pa-2">
                                  <v-col>
                                      <v-radio-group v-model="payment_method">
                                          <v-radio label="Bank Transer" value="bank_transer"></v-radio>
                                          <v-radio label="Debit/Credit Card" value="card"></v-radio>
                                          <v-radio label="Cash on delivery" value="cod"></v-radio>
                                      </v-radio-group>
                                      {{payment_method}}
                                  </v-col>
                              </v-row>
                              <v-row class="pa-2">
                                  <v-col>
                                    <v-btn small class="primary">Place Order</v-btn>
                                  </v-col>
                              </v-row>
                          </v-card-text>
                    
                    </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data : () => ({
        full_name: '',
        town_city: '',
        address: '',
        email: '',
    })
}
</script>