<template>
    <div class="main-catalog_item"> 
        <img :src="imgUrl" alt=""/>
        <div class="main-catalog_category">{{category}} </div>
        <div class="main-catalog_desc">{{desc}} </div>
        <nuxt-link :to="link"> 
            <span class="btn-text--green"> <span>Подробнее </span> 
                <svg width="39" height="11" viewBox="0 0 39 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10" stroke="#78BE20" stroke-width="2"/>
                </svg>
            </span>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        category: String,
        desc: String,
        imgUrl: String,
        link: String
    }
}
</script>

<style lang="sass" scoped>

</style>