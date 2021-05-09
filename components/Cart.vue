<template>
    <div>

        <v-span>
            <h2> Cart</h2>
        </v-span>
        <v-row class="mt-2 primary white--text">
            <v-col>
                Product Image
            </v-col>
             <v-col>
                Product Name
            </v-col>
             <v-col>
               Unit Price
            </v-col>
             <v-col>
                Qty
            </v-col>
        </v-row>
            <v-row style="border-bottom:1px grey solid;">
                <v-col> Value </v-col>
                <v-col> Value </v-col>
                <v-col> Value </v-col>
                <v-col> Value </v-col>
            </v-row>
            <v-row style="border-bottom:1px grey solid;">
                <v-col> Value </v-col>
                <v-col> Value </v-col>
                <v-col> Value </v-col>
                <v-col> Value </v-col>
            </v-row>
            <v-row style="border-bottom:1px grey solid;">
                <v-col> Value </v-col>
                <v-col> Value </v-col>
                <v-col> Value </v-col>
                <v-col> Value </v-col>
            </v-row>   
            <v-row> 
                <v-col>
                    <v-btn>Continue to shopping</v-btn>
                </v-col>
                <v-col>
                  
                    <v-card class="">
                        <v-toolbar class="primary" flat>
                        <h3 class="white--text">Cart Total</h3>
                        </v-toolbar>
                        <br>
                          <v-card-text>
                        <v-row class="pa-2">
                        <v-col>Subtotal</v-col>
                        <v-col>Shipping</v-col>
                        </v-row>
                        <v-divider></v-divider>
                        
                        <v-row class="pa-2">
                        <v-col>Total</v-col>
                        <v-col>Total</v-col>
                        </v-row>

                         <v-row class="pa-2">
                        <v-col>
                            <v-btn class="primary">Proceed to checkout</v-btn>
                        </v-col>
                        </v-row>
                          </v-card-text>
                     


                    </v-card>
                </v-col>
            </v-row>

</div>
</template>