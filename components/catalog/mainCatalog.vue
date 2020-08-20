<template>
    <div class="main-catalog-wrap"> 
        <catalog-item
              v-for="(item, index) in mainCatalogItems"
              :key="index"
              :link="item.link"
              :category="item.category"
              :desc="item.desc"
              :imgUrl="item.imgUrl" />
    </div>
</template>

<script>

import catalogItem from "@/components/catalog/mainCatalogItem.vue";
import axios from "axios";

export default {
    components: {
        catalogItem,
    },
    data: function () {
        return {
        mainCatalogItems: []
        };
    },

    mounted() {
        axios.get('/main-catalog.json').then(response => {
            let mainCatalogItems = response.data;
        });
    }
}

</script>

<style lang="sass" scoped>

</style>