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
    <press-center> </press-center>
    <app-formquest> </app-formquest>
    <app-Footer></app-Footer>
  </section>
</template> 

<script>
import appHeader from "@/components/header.vue";
import appBreadcrumb from "@/components/breadcrumb.vue";
import pressCenter from "@/components/press-center/press-center.vue";
import appFormquest from "@/components/form-quest.vue";
import appFooter from "@/components/footer.vue";


export default {
    components: {
    appHeader,
    appFooter,
    appFormquest,
    appBreadcrumb,
    pressCenter 
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
        return "Пресс-центр"
    },

    heading(){
      return "Пресс-центр"
    }
  }
}

</script>

<style lang="sass" scoped>

</style>