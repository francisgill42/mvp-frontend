<template>
<div>
    <h2 class="mt-5 mb-5">{{ModuleName}}</h2>
    <v-checkbox 
    v-for="(item,i) in FilterItems" :key="i"
    style="margin-top: -15px;padding:0;"
    v-model="item_names[i]"
    :label="`${item.item}`"
    :value="item.item"
    ></v-checkbox>           
</div>
</template>

<script>
export default {

    props : ['ModuleName','FilterItems'],
    data : () => ({ item_names : [] })
}
</script>