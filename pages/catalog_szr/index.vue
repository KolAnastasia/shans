<template>
  <section>
    <app-header></app-header>
    <app-breadcrumb :names="names" :links="links" :heading="heading" :actPage="actPage"></app-breadcrumb>
    <div class="container">
      <div class="main-catalog_szr">
        <div class="main-catalog_szr_top">
          <div class="main-catalog_szr_desc">
            Современные гербициды, прошедшие регистрацию,представлены во всех известных препаративных формах, например: водный, раствор, водно-диспергируемые гранулы, концентрат эмульсии,масляная дисперсия и т.д.
            <div
              class="main-catalog_szr_desc--bold"
            >Инструкции к представленным препаратам помогут Вам подобрать оптимальные гербициды с учетом всех необходимых факторов.</div>
          </div>
          <download-catalog />
        </div>
        <!-- <filter /> -->
        <div class="main-catalog_szr_fast"> 
          <div class="main-catalog_szr_fast_subtitle"> Быстрые ссылки: </div>
          <div class="main-catalog_szr_fast_content"> 
            <a href="#">Протравители </a>
            <a href="#">Гербициды </a>
            <a href="#">Фунгициды </a>
            <a href="#"> Десиканты </a>
            <a href="#"> Фумиганты </a>
            <a href="#">Родентициды </a>
            <a href="#"> Инсектициды</a>
            <a href="#">Инсектоакарициды </a>
            <a href="#">Павы и адъюванты </a>
          </div>
        </div>
        <div class="main-catalog_szr_results"> 
          <div class="main-catalog_szr_results_subtitle">Все результаты </div>
            <div class="main-catalog_szr_results_content"> 
              <span> 64 </span>
            </div>
          </div>
      </div>
      <div class="main-catalog_szr-wr">
        <!-- <catalog-szr /> -->
      </div>
      <btn-more />
    </div>
    <app-formquest></app-formquest>
    <app-Footer></app-Footer>
  </section>
</template> 

<script>
import appHeader from "@/components/header.vue";
import appBreadcrumb from "@/components/breadcrumb.vue";
import downloadCatalog from "@/components/buttons/download-catalog.vue";
// import catalogSzr from "@/components/catalog-szr.vue";
import btnMore from "@/components/buttons/btn-more.vue";
import appFormquest from "@/components/forms/form-quest.vue";
// import catalogFilter from "@/components/catalog-filter.vue"
// import mainCatalog from "@/components/catalog/mainCatalog.vue";
import appFooter from "@/components/footer.vue";
// import filtersPageMixin from "@/components/shared/filtersPageMixin.js";
// import axios from "axios";

export default {
  // mixins: [filtersPageMixin],
  components: {
    appHeader,
    appFooter,
    appFormquest,
    appBreadcrumb,
    // mainCatalog,
    downloadCatalog,
    btnMore,
    // catalogSzr,
    // catalogFilter,
  },

  // data() {
  //   return {
  //     filterGroups: [
  //       "productType",
  //       "productCategory",
  //       "productCulture",
  //       "productPests",
  //     ],
  //     selectedFilters: [],
  //     availableFilters: [],
  //   };
  // },

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
      return "Средства защиты растений";
    },

    heading() {
      return "Средства защиты растений";
    },
  },

  
  // mounted() {
  //   axios.get("/filters.json").then((response) => {
  //     this.availableFilters = response.data.filter((item) => {
  //       //берем только те фильтры, которрые перечислены в filterGroups
  //       return this.filterGroups.indexOf(item.name) != -1;
  //     });
  //   });
  // },

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

</style>
