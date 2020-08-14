<template>
  <div class="container">
    <div class="press-center-main-wr">
    <tabs>
        <tab name="Пресс-центр" :selected="true">
            <div class="wrapper-grid">
                <div class="wrapper-grid_content">
                    <form class="press-center_search"> 
                        <div class=""></div>
                    </form>
                    <div class="press-center-wr">
                    <press-center-item
                        v-for="(item, index) in newsItems"
                        :key="index"
                        :title="item.title"
                        :desc="item.desc"
                        :date="item.date"
                        :source="item.source"
                        :photoUrl="item.photoUrl"
                    />
                    </div>
                    <btn-more />
                </div>
                <aside class="wrapper-grid_aside"> 
                  <div class="press-center_events-aside">
                  <div class="press-center_subtitle"> Ближайшие события </div>
                      <a href="#календарь-событий" class="btn-text--green"> <span>Все события </span>
                        <svg width="39" height="11" viewBox="0 0 39 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10" stroke="#78BE20" stroke-width="2"/>
                        </svg>
                      </a>
                  </div>
                    <form-news />
                </aside>
            </div>
        </tab>

        <tab name="Календарь событий" :selected="false">
           <div class="wrapper-grid">
                <div class="wrapper-grid_content">
                    <form class="press-center_search"> 
                        <div class=""></div>
                    </form>
                    <div class="press-center-wr">
                    <event-item
                        v-for="(item, index) in calendarItems"
                        :key="index"
                        :title="item.title"
                        :desc="item.desc"
                        :date="item.date"
                        :location="item.location"
                    />
                    </div>
                    <btn-more />
                </div>
                <aside class="wrapper-grid_aside"> 
                    <form-news />
                </aside>
            </div>
        </tab>

        <tab name="Галерея" :selected="false">
          <div class="gallery-wr">
            <gallery-item
              v-for="(item, index) in galleryItems"
              :key="index"
              :title="item.title"
              :date="item.date"
              :photoUrl="item.photoUrl"
            ></gallery-item>
          </div>
        </tab>
    </tabs>
    </div>
  </div>
</template>

<script>
import pressCenterItem from "@/components/press-center/press-centerItem.vue";
import galleryItem from "@/components/press-center/galleryItem.vue";
import eventItem from "@/components/press-center/eventItem.vue";
import tabs from "@/components/tabs/tabs.vue";
import tab from "@/components/tabs/tab.vue";
import formNews from "@/components/forms/form-news.vue";
import btnMore from "@/components/btn-more.vue";
import axios from "axios";
export default {
  components: {
    pressCenterItem,
    tabs,
    tab,
    btnMore,
    galleryItem,
    eventItem,
    formNews,
  },
  data: function () {
    return {
      newsItems: [],
      calendarItems: [],
      galleryItems: [],
    };
  },
  mounted() {
    axios.get("/press-center.json").then((response) => {
      let sections = response.data;
      let newsSection = sections.filter(function (section) {
        return section.section == "Новости";
      });
      if (newsSection) {
        this.newsItems = newsSection[0].items;
      }

      let calendarSection = sections.filter(function (section) {
        return section.section == "Календарь";
      });
      if (calendarSection) {
        this.calendarItems = calendarSection[0].items;
      }

      let gallerySection = sections.filter(function (section) {
        return section.section == "Галерея";
      });
      if (gallerySection) {
        this.galleryItems = gallerySection[0].items;
      }
    });
  },
};
</script>

<style lang="sass" scoped>
.press-center-main-wr div .heading-wrap .tabs ul 
  justify-content: center

.press-center-wr
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr))
    grid-gap: 50px 80px
    .news_item
        &:first-of-type
            grid-column: span 2
    
.wrapper-grid_content
    .btn-more_wr
      margin: 65px auto 0 auto

.gallery-wr 
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
    grid-gap: 50px 80px 

.press-center_events-aside 
  margin-bottom: 90px

.press-center_subtitle 
  font-weight: 800
  font-size: 24px
  line-height: 29px
  margin-bottom: 35px


        
                
</style>
