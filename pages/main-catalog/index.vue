<template>
  <section>
    <app-header></app-header>
    <app-breadcrumb 
      :names="names"
      :links="links"
      :heading="heading"
      :actPage="actPage"
    >
    </app-breadcrumb>
    <div class="container"> 
      <div class="search-wrap"> 
        <form> 
            <input type="text" placeholder="Введите ключевое слово"/>
            <button class="btn--green"> Искать </button>
        </form>
      </div>
    <main-catalog> </main-catalog>
    </div>
    <app-formquest> </app-formquest>
    <app-Footer></app-Footer>
  </section>
</template> 

<script>
import appHeader from "@/components/header.vue";
import appBreadcrumb from "@/components/breadcrumb.vue";
import appFormquest from "@/components/form-quest.vue";
import mainCatalog from "@/components/catalog/mainCatalog.vue";
import appFooter from "@/components/footer.vue";


export default {
    components: {
    appHeader,
    appFooter,
    appFormquest,
    appBreadcrumb,
    mainCatalog
  },
  
  computed: {
 names() {
      let obj = []
      obj.push("Главная");
      return obj;
    },

    links(){
      let obj = [];
      obj.push("/");
      return obj;
    },

    actPage() {
        return "Продукция"
    },

    heading(){
      return "Продукция"
    }
  },
};


</script>

<style lang="sass" scoped>

</style>