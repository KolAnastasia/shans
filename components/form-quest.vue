<template>
  <div class="form-quest">
    <div class="container">
      <div class="form-quest_top">
        <div class="form_title">Остались вопросы?</div>
        <div class="form_desc">
          Звоните по телефону
          <a href="tel:+74732204941">+7 (473) 220-49-41</a> или заполните форму и мы свяжемся с Вами в ближайшее время
        </div>
      </div>
      <form class="form-quest_form">
        <input type="text" name="name" id placeholder="Ваше имя" />
        <input type="tel" name="tel" id placeholder="Телефон" />
        <input type="email" name="email" id placeholder="E-mail" />
        <div class="form-quest_theme-wr">
          <div id="theme" class="form-quest_theme">
            <div class="form-quest_header">
              <span class="form-quest__current">Выберите вид деятельности</span>
            </div>
            <div class="form-quest_body">
              <div class="form-quest_body_item" data-value="value1">Выберите вид деятельности 1</div>
              <div class="form-quest_body_item" data-value="value2">Выберите вид деятельности 2</div>
              <div class="form-quest_body_item" data-value="value3">Выберите вид деятельности 3</div>
            </div>
          </div>
        </div>
        <input type="text" name="quest" id="questions" placeholder="Ваш вопрос"/>
        <div class="form-quest_geo">
          <a href="#">
            <img :src="getImage('geo-ic.svg')" alt />
            Ближайший офис
          </a>
        </div>
        <div class="form-quest_agreement">
          <input type="checkbox" name id="agreement" checked />
          <label for="agreement">Даю согласие на обработку персональных данных</label>
        </div>
        <button type="submit">
          Отправить
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
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
//         if ($('div').is(".feedback-select_header")) {
//      let select = function () {
//             let selectHeader = $('.feedback-select_header');
//             let selectItem = $('.feedback-select_body_item');
//             selectHeader.click(function () {
//                 selectToggle();
//             });
//             selectItem.each(function () {
//                 $(this).click(function () {
//                     selectChoose(this);
//                 });
//             });
//             function selectToggle() {
//                 $('.contacts-feedback_form_theme').toggleClass('active');
//             }
//             function selectChoose(option) {
//                 let selectedText = $(option).text();
//                 $('.select__current').text(selectedText);
//                 selectToggle();
//             }
//         };
//         select();
//         }

};

</script>

<style lang="sass" scoped>
.form
    &-quest 
        background-color: #78BE20
        color: #ffffff
        padding: 80px 0
        &_top
            display: flex
            justify-content: space-between
            margin-bottom: 20px 
    &_title 
        font-weight: bold
        font-size: 36px
        line-height: 43px
        text-transform: uppercase
        color: #FFFFFF
    &_desc
        max-width: 490px
        a 
            color: #ffffff
            font-weight: bold
            text-decoration: none
            &:hover 
                text-decoration: underline
    &-quest_form 
        display: grid
        grid-gap: 35px 80px
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr))
        input 
            border: none
            border-bottom: 1px solid rgba(256, 256, 256, 0.5)
            background: none
            padding-bottom: 12px
            color: #ffffff
            font-size: 16px
            &::placeholder
                font-weight: bold
                font-size: 12px
                line-height: 14px
                letter-spacing: 0.1em
                text-transform: uppercase
                color: #FFFFFF
                opacity: 0.5
            &:focus::placeholder 
                color: transparent
        #questions 
            grid-column: span 2
</style>