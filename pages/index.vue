<template>
  <section>
    <app-header></app-header>
    <app-banner></app-banner>
    <div class="main_desc-wr">
      <div class="container">
        <div class="main_desc">
          <div class="main_desc--left">
            <div
              class="main_desc--left--bold"
            >ГК «Шанс» работает на рынке средств защиты растений с 2004 года и входит в пятерку крупнейших федеральных компаний отрасли</div>
            <div class="main_desc--left_content">
              В России препараты для ГК «Шанс» будет производить завод «Шанс Энтерпрайз» - одно
              из самых современных в стране и крупнейших в Европе предприятий по выпуску химических средств защиты растений и прочих агрохимических продуктов,
              расположенное на территории ОЭЗ ППТ «Липецк». Проектная мощность завода 50 млн. литров продукции, соответствующей мировым стандартам.
            </div>
          </div>
          <div class="main_desc--right">
            <div class="main_desc--right_block">
              В продуктовой линейке ГК «Шанс» представлено 63 высококачественных препарата из всех групп пестицидов и 5 микроудобрений на основе морских водорослей. До конца 2020 года в планах компании увеличить ассортимент ХСЗР до 80 позиций, а микроудобрений до 10.
              <p>Более 3000 сельхозпроизводителей используют препараты ГК «Шанс» для защиты своего урожая во всех регионах РФ.</p>
              <a href="/about" class="main_desc--right_block_link">
                Подробнее о компании
                <span>
                  <svg
                    width="39"
                    height="11"
                    viewBox="0 0 39 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div class="main_desc--right--bottom">
              <div class="main_desc--right--bottom_pluses">
                <div class="main_desc--right--bottom_pluses_value">45+</div>
                <div
                  class="main_desc--right--bottom_pluses_title"
                >представительств в Российской Федерации</div>
              </div>
              <div class="main_desc--right--bottom_pluses">
                <div class="main_desc--right--bottom_pluses_value">450+</div>
                <div
                  class="main_desc--right--bottom_pluses_title"
                >высококвалифицированных специалистов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-tape-wr">
      <div class="container">
        <div class="main-tape">
          <div class="main-tape_item">
            <div class="main-tape_img">
              <img :src="getImage('tape1.svg')" alt />
            </div>
            <div class="main-tape_desc">
              Производство
              <br />в центре России
            </div>
          </div>
          <div class="main-tape_item">
            <div class="main-tape_img">
              <img :src="getImage('tape2.svg')" alt />
            </div>
            <div class="main-tape_desc">
              Комплексное научное
              <br />сопровождение
            </div>
          </div>
          <div class="main-tape_item">
            <div class="main-tape_img">
              <img :src="getImage('tape3.svg')" alt />
            </div>
            <div class="main-tape_desc">
              Круглосуточная бесплатная
              <br />доставка препаратов
            </div>
          </div>
          <div class="main-tape_item">
            <div class="main-tape_img">
              <img :src="getImage('tape4.svg')" alt />
            </div>
            <div class="main-tape_desc">
              Мировой стандарт
              <br />качества
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-Formsingup> </app-Formsingup>

    <div class="catalog-szr-wrap">
      <div class="container">
      <div class="catalog-szr-title-wr">
        <div class="catalog-szr-title">
          Продукция
        </div>
        <div class="catalog-szr-title_btn-wr">
          <a href="#" class="catalog-szr-title_btn" > <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.74749 25.398C1.93048 25.398 1.26208 24.954 0.942751 24.6177C-0.0755486 23.4735 -0.0865897 22.4548 0.0798713 21.7983C0.2251 21.2278 0.584351 20.7041 1.09223 20.3237C1.84045 19.7624 3.99765 18.2574 7.18249 16.9767C8.85559 14.0112 9.98855 11.6002 10.7546 9.68017C9.42377 7.24295 8.98723 5.22678 8.84625 4.24208C8.72735 3.41624 8.79275 2.62739 9.03989 1.89723C9.66582 0.0437407 10.9457 -0.0413311 11.4841 0.00974479C11.5937 0.0221821 13.711 0.305256 14.06 3.21642C14.0779 3.33283 14.3097 5.17935 12.6664 9.55165C13.6719 11.2252 15.1463 13.0842 17.306 14.9158C19.4191 14.8926 21.6697 15.1181 24.0324 15.7031C24.5862 15.8403 25.0652 16.1181 25.4193 16.5058C26.0164 17.1586 26.159 17.9725 25.8193 18.7971C25.8193 18.7966 25.8193 18.7962 25.8202 18.7962C25.8227 18.7962 25.68 19.2188 25.3658 19.6415C24.6974 20.5419 23.4345 20.8313 22.4222 20.3123C20.1554 19.1518 18.2649 17.9019 16.6878 16.6275C13.5089 16.7436 10.7003 17.4566 8.40717 18.3218C7.37103 20.129 6.14806 22.1218 4.70341 24.3157C4.4189 24.7482 4.02738 25.0686 3.57301 25.2427H3.57215C3.28679 25.3523 3.00908 25.398 2.74749 25.398ZM5.69963 19.5101C3.89743 20.418 2.66766 21.2832 2.15214 21.6701C1.9551 21.818 1.81837 22.0087 1.76826 22.2069C1.66974 22.5937 1.82771 23.0233 2.23622 23.4829C2.24471 23.4887 2.57339 23.8008 2.93858 23.6615H2.93773C3.04899 23.6192 3.156 23.5252 3.24093 23.397C4.14814 22.02 4.96414 20.7262 5.69963 19.5101ZM19.6526 16.6968C20.7168 17.421 21.9049 18.1301 23.2307 18.8087C23.4787 18.9375 23.7929 18.8659 23.9577 18.6445C24.1097 18.4397 24.1827 18.2249 24.1836 18.2228C24.2966 17.9422 24.2745 17.8037 24.1207 17.6357C24.0001 17.5031 23.8167 17.4016 23.6044 17.3489C22.2464 17.0127 20.9257 16.8034 19.6526 16.6968ZM11.8757 11.501C11.2922 12.8487 10.5567 14.3815 9.63015 16.1152C11.2209 15.6332 12.9891 15.2468 14.9025 15.0519C13.6583 13.85 12.6664 12.6484 11.8757 11.501ZM11.2686 1.69624C11.0563 1.69624 10.8558 1.94217 10.6919 2.42922C10.5289 2.91013 10.4881 3.44079 10.5688 4.0066C10.6665 4.68435 10.9187 5.90005 11.5692 7.41691C12.4491 4.64339 12.337 3.44974 12.3345 3.42536C12.1468 1.86655 11.3034 1.69857 11.2949 1.69741C11.2864 1.69658 11.2769 1.69624 11.2686 1.69624Z" fill="#78BE20"/>
</svg> Скачать полный каталог
</a>
          <a href="#" class="catalog-szr-title_btn" > <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2858 15.4286C21.8123 15.4286 21.4286 15.8123 21.4286 16.2857V21.4286C21.4286 21.902 21.0448 22.2858 20.5714 22.2858H3.42865C2.95525 22.2858 2.5715 21.902 2.5715 21.4286V16.2857C2.5715 15.8123 2.18774 15.4286 1.71434 15.4286C1.24093 15.4286 0.857178 15.8123 0.857178 16.2857V21.4286C0.857178 22.8488 2.00844 24 3.4286 24H20.5715C21.9916 24 23.1429 22.8488 23.1429 21.4286V16.2857C23.1429 15.8123 22.7592 15.4286 22.2858 15.4286Z" fill="#78BE20"/>
<path d="M16.8721 14.8226C16.54 14.5018 16.0134 14.5018 15.6812 14.8226L12.8569 17.6451V0.857159C12.8569 0.383755 12.4732 0 11.9998 0C11.5264 0 11.1426 0.383755 11.1426 0.857159V17.6452L8.32003 14.8226C7.97952 14.4937 7.43691 14.5031 7.10805 14.8436C6.78723 15.1758 6.78723 15.7024 7.10805 16.0346L11.3937 20.3202C11.7281 20.6554 12.2708 20.6561 12.6059 20.3218C12.6064 20.3213 12.6069 20.3208 12.6075 20.3202L16.8932 16.0346C17.2221 15.694 17.2126 15.1514 16.8721 14.8226Z" fill="#78BE20"/>
</svg>
 Скачать документацию
 </a>
        </div>
      </div>
       <div class="catalog-filter-main-wr"> 
      <div class="catalog-filter-wr"> 
      <catalog-filter v-for="(item, index) in availableFilters"
              :key="index" 
              :title="item.title" 
              :name="item.name" 
              :options="item.options"
              v-on:filterChanged="onFilterChanged" />
              <div class="catalog-filter-reset"> 
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1475 5.96665C13.4716 4.25806 11.2433 3.31708 8.8732 3.31708H7.57231L9.66029 1.18314L8.49692 0L4.43039 4.15603L8.44385 8.31619L9.61538 7.14146L7.542 4.9923H8.8732C12.8598 4.9923 16.1032 8.29892 16.1032 12.3634C16.1032 16.4278 12.8598 19.7344 8.8732 19.7344C4.88656 19.7344 1.64317 16.4278 1.64317 12.3632V11.5256L0 11.5258V12.3634C0 14.7797 0.922975 17.0515 2.59891 18.7601C4.27481 20.4687 6.50311 21.4097 8.8732 21.4097C11.2433 21.4097 13.4716 20.4687 15.1475 18.7601C16.8234 17.0514 17.7464 14.7797 17.7464 12.3634C17.7464 9.94705 16.8234 7.67528 15.1475 5.96665Z" fill="#78BE20"/>
                </svg> Сбросить
              </div>

      </div>
      <!-- <div class="catalog-filter-wr_btn-wr"> 
             <div class="catalog-filter-wr_btn-prev catalog-filter-wr_btn"> 
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5.5H2M2 5.5L6.50783 1M2 5.5L6.50783 10" stroke="#9E9E9E" stroke-width="2"/>
              </svg>

             </div> 
              <div class="catalog-filter-wr_btn catalog-filter-wr_btn-next"> 
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5.5H12M12 5.5L7.49217 1M12 5.5L7.49217 10" stroke="#9E9E9E" stroke-width="2"/>
                </svg>
             </div> 
      </div> -->
       </div>
      <app-Catalogszr :selectedFilters="selectedFilters" v-on:dataFiltered="onDataFiltered"> </app-Catalogszr>
    </div>
    </div>
    <app-formquest> </app-formquest>
    <div class="main_trust"> 
      <div class="container">
        <div class="main_trust-wr">
          <div class="main_trust_subtitle"> 
            Нам доверяют
          </div>
          <div class="main_trust_content"> 
             <slick-slide
                ref="slick"
                :options="slickOptions" 
                class="slider">
          
            <div class="main_trust_content_item">
              <img :src="getImage('trust1.png')" alt />
            </div>
            <div class="main_trust_content_item">
              <img :src="getImage('trust2.png')" alt />
            </div>
            <div class="main_trust_content_item">
              <img :src="getImage('trust3.png')" alt />
            </div>
            <div class="main_trust_content_item">
              <img :src="getImage('trust4.png')" alt />
            </div>
            <div class="main_trust_content_item">
              <img :src="getImage('trust5.png')" alt />
            </div>
              </slick-slide>
          </div>
        </div>
      </div>
    </div>
    <app-Footer></app-Footer>
  </section>
</template>

<script>
import appHeader from "@/components/header.vue";
import appFooter from "@/components/footer.vue";
import appFormquest from "@/components/form-quest.vue";
import appCatalogszr from "@/components/catalog-szr.vue";
import appFormsingup from "@/components/form-sing-up.vue";
import appBanner from "@/components/main-page/main-slider.vue";
import catalogFilter from "@/components/catalog-filter.vue"
import axios from "axios"
import filtersPageMixin from "@/components/shared/filtersPageMixin.js";

export default {
  mixins: [filtersPageMixin],
  components: {
    appHeader,
    appBanner,
    appFooter,
    appFormquest,
    appCatalogszr,
    appFormsingup,
    catalogFilter
  },
    data() {
		return {
      filterGroups : ["productType", "productCategory","productCulture","productPests"],
      selectedFilters:[],
      availableFilters:[],
			slickOptions: {
				slidesToShow: 1,
          slidesToScroll: 1,
          slidesToShow: 4,
          appendArrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false, // показывать `точки`
          responsive: [
            {     
            breakpoint: 1200,
            settings: {
            slidesToShow: 3,
          }
         },            
         {     
            breakpoint: 981,
            settings: {
            slidesToShow: 2,
          }
         },
         {     
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '0'
          }
         },
         {     
            breakpoint: 500,
            settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '0'
          }
         },
         ]
        }
      };
    },
    mounted(){
      axios.get('/filters.json').then(response => {
        this.availableFilters = response.data.filter((item)=>{
          //берем только те фильтры, которрые перечислены в filterGroups
          return this.filterGroups.indexOf(item.name)!=-1
        });
      });
    }
};
</script>

<style lang="sass" scoped>
.main_desc 
  display: grid
  grid-template-columns: 1fr 1fr
  padding-top: 80px
  padding-bottom: 100px
  &-wr 
    background-image: url("../assets/desc-decoration-line.svg")
    background-position: center 
    background-repeat: no-repeat 
    background-size: cover 
  &--left
    max-width: 570px
    &--bold 
      font-weight: 800
      font-size: 30px
      line-height: 40px
      color: #000000
      margin-bottom: 48px
    &_content
      font-size: 18px
      line-height: 30px
      color: #000000
      max-width: 495px

  &--right
    &_block 
      margin-top: -180px
      z-index: 3
      position: relative
      color: #FFFFFF
      background: #78BE20
      padding: 80px
      &_link 
        color: #ffffff
        text-decoration: none
        font-weight: 800
        font-size: 12px
        line-height: 14px
        letter-spacing: 0.1em
        text-transform: uppercase
        color: #FFFFFF
        display: inline-block
        margin-top: 40px

        span 
          margin-left: 10px
    &--bottom
      display: flex
      margin-top: 50px
      &_pluses
        max-width: 170px
        &_value
          font-weight: 800
          font-size: 64px
          line-height: 76px
          color: #000000
          margin-bottom: 10px
        &_title
          font-size: 14px
          line-height: 24px
          color: #9E9E9E
        &:first-of-type
          margin-right: 150px

.main-tape
  display: flex
  justify-content: space-between
  &-wr
    background: #F9F9F9
    padding: 80px 10px
  &_img
    margin-bottom: 26px
    height: 40px
    width: 40px
  &_desc
    font-weight: 800
    font-size: 12px
    line-height: 18px
    letter-spacing: 0.1em
    text-transform: uppercase
    color: #000000
    position: relative
  &_item
    position: relative
    &:after
      position: absolute
      content: ""
      height: 56px
      width: 27px
      background: url('../assets/tape-line.svg') center no-repeat
      bottom: 0
      right: -110px
    &:last-of-type:after 
      display: none
      
.main_trust 
  background-color: #F9F9F9
  padding: 66px 0 60px 0
  &-wr 
    display: flex
    justify-content: space-between
  &_subtitle 
    font-weight: 800
    font-size: 36px
    line-height: 43px
    text-transform: uppercase
    margin-right: 100px
    max-width: 345px
    width: 100%
  &_content 
    max-width: 980px
    width: 100%
    overflow: hidden
    &_item 
      max-width: fit-content

.catalog-filter-main-wr 
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 50px

.catalog-filter-wr
  display: flex
  align-items: center

.catalog-filter-wr_btn-wr
  display: flex 
  align-items: center

.catalog-filter-wr_btn-next 
  margin-left: 56px

.catalog-szr-wrap 
  padding: 100px 0 

.catalog-filter-reset 
  font-weight: bold
  font-size: 12px
  line-height: 14px
  letter-spacing: 0.1em
  text-transform: uppercase
  color: #78BE20
  display: flex
  align-items: center 
  cursor: pointer
  margin-left: 36px
  svg 
    margin-right: 12px

.catalog-szr-title
  font-weight: 800
  font-size: 36px
  line-height: 43px
  text-transform: uppercase
  &-wr 
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 50px
  &_btn 
    display: flex
    align-items: center 
    background: rgba(120, 190, 32, 0.1)
    padding: 17px 35px
    font-weight: 800
    font-size: 12px
    line-height: 14px
    letter-spacing: 0.1em
    text-transform: uppercase
    color: #78BE20
    text-decoration: none
    &-wr 
      display: flex
    svg 
      margin-right: 25px
    &:not(:last-of-type)
      margin-right: 20px
      
.catalog-szr-wrap 
  width: 100% 
  overflow: hidden
@media screen and (max-width: 1200px) 
  .main_desc 
    display: flex
    padding-top: 0
    flex-direction: column
    &--left 
      order: 2
      max-width: 100%
      &_content 
        max-width: 100%
    &--right 
      order: 1
      margin-bottom: 65px
      &_block 
        width: calc(100% + 50px)
        margin-left: -25px
        margin-top: -10px
        padding-right: 80px
        box-sizing: border-box
      &--bottom 
        max-width: 570px
        justify-content: space-between
        &_pluses:first-of-type 
          margin-right: 10px
  .main-tape
    &_item 
      &:after 
        right: -65px

@media screen and (max-width: 981px) 
  .main-tape
    display: grid
    grid-template-columns: 1fr 1fr 
    grid-gap: 45px 60px
    &_item 
      &:after 
        display: none

@media screen and (max-width: 768px) 

  .main_desc 
    &--right 
      &_block 
        padding: 65px 20px

  .main_trust 
    &-wr 
      flex-direction: column
    &_subtitle 
      margin-right: 0
      margin-bottom: 50px

  

</style>

