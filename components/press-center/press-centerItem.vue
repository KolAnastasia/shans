<template>
    <div class="news_item" >
        <nuxt-link>
            <img  :src="photoUrl"/>
            <div class="news_item_title"> {{title}}</div>
            <div class="news_item_desc"> {{desc}}</div>
            <div class="news_item_info"> 
                <div class="news_item_date"> {{ date }}</div>
                <div class="news_item_source"> {{ source }}</div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>

export default {
    
    props: {
        title:String,
        desc:String,
        date:String,
        source:String,
    }
}

</script>

<style lang="sass" scoped>
 
</style>