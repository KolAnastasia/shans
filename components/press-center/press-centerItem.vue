<template>
    <div class="news_item" >
      
            <img :src ="photoUrl"/>
            <nuxt-link to="/">
                <div class="news_item_title"> {{title}}</div>
            </nuxt-link>
            <div class="news_item_desc"> {{desc}}</div>
            <div class="news_item_info"> 
                <div class="news_item_date"> {{ date }}</div>
                <div class="news_item_source"> {{ source }}</div>
            </div>
       
    </div>
</template>

<script>

export default {
    
    props: {
        title:String,
        desc:String,
        date:String,
        source:String,
        photoUrl:String
    }
}

</script>

<style lang="sass" scoped>
.news_item
        &_title 
            font-weight: bold
            font-size: 18px
            line-height: 24px
            margin-bottom: 12px
        &_desc 
            font-weight: normal
            font-size: 14px
            line-height: 24px
            color: #000000
            margin-bottom: 12px
        img 
            margin-bottom: 25px
        a 
            text-decoration: none
            color: #000000
      
            &:hover 
                color: #78BE20
                transition: .2s
           
</style>