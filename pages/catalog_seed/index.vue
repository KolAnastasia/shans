<template>
  <section>
    <app-header></app-header>
    <app-breadcrumb :names="names" :links="links" :heading="heading" :actPage="actPage"></app-breadcrumb>
    <div class="container">
      <div class="main-catalog_szr">
        <div class="main-catalog_szr_top">
          <div class="main-catalog_szr_desc">
           Предлагаем широкий ассортимент гибридов семян подсолнечника для всех сегментов рынка: гибриды устойчивые ко всем известным расам заразихи, высокомасличные классические, гибриды подсолнечника для производительных систем CLEARFIELD®, CLEARFIELD®PLUS, ЭКСПРЕСС®, а также комбинированные гибриды. 
            <div
              class="main-catalog_szr_desc--bold"
            >
            Все гибриды адаптированны для российских условий возделывания. Наши селекционеры уделяют огромное внимание требованиям российских сельхозтоваропроизводителей.</div>
          </div>
        </div>
        <div class="catalog-szr_filter-wrap"> 
          <catalog-filter v-for="(item, index) in availableFilters"
                :key="index" 
                :title="item.title" 
                :name="item.name" 
                :options="item.options"
                v-on:filterChanged="onFilterChanged" />
          <reset-filter> </reset-filter>
          
          <download-catalog />
        </div>
        </div>
        <div class="main-catalog_szr_results"> 
          <div class="main-catalog_szr_results_subtitle">Все результаты </div>
            <div class="main-catalog_szr_results_content"> 
              <span> 64 </span>
            </div>
          </div>
      <div class="main-catalog_szr-wr">
        <catalog-seed :selectedFilters="selectedFilters" v-on:dataFiltered="onDataFiltered"> </catalog-seed>
      <btn-more />
      </div>
    </div>
    <app-formquest></app-formquest>
    <app-Footer></app-Footer>
  </section>
</template> 

<script>
import appHeader from "@/components/header.vue";
import appBreadcrumb from "@/components/breadcrumb.vue";
import downloadCatalog from "@/components/buttons/download-catalog.vue";
import catalogSeed from "@/components/catalog/catalog_seed.vue";
import btnMore from "@/components/buttons/btn-more.vue";
import ResetFilter from "@/components/buttons/btn-reset-filter.vue";
import appFormquest from "@/components/forms/form-quest.vue";
import catalogFilter from "@/components/catalog-filter.vue"
import appFooter from "@/components/footer.vue";
import filtersPageMixin from "@/components/shared/filtersPageMixin.js";
import axios from "axios";

export default {
  mixins: [filtersPageMixin],
  components: {
    appHeader,
    appFooter,
    appFormquest,
    appBreadcrumb,
    downloadCatalog,
    btnMore,
    catalogSeed,
    catalogFilter,
    ResetFilter
  },

  data() {
    return {
      filterGroups: [
        "productType",
        "productRipeness"
      ],
      selectedFilters: [],
      availableFilters: [],
    };
  },

  computed: {
    names() {
      let obj = [];
      obj.push("Главная", "Продукция");
      return obj;
    },

    links() {
      let obj = [];
      obj.push("/", "main-catalog");
      return obj;
    },

    actPage() {
      return "Элитные семена";
    },

    heading() {
      return "Элитные семена";
    },
  },

  
  mounted() {
    axios.get("/seedFilter.json").then((response) => {
      this.availableFilters = response.data.filter((item) => {
        //берем только те фильтры, которрые перечислены в filterGroups
        return this.filterGroups.indexOf(item.name) != -1;
      });
    });
  },

};
</script>


<style lang="sass" scoped>
.main-catalog_szr
  &_top 
    display: flex 
    align-items: flex-start
    justify-content: space-between
    margin-bottom: 64px
  &_desc 
    width: 737px
    &--bold 
      margin-top: 20px 
      font-weight: bold
  &_fast 
    display: flex 
    align-items: baseline
    &_subtitle 
      font-weight: 800
      font-size: 12px
      line-height: 14px
      letter-spacing: 0.1em
      text-transform: uppercase
      margin-right: 23px 
    &_content 
      max-width: 710px 
      a 
        display: inline-block
        color: #78BE20
        font-weight: 800
        font-size: 12px
        line-height: 14px
        letter-spacing: 0.1em
        transition: .2s
        margin-right: 30px
        margin-bottom: 20px
        text-transform: uppercase
        &:hover 
          color: #000000
  &_results 
    display: flex
    align-items: center
    margin-top: 64px
    margin-bottom: 64px
    &_subtitle
      font-weight: 800
      font-size: 12px
      line-height: 14px
      letter-spacing: 0.1em
      text-transform: uppercase
      margin-right: 10px
    &_content 
      background-color: rgba(120, 190, 32, 0.2)
      border-radius: 10px
      height: 15px
      display: flex
      align-items: center
      span  
        font-weight: bold
        font-size: 12px
        line-height: 14px
        text-transform: uppercase
        color: #78BE20
        padding: 6px

  &-wr 
    padding-bottom: 100px
    .btn-more_wr
      margin: 64px auto 0 auto
    .catalog-szr-wr
      display: grid 
      grid-template-columns: repeat(auto-fit, minmax(330px, 330px))
      justify-content: space-between
      grid-gap: 64px

.catalog-szr_filter-wrap 
  display: flex
  align-items: center
  margin-bottom: 35px
  .filter-btn-reset 
    margin-left: 35px

@media screen and (max-width: 1165px) 
  .main-catalog_szr-wr 
    .catalog-szr-wr
      justify-content: flex-start

  .filter-item:after
    height: 60%
    top: 17px

@media screen and (max-width: 981px) 
  .catalog-szr_filter-wrap 
    flex-direction: column 
    align-items: flex-start
    .filter-item 
      width: 100% 
      margin-bottom: 10px
      &:after 
        display: none
    .filter-btn-reset
      margin-left: 0
      margin-top: 20px

  @media screen and (max-width: 768px) 
    .main-catalog_szr_fast
      flex-direction: column
      &_subtitle 
        margin-bottom: 35px
    .main-catalog_szr
      &_top
        flex-direction: column
      &_desc 
        width: 100%
        margin-bottom: 20px

</style>
