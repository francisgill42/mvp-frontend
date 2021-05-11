<template>
<div>
        <v-form class="mt-5">
         <div class="display-1 text-center">
           Master Login
        </div>
        <v-text-field v-model="email" :label="`Email`" />
        <v-text-field v-model="password" :label="`Password`" />
        <v-btn class="primary" small width="100%">Login</v-btn>
        <br><br>
        
    </v-form>
    <v-container>
        <v-row>
            <a href="/forgot_password">Forgot Password</a>
           </v-row>

    </v-container>


</div>
</template>

<script>
export default {
    data : () => ({
        email: '',
        password: '',

    })
}
</script>