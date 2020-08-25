<template>
  <section>
    <app-header></app-header>
    <app-breadcrumb :names="names" :links="links" :heading="heading" :actPage="actPage"></app-breadcrumb>
    <div class="container">
    <download-docs> </download-docs>
    </div>
    <app-formquest></app-formquest>
    <app-Footer></app-Footer>
  </section>
</template> 

<script>
import appHeader from "@/components/header.vue";
import appBreadcrumb from "@/components/breadcrumb.vue";
import downloadDocs from "@/components/buttons/cat-downloadDocs.vue";
import appFormquest from "@/components/forms/form-quest.vue";
import mainCatalog from "@/components/catalog/mainCatalog.vue";
import appFooter from "@/components/footer.vue";

export default {
  components: {
    appHeader,
    appFooter,
    appFormquest,
    appBreadcrumb,
    mainCatalog,
    downloadDocs
  },

  computed: {
    names() {
      let obj = [];
      obj.push("Главная", "Продукция", "Средства защиты растений");
      return obj;
    },

    links() {
      let obj = [];
      obj.push("/", "main-catalog", "catalog_szr");
      return obj;
    },

    actPage() {
      return "Глифошанс Супер, ВР";
    },

  heading() {
    return ""
  }
  },
};
</script>

<style lang="sass" scoped>



</style>