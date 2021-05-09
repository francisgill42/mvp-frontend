<template>
<div>
        <v-form class="mt-5">
         <div class="display-1 text-center">
           Your new Password
        </div>

        <v-text-field v-model="new_password" :label="`New Password`" />
        <v-text-field v-model="confirm_password" :label="`Confirm Password`" />

        <v-btn class="primary" small width="100%">Change Password</v-btn>
        <br><br>
        
    </v-form>
    <v-container>
        <v-row>
            <a href="login">Already registerd?Click here to login</a>
            <v-spacer></v-spacer>            
            <a href="register">New Customer? Click here</a>
           </v-row>

    </v-container>


</div>
</template>

<script>
export default {
    data : () => ({
        new_password: '',
        confirm_password: '',

    })
}
</script>