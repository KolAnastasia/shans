<template>
  <section>
    <app-header></app-header>
    <app-breadcrumb :names="names" :links="links" :heading="heading" :actPage="actPage"></app-breadcrumb>
    <div class="container">
      <div class="search-wrap">
        <form>
          <input type="text" placeholder="Введите ключевое слово" />
          <button class="btn--green">Искать</button>
        </form>
      </div>
      <main-catalog></main-catalog>
      <div class="main-catalog_bottom">
        <div class="main-catalog_bottom_content">
          <div class="main-catalog_bottom_content_text">
            
        <div class="main-catalog_subtitle">Продукция ГК “Шанс”</div>
            Мы берем на себя полную ответственность за решение двух ключевых проблем в хозяйствах: получение нужной густоты насаждения и подавление всех вредных объектов. 
            В наших представительствах работают высококвалифицированные специалисты, которые в любой момент готовы выехать в хозяйство и оказать реальную помощь в
             возделывании сельскохозяйственных культур. В этой связи рассматривайте нас не как простых поставщиков СЗР и семян, а как верных и надежных партнеров, с 
             которыми Вы достигнете желаемых результатов.</div>
              <div class="main-catalog_bottom_content_number-wr">
                <div class="main-catalog_bottom_content_number_subtitle">
                  Свяжитесь с нами
                </div>
                <a href="tel:+74732204941" class="main-catalog_bottom_content_number_tel"> +7 (473) 220-49-41</a>
                 <a href="mailto:info@shans.ru" class="main-catalog_bottom_content_number_mail"> info@shans.ru" </a>
              </div>
        </div>
      </div>
    </div>
    <app-formquest></app-formquest>
    <app-Footer></app-Footer>
  </section>
</template> 

<script>
import appHeader from "@/components/header.vue";
import appBreadcrumb from "@/components/breadcrumb.vue";
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
  },

  computed: {
    names() {
      let obj = [];
      obj.push("Главная");
      return obj;
    },

    links() {
      let obj = [];
      obj.push("/");
      return obj;
    },

    actPage() {
      return "Продукция";
    },

    heading() {
      return "Продукция";
    },
  },
};
</script>

<style lang="sass" scoped>
.search-wrap 
  form 
    display: flex 
    align-items: center
    input 
      padding: 22px 10px 21px 39px
      box-sizing: border-box
      border: 1px solid #E5E5E5
      min-width: 328px
      &::placeholder 
        font-weight: 800
        font-size: 12px
        line-height: 14px
        letter-spacing: 0.1em
        text-transform: uppercase
        color: #9E9E9E

.main-catalog 
  &_subtitle 
    font-weight: 800
    font-size: 24px
    line-height: 36px
    margin-bottom: 25px
  &_bottom_content
    display: flex
    justify-content: space-between
    margin-bottom: 118px
    &_text 
      max-width: 737px
      margin-right: 20px
    &_number
      &-wr
        padding: 81px 
        background: #F9F9F9
        max-width: 410px
      &_subtitle
        font-weight: 800
        font-size: 24px 
        margin-bottom: 18px
      &_tel 
        font-weight: 500
        font-size: 18px
        text-decoration: none 
        color: #000000
        transition: .2s
        display: block
        margin-bottom: 10px
        &:hover 
          color: #78BE20
          transition: .2s
      &_mail 
        color: #78BE20
        transition: .2s
        display: block
        &:hover 
          color: #000000
          transition: .2s

@media screen and (max-width: 981px) 
  .main-catalog_bottom_content
    flex-direction: column
    &_text 
      max-width: 100% 
      margin-right: 0 
      margin-bottom: 20px
    &_number-wr 
      width: calc(100% + 50px) 
      margin-left: -25px 
      max-width: initial
      padding: 40px 15px 40px 25px

@media screen and (max-width: 560px) 
  .search-wrap 
    form 
      flex-direction: column
      input 
        width: 100% 
        margin-bottom: 35px 
      button 
        width: 100% 
        text-align: center
        


</style>