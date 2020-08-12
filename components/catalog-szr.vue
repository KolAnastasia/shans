<template>
    <div class="container">
        <div class="catalog-szr-item"
            v-for="(item, index) in plantsProtectionProducts"
            :key="index"
        >
            <catalog-item 
            :title="item.title"
             :desc="item.desc" 
             :activeSubstance="item.activeSubstance"
             :typeIconUrl="item.typeIconUrl"
             :photoUrl="item.photoUrl" />
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

</style>
