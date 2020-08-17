<template>
<div class="trailer-news_item">
    <nuxt-link to="/">
        <div class="trailer-news_item_title">
            {{title}}
        </div> 
    </nuxt-link>
        <div class="trailer-news_item_desc">
            {{desc}}
        </div>
        <div class="trailer-news_item_date">
            {{date}}
        </div>
</div>
</template>

<script>
export default {
    props: {
        title: String,
        date: String,
        desc: String,
        location: String
    }
}
</script>
<style lang="sass" scoped>

</style>