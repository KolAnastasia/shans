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
    <app-tabs></app-tabs>
    <app-formquest> </app-formquest>
    <app-Footer></app-Footer>
  </section>
</template> 

<script>
import appHeader from "@/components/header.vue";
import appFooter from "@/components/footer.vue";
import appTabs from "@/components/tabs/tabs.vue";
import appFormquest from "@/components/form-quest.vue";
import appBreadcrumb from "@/components/breadcrumb.vue";

export default {
    components: {
    appHeader,
    appFooter,
    appTabs,
    appFormquest,
    appBreadcrumb 
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
        return "Документация"
    },

    heading(){
      return "Документация"
    }
  }
}

</script>

<style lang="sass" scoped>

</style>