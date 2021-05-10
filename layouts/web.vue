<template>
<v-app>

<!-- <v-img :src="topImg"  alt="" /> -->

 <v-navigation-drawer
      class="hidden-sm-and-up"        
      v-model="drawer"
      :clipped="clipped"
      fixed
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in menus"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

<v-app-bar app class="white">
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <h3>Multi Vendor Platform</h3>
    
<!-- <span style="width:175px;" class="ma-5" dark>
  <v-img :src="logo"  alt="" />
</span> -->
<v-spacer></v-spacer>

<span v-for="(m,i) in menus" :key="i" class="hidden-sm-and-down mt-2 ml-3" >
     
     <a :href="m.to" style="text-decoration:none;">


        {{m.to == '/web' ? '' : '|'}} &nbsp; {{m.title}}

        {{m.to !== '/cart' ? '' : `(${TotalCartItems})`}}

        <!-- &nbsp;{{m.title}} <span v-if="m.to == '/cart'">({{TotalCartItems}})</span> -->
      
    </a>
   
</span>
</v-app-bar>
<v-main>

  
<nuxt class="overflow-hidden" />
</v-main>
<v-footer padless>
  <!-- <v-row class=" pa-3 text-left">
    
    <v-col class="primary" cols="12" md="4" sm="12" xs="12">
      <h3 class="white--text">Quick Links</h3>    
      <p class="white--text" v-for="(m,i) in menus" :key="i">
       <a :href="m.to" class="white--text">{{m.title}}</a>
      </p>
      </v-col>

       <v-col class="primary" cols="12" md="4" sm="12" xs="12">
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
      <v-col class="primary" cols="12" md="4" sm="12" xs="12">
      <h3 class="white--text">Bolster</h3>
      <p class="white--text">abc</p>
    </v-col>
   
  </v-row> -->


</v-footer>

<v-footer class="hidden-md-and-down" :fixed="fixed" app dark >
  <v-row class="text-center">
    <v-col>
      <span class="text-center">&copy; {{ new Date().getFullYear() }} — <strong>Multi Vender Platform</strong></span>
    </v-col>
  </v-row>
  <div >

  </div>
</v-footer>

<v-footer class="hidden-md-and-up" :fixed="fixed" app dark >
  <v-row class="text-center">
    <v-col>
      <a href="/">
       <v-icon>mdi-home</v-icon>
      </a>
    </v-col>
    <v-col>
      <a href="/cart">
       
        <v-badge
        dense
          color="info"
          :content="TotalCartItems"
        >
         <v-icon>mdi-cart</v-icon>
        </v-badge>
      
      </a>

    </v-col>
    <v-col>

       <a href="/message">
        <v-badge
          color="info"
          :content="MessageCount"
        >
         <v-icon>mdi-message</v-icon>
        </v-badge>
      </a>
      
    
    </v-col>
    <v-col>
        <a href="/account">
       <v-icon>mdi-account</v-icon>
      </a>
    </v-col>
  </v-row>
  <div >

  </div>
</v-footer>


</v-app>
</template>

<script>
export default {

data () {
return {
  drawer: false,
  logo : 'https://logoipsum.com/logo/logo-12.svg',
  topImg : 'https://icms-image.slatic.net/images/ims-web/106b4acd-9996-4a59-918d-1eaa51708627.jpg',
  SocialIcons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
MessageCount : 9,
year: new Date().getFullYear(),
clipped: false,
fixed:false,
menus : [],      

title: 'Multi Vendor App',
logout_btn:{
icon:'mdi-logout',
label:'Logout'
}
}
},

computed : {
    TotalCartItems () {
      return this.$store.state.CartItem = 1
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
