<template>
    <div class="container">
        <div class="catalog-szr-item"
            v-for="(item, index) in plantsProtectionProducts"
            :key="index"
        >
            <catalog-item></catalog-item>
        </div>
        <nuxt-link to="/"> Вся продукция  
            <svg width="39" height="11" viewBox="0 0 39 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10" stroke="#78BE20" stroke-width="2"/>
            </svg>
        </nuxt-link>
    </div>
</template>

<script>
import catalogItem from "@/components/catalog-item";
import axios from "axios"
//import data from "@/static/plantProtectionData.js"
export default {
    components: {
        catalogItem
    },
    data: function() {
        return {
            plantsProtectionProducts : []
        }
    },
    mounted(){
        axios.get('/plantProtectionData.json').then(response => {
            this.plantsProtectionProducts = response.data
        });
    }
    
}

</script>

<style lang="sass" scoped>

    .catalog-szr
        padding: 100px 0
        &_item 
            max-width: 330px
            border: 1px solid #E5E5E5
            padding: 30px
            box-sizing: border-box
            &_img 
                margin-bottom: 30px
                text-align: center
                img 
                    width: 100%
                    max-width: 127px
            &_title
                font-weight: bold
                font-size: 24px
                line-height: 36px
                margin-bottom: 10px
            &_desc
                font-size: 14px
                line-height: 24px
                color: #9E9E9E
                margin-bottom: 25px
</style>
