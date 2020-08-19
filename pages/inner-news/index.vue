<template>
  <section>
    <app-header></app-header>
    <app-breadcrumb :names="names" :links="links" :actPage="actPage"></app-breadcrumb>
    <div class="container">
      <div class="news_content_wrap">
        <div class="wrapper-grid">
          <div class="wrapper-grid_content">
            <title-news />

            <p>С 2017 года наши торговые компании участвуют в осуществлении масштабного инвестиционного проекта в качестве партнера завода по производству средств защиты растений и прочих агрохимических продуктов «Шанс Энтерпрайз» на территории ОЭЗ ППТ «Липецк». Плановый объем инвестиций составляет 3,5 млрд рублей.</p>

            <p>Реализация проекта позволит удовлетворить потребности не только отечественного, но и зарубежного агропромышленного комплекса.</p>

            <div class="inner-news_subtitle">Производственная мощность «Шанс Энтерпрайз» составит:</div>
            <list-news />
            <p>Лаборатории оснащены всем необходимым оборудованием, включая газовый и жидкостной хроматографы. Идёт отработка процедур входного контроля, анализируются продукты и полупродукты, моделируются производственные процессы.</p>
            <cite-news />
            <slider-news />
            <p>На сегодняшний день проект реализован на 95%. Все запланированные корпуса возведены, идёт внутренняя и наружная отделка. Предприятие оснащено передовым оборудованием производителей из Германии, Италии, Великобритании. Инженерное и технологическое оборудование смонтировано на 100%. Пусконаладочные работы запланированы на январь 2020 года. В цехе по производству полимерной тары была произведена пробная партия 4-слойных полимерных канистр, изготовленных по технологии COEX, объемом 5л и 10л.</p>
            <p>Запуск нового производства состоится во II квартале 2020 года.</p>
            <a href="#" class="news-download-link">
              <div class="news-download-article">
                <div class="news-download-article_icon">
                  <img src="../../assets/pdf-icon.svg" alt />
                </div>
                <div class="news-download-article_content">
                  <div class="news-download-article_title">Комсомольская правда №3 2020</div>
                  <div class="news-download-article_desc">(Adobe Acrobat, 827.26 Кб)</div>
                </div>
              </div>
            </a>
            <nuxt-link to="/press-center" class="btn-text--green">
              <span>вернуться к новостям</span>
              <svg
                width="39"
                height="11"
                viewBox="0 0 39 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10"
                  stroke="#78BE20"
                  stroke-width="2"
                />
              </svg>
            </nuxt-link>
          </div>
          <aside class="wrapper-grid_aside">
            <div class="form-news_wr">
              <form-news />
            </div>
            <div class="other-news">
              <div class="press-center_subtitle">Другие новости</div>
              <div class="other-news_item">
                <div class="other-news_item_subtitle">
                  <nuxt-link to="/inner-news">Растения получат «Шанс» из Липецка</nuxt-link>
                </div>
                <div
                  class="other-news_item_desc"
                >О намерении ООО «Шанс энтерпрайз» построить завод на новой елецкой площадке ОЭЗ «Липецк» „Ъ“ рассказал гендиректор Иван Кошелев.</div>
                <div class="other-news_item_info">
                  <div class="other-news_item_date">1 ноября 2019</div>
                  <div class="other-news_item_source">Публикации в СМИ</div>
                </div>
              </div>
              <div class="other-news_item">
                <div class="other-news_item_subtitle">
                  <nuxt-link to="/inner-news">Растения получат «Шанс» из Липецка</nuxt-link>
                </div>
                <div
                  class="other-news_item_desc"
                >О намерении ООО «Шанс энтерпрайз» построить завод на новой елецкой площадке ОЭЗ «Липецк» „Ъ“ рассказал гендиректор Иван Кошелев.</div>
                <div class="other-news_item_info">
                  <div class="other-news_item_date">1 ноября 2019</div>
                  <div class="other-news_item_source">Публикации в СМИ</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    <form-quest />
    <app-Footer></app-Footer>
  </section>
</template> 

<script>
import appHeader from "@/components/header.vue";
import appBreadcrumb from "@/components/breadcrumb.vue";
import titleNews from "@/components/inner-news/title-news.vue";
import listNews from "@/components/inner-news/list-news.vue";
import citeNews from "@/components/inner-news/cite-news.vue";
import sliderNews from "@/components/inner-news/slider-news.vue";
import formNews from "@/components/forms/form-news.vue";
import formQuest from "@/components/form-quest.vue";
import appFooter from "@/components/footer.vue";

export default {
  components: {
    appHeader,
    appFooter,
    appBreadcrumb,
    titleNews,
    listNews,
    citeNews,
    formNews,
    sliderNews,
    formQuest,
  },

  computed: {
    names() {
      let obj = [];
      obj.push("Главная", "Пресс-центр", "Новости");
      return obj;
    },

    links() {
      let obj = [];
      obj.push("/", "/press-center", "/press-center");
      return obj;
    },

    actPage() {
      return "Начало строительства завода по производству средств защиты растений и прочих агрохимических продуктов на территории ОЭЗ ППТ «Липецк»";
    },

    heading() {
      return "Начало строительства завода по производству средств защиты растений и прочих агрохимических продуктов на территории ОЭЗ ППТ «Липецк»";
    },
  },
};
</script>

<style lang="sass" scoped>
.news_content_wrap 
  line-height: 30px
  padding-bottom: 100px

.inner-news_subtitle
  font-weight: bold
  margin-bottom: 15px

.news_content_wrap 
  p
    margin: 25px 0

.form-news_wr 
  padding: 50px
  box-sizing: border-box
  background-color: #F9F9F9

.news-download
  &-link
    text-decoration: none
    display: inline-block
    margin-bottom: 50px
    &:hover
      .news-download-article_title
        color: #78BE20
  &-article 
    display: grid
    grid-template-columns: 48px 1fr
    grid-column-gap: 33px
    align-items: center
    &_icon
      max-width: 48px
    &_title 
      font-weight: bold
      font-size: 14px
      color: #000000
      line-height: 24px
    &_desc 
      font-size: 12px
      line-height: 24px
      color: #9E9E9E

.press-center_subtitle 
  font-weight: 800
  font-size: 24px
  line-height: 29px
  margin-bottom: 35px
  

.other-news
  margin-top: 65px
  &_item 
    margin-bottom: 35px
    &_subtitle 
      a 
        font-weight: bold
        text-decoration: none 
        color: #000000
        transition: .2s
        display: inline-block
        font-size: 18px
        margin-bottom: 15px
        &:hover 
          color: #78BE20
          transition: .2s
    &_desc 
      font-size: 14px
      line-height: 24px
      margin-bottom: 15px
    &_info 
      display: flex
      align-items: center 
      font-size: 12px
      line-height: 30px
      color: #9E9E9E
    &_date 
      margin-right: 30px 
      position: relative 
      &:before 
        content: "\2022"
        position: absolute
        width: 3px
        height: 3px
        top: 2px
        right: -15px
        line-height: 2

</style>