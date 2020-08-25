<template>
  <section>
    <app-header></app-header>
    <app-breadcrumb :names="names" :links="links" :heading="heading" :actPage="actPage"></app-breadcrumb>
    <div class="container">
      <div class="main-catalog_micro">
        <div class="main-catalog_micro_top">
          <div class="main-catalog_micro_desc">
         Современные гербициды, прошедшие регистрацию,представлены во всех известных препаративных формах, например: водный, раствор, водно-диспергируемые гранулы, концентрат эмульсии,масляная дисперсия и т.д.
            <div
              class="main-catalog_micro_desc--bold"
            >
           Инструкции к представленным препаратам помогут Вам подобрать оптимальные гербициды с учетом всех необходимых факторов.</div>
          </div>
        </div>
        <div class="catalog-seed_filter-wrap"> 
          <div class="catalog_seed_filter"> 
          <catalog-filter v-for="(item, index) in availableFilters"
                :key="index" 
                :title="item.title" 
                :name="item.name" 
                :options="item.options"
                v-on:filterChanged="onFilterChanged" />
          <reset-filter> </reset-filter>
          </div>
          <download-catalog />
        </div>
        </div>
        <div class="main-catalog_micro_results"> 
          <div class="main-catalog_micro_results_subtitle">Все результаты </div>
            <div class="main-catalog_micro_results_content"> 
              <span> 5 </span>
            </div>
          </div>
      <div class="main-catalog_micro-wr">
        <catalog-micro :selectedFilters="selectedFilters" v-on:dataFiltered="onDataFiltered"> </catalog-micro>
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
import catalogMicro from "@/components/catalog/catalog_micro.vue";
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
    catalogMicro,
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
      return "Микроудобрения";
    },

    heading() {
      return "Микроудобрения";
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
.main-catalog_micro
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
    .catalog-micro-wr
      display: grid 
      grid-template-columns: repeat(auto-fit, minmax(330px, 330px))
      justify-content: space-between
      grid-gap: 64px

.catalog-seed_filter-wrap 
  display: flex
  align-items: center
  margin-bottom: 35px
  justify-content: space-between

.catalog_seed_filter 
  display: flex 
  align-items: center
  .filter-btn-reset 
    margin-left: 35px


  
@media screen and (max-width: 1165px) 
  .main-catalog_micro-wr 
    .catalog-micro-wr
      justify-content: flex-start

  .filter-item:after
    height: 60%
    top: 17px

@media screen and (max-width: 981px) 
  .catalog-micro_filter-wrap 
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
    .main-catalog_micro_fast
      flex-direction: column
      &_subtitle 
        margin-bottom: 35px
    .main-catalog_micro
      &_top
        flex-direction: column
      &_desc 
        width: 100%
        margin-bottom: 20px

</style>
