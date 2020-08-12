<template>
    <div class="documentation_item" >
        <nuxt-link to {{ link }} >
            <div class="documentation_item_number"> {{ count }}</div>
            <div class="documentation_item_title"> {{ name }}</div>
        </nuxt-link>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            count: 1
        }
    }
}

</script>

<style lang="sass" scoped>

</style>