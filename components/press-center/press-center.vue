<template>
    <div class="container">
        <tabs>
            <div class="documentation-wr">
                <tab :name="categories.section" v-for="(category, index) in categories" :key="index" :selected="category.selected">
                    <press-center-item v-for="(item, index) in categories.items" :key="index"
                        :title="news.title"
                        :desc="news.desc"
                        :date="news.date"
                        :source="news.source"
                    />
                     <btn-More></btn-More>
                </tab>
                
            </div>
        </tabs>
    </div>
</template>

<script>
import pressCenterItem from "@/components/press-center/press-centerItem.vue";
import tabs from "@/components/tabs/tabs.vue";
import tab from "@/components/tabs/tab.vue";
import btnMore from "@/components/btn-more.vue";
import axios from "axios"
export default {
    components: {
        pressCenterItem,
        tabs,
        tab,
        btnMore
    },
    data: function() {
        return {
            categories : []
        }
    },
    mounted(){
        axios.get('/press-center.json').then(response => {
                this.categories = response.data;
                this.categories.forEach(function(news){
                    news.selected = false;
                });
                this.categories[0].selected = true;
            });
    }
    
}

</script>

<style lang="sass" scoped>


</style>
