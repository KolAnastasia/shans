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
    <app-formquest> </app-formquest>
    <app-Footer></app-Footer>
  </section>
</template>

<script>
import appHeader from "@/components/header.vue";
import appFooter from "@/components/footer.vue";
import appFormquest from "@/components/form-quest.vue";
import appBanner from "@/components/main-page/main-slider.vue";

export default {
  components: {
    appHeader,
    appBanner,
    appFooter,
    appFormquest
  },
};
</script>

<style lang="sass" scoped>
.main_desc 
  display: grid
  grid-template-columns: 1fr 1fr
  padding-top: 80px
  padding-bottom: 100px
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
      


</style>

