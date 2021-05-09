<template>
<v-app>

<!-- <v-img :src="topImg"  alt="" /> -->

<v-app-bar app class="white">
    <h1>Multi Vendor Platform</h1>
    
<!-- <span style="width:175px;" class="ma-5" dark>
  <v-img :src="logo"  alt="" />
</span> -->

<v-spacer></v-spacer>
<span v-for="(m,i) in menus" :key="i" class="mt-2 ml-3" >
     
     <a :href="m.to" style="text-decoration:none;">


        {{m.to == '/web' ? '' : '|'}} &nbsp; {{m.title}}

        {{m.to !== '/cart' ? '' : `(${TotalCartItems})`}}

        <!-- &nbsp;{{m.title}} <span v-if="m.to == '/cart'">({{TotalCartItems}})</span> -->
      
    </a>
   
</span>
</v-app-bar>
<v-main>
<!-- <v-breadcrumbs :items="menus" class="primary">
<template v-slot:divider>
<v-icon>mdi-chevron-right</v-icon>
</template>
</v-breadcrumbs> -->
  
  <nuxt />
</v-main>
 <v-row class="mt-2 text-center" >
    <v-col class="primary">
      <h3 class="white--text">Bolster</h3>
      <p class="white--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam in beatae saepe quis sapiente voluptate facere laboriosam maxime aliquam eum voluptatum voluptatem nulla ex, assumenda qui ducimus aliquid molestias accusantium?</p>
    </v-col>
    <v-col class="primary">
      <h3 class="white--text">Quick Links</h3>    
      <p class="white--text" v-for="(m,i) in menus" :key="i">
       <a :href="m.to" class="white--text">{{m.title}}</a>
      </p>
      </v-col>

       <v-col class="primary">
      <h3 class="white--text">Contact</h3>    
      <p class="white--text">
       Address: <a class="white--text">abc location</a>
      </p>
       <p class="white--text">
       Email: <a class="white--text">Email here</a>
      </p>
       <p class="white--text">
       Call us or Whatsapp: <a class="white--text">03108559858</a>
      </p>
      </v-col>

  </v-row>
  <v-divider></v-divider>
<v-footer padless>
 
 
    <v-card
      class="flex primary"
      flat
      tile
    >

    <!-- <v-card-title>
      <strong sm="12" xs="12" md="6" xl="6" class="subheading white--text">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in SocialIcons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon  sm="12" xs="12" md="6" xl="6"  size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title> -->

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Multi Vender Platform</strong>
      </v-card-text>
    </v-card>
  </v-footer>
<!-- <v-footer :fixed="fixed" app dark>
<span>&copy; {{year}}</span> 
</v-footer> -->
</v-app>
</template>

<script>
export default {

data () {
return {
  logo : 'https://logoipsum.com/logo/logo-12.svg',
  topImg : 'https://icms-image.slatic.net/images/ims-web/106b4acd-9996-4a59-918d-1eaa51708627.jpg',
  SocialIcons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],

year: new Date().getFullYear(),
clipped: false,
fixed:false,
drawer: true,
menus : [],      

miniVariant: false,
right: true,
rightDrawer: false,
title: 'Multi Vendor App',
logout_btn:{
icon:'mdi-logout',
label:'Logout'
}
}
},

computed : {
    TotalCartItems () {
      return this.$store.state.CartItem
    }

},
created () {
  this.get_menus();
},
methods:{
async logout() {
  await this.$auth.logout();
},
get_menus () {

  var menu = [
            { icon: 'mdi-home', title: 'Home',to: '/web' },
            { icon: 'mdi-sale', title: 'Become Seller',to: '/become_seller' },
            { icon: 'mdi-package', title: 'Products',to: '/products' },
            { icon: 'mdi-cart', title: 'Cart',to: '/cart' },
            
            { icon: 'mdi-login', title: 'Login',to: '/login' },
            { icon: 'mdi-account', title: 'Register',to: '/register' },
            
  ];

    this.menus = menu;

}
}
}
</script>

<style>
/* .grad {
  background: linear-gradient(to bottom right, orange, grey);
} */
</style>
