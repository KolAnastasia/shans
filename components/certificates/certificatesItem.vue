<template>
    <div class="documentation_item" >
        <nuxt-link :to ="link" >
            <div class="documentation_item_number"> {{number}}</div>
            <div class="documentation_item_title"> {{name}}</div>
        </nuxt-link>
    </div>
</template>

<script>

export default {
    
    props: {
        name:String,
        link:String,
        number:Number
    }
}

</script>

<style lang="sass" scoped>

</style>