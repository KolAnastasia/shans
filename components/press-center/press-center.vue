<template>
    <div class="container">
        <tabs>
            <div class="wrapper-grid"> 
                <div class="wrapper-grid_content">
                    <div class="press-center-wr">
                        <tab :name="category.section" v-for="(category, index) in categories" :key="index" :selected="category.selected">
                            <press-center-item v-for="(item, index) in category.items" :key="index"
                                :title="item.title"
                                :desc="item.desc"
                                :date="item.date"
                                :source="item.source"
                                :photoUrl="item.photoUrl"
                            />
                        </tab>
                    </div>
                </div>
                <aside class="wrapper-grid_aside"> 

                </aside>
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
   
.press-center-wr
    .tab-wrap 
        display: grid
        grid-template-columns: repeat(auto-fit, minmax(325px, 1fr))
        grid-gap: 50px 80px
        .news_item
            &:first-of-type
                grid-column: span 2
        
                
</style>
