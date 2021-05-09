<template>
<div>
    <v-form>
        <div class="display-1 text-center">
        Create an Account
        </div>
        <v-text-field v-model="full_name" :label="`Full Name`" />
        <v-text-field v-model="email" :label="`Email`" />
        <v-text-field v-model="number" :label="`Cell Phone`" />
        <v-text-field v-model="store_name" :label="`Store Name`" />
        
        <v-btn class="primary" small width="100%">Register</v-btn>
        </v-form>
    <v-container  class="mt-3">
        <v-row>
            
        <a href="login">Already registerd?Click here to login</a>
        </v-row>

    </v-container>

</div>
</template>

<script>
export default {
    data : () => ({
        full_name: '',
        email: '',
        number: '',
        store_name : '',
    })
}
</script>