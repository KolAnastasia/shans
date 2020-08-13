<template>
    <div class="container">
        <tabs>
            <div class="wrapper-grid"> 
                <div class="wrapper-grid_content">
                    <div class="press-center-wr">
                        <tab name="Новости" :selected="true">
                            <press-center-item v-for="(item, index) in newsItems" :key="index"
                                :title="item.title"
                                :desc="item.desc"
                                :date="item.date"
                                :source="item.source"
                                :photoUrl="item.photoUrl"
                            />
                        </tab>
                          <tab name="calendar" :selected="false"> 
                              calendar-content
                          </tab>

                          <tab name="gallery" :selected="false"> 
                              gallery-content
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
            newsItems : [],
            calendarItems:[],
            galleryItems:[]
        }
    },
    mounted(){
        axios.get('/press-center.json').then(response => {
                let sections = response.data;
                let newsSection = sections.filter(function(section){
                    return section.section == "Новости";
                });
                if(newsSection){
                    this.newsItems = newsSection[0].items;
                }

                let calendarSection = sections.filter(function(section){
                    return section.section == "Календарь";
                });
                if(calendarSection){
                    this.calendarItems = calendarSection[0].items;
                }

                let gallerySection = sections.filter(function(section){
                    return section.section == "Галерея";
                });
                if(gallerySection){
                    this.galleryItems = gallerySection[0].items;
                }
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
