(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{324:function(t,e,n){"use strict";n(19);var r={props:{title:String,options:Array,name:String},methods:{onValueChange:function(t){var e=this.name,n=t.target.value;this.$emit("filterChanged",{filterName:e,selectedValue:n})}},mounted:function(){var t=".filter-"+this.name,e=this.name,n=this,r=document.querySelector(t+" .filter-choose"),l=document.querySelectorAll(t+" .filter_body_item");function c(){document.querySelector(t+" .filter").classList.toggle("active")}r.addEventListener("click",(function(){c()})),l.forEach((function(r){r.addEventListener("click",(function(){var option,l,o;l=(option=r).innerText,o=option.dataset.value,document.querySelector(t+" .select__current").innerText=l,c(),n.$emit("filterChanged",{filterName:e,selectedValue:o})}))}))}};e.a=r},326:function(t,e,n){"use strict";n(19),n(327);e.a={methods:{onFilterChanged:function(t){var e={filterName:t.filterName,selectedValue:t.selectedValue},n=this.selectedFilters.findIndex((function(filter){return filter.filterName===e.filterName}));-1!=n&&this.selectedFilters.splice(n,1),this.selectedFilters.push(e)},onDataFiltered:function(t){this.availableFilters.forEach((function(filter){var e=t.map((function(t){return t[filter.name]})),n=filter.options.filter((function(option){return e.some((function(t){return t==option.value}))}));filter.options=n}))}}}},327:function(t,e,n){"use strict";var r=n(7),l=n(328)(6),c="findIndex",o=!0;c in[]&&Array(1)[c]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),n(81)(c)},328:function(t,e,n){var r=n(27),l=n(80),c=n(28),o=n(16),v=n(329);t.exports=function(t,e){var n=1==t,d=2==t,_=3==t,m=4==t,h=6==t,f=5==t||h,C=e||v;return function(e,v,w){for(var x,k,E=c(e),y=l(E),S=r(v,w,3),L=o(y.length),M=0,F=n?C(e,L):d?C(e,0):void 0;L>M;M++)if((f||M in y)&&(k=S(x=y[M],M,E),t))if(n)F[M]=k;else if(k)switch(t){case 3:return!0;case 5:return x;case 6:return M;case 2:F.push(x)}else if(m)return!1;return h?-1:_||m?m:F}}},329:function(t,e,n){var r=n(330);t.exports=function(t,e){return new(r(t))(e)}},330:function(t,e,n){var r=n(11),l=n(118),c=n(3)("species");t.exports=function(t){var e;return l(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!l(e.prototype)||(e=void 0),r(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},332:function(t,e,n){},333:function(t,e,n){},334:function(t,e,n){},335:function(t,e,n){},336:function(t,e,n){},337:function(t,e,n){},357:function(t,e,n){"use strict";var r=n(332);n.n(r).a},358:function(t,e,n){"use strict";var r=n(333);n.n(r).a},359:function(t,e,n){"use strict";var r=n(334);n.n(r).a},360:function(t,e,n){"use strict";var r=n(335);n.n(r).a},361:function(t,e,n){"use strict";var r=n(336);n.n(r).a},362:function(t,e,n){"use strict";var r=n(337);n.n(r).a},367:function(t,e,n){"use strict";n.r(e);n(19);var r=n(58),header=n(306),footer=n(305),l=n(307),c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"catalog_item_fav"},[e("img",{attrs:{src:n(121)}})])}],o={props:{title:String,desc:String,activeSubstance:String,typeIconUrl:String,photoUrl:String}},v=(n(357),n(26)),d=Object(v.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog_item"},[n("div",{staticClass:"catalog_item_img"},[n("img",{attrs:{src:t.photoUrl}})]),t._v(" "),n("div",{staticClass:"catalog_item_title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"catalog_item_desc"},[t._v(t._s(t.desc))]),t._v(" "),n("div",{staticClass:"catalog_item_act-subst"},[n("span",[t._v(" Действующее вещество: ")]),t._v("\n            "+t._s(t.activeSubstance)+"\n    ")]),t._v(" "),n("div",{staticClass:"catalog_item_icons"},[n("div",{staticClass:"catalog_item_mark"},[n("img",{attrs:{src:t.typeIconUrl}})]),t._v(" "),t._m(0)])])}),c,!1,null,"a8ab167c",null).exports,_=n(44),m=n.n(_),h={components:{catalogItem:d},props:{selectedFilters:Array},data:function(){return{allProducts:[],slickOptions:{slidesToShow:4,slidesToScroll:1,arrows:!0,nextArrow:'<div class="next-arrow slick-arrow" style="position: absolute;top: -94px;right: 28.5%;width: 15px; cursor: pointer;height: 15px;"><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.5H12M12 5.5L7.49217 1M12 5.5L7.49217 10" stroke="#9E9E9E" stroke-width="2"/></svg></div>',prevArrow:'<div class="prev-arrow slick-arrow" style="position: absolute;top: -94px;cursor: pointer;right: calc(28.5% + 69px);width: 15px; height: 15px;"> <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 5.5H2M2 5.5L6.50783 1M2 5.5L6.50783 10" stroke="#9E9E9E" stroke-width="2"/></svg></div>'}}},computed:{filteredData:function(){var t=this.allProducts;return this.selectedFilters.forEach((function(e){var n;n=t.filter((function(t){return t[e.filterName]==e.selectedValue})),t=n})),this.$emit("dataFiltered",t),t}},mounted:function(){var t=this;m.a.get("/plantProtectionData.json").then((function(e){t.allProducts=e.data,t.filteredData=t.allProducts}))},methods:{next:function(){this.$refs.slick.next(),console.log("NEXT")},prev:function(){this.$refs.slick.prev()},reInit:function(){this.$refs.slick.reSlick()}}},f=(n(358),Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog-szr--wrapper"},[t.filteredData.length?n("slick-slide",{ref:"slick",staticClass:"slider",attrs:{options:t.slickOptions}},t._l(t.filteredData,(function(t,e){return n("div",{key:e,staticClass:"catalog-szr-item"},[n("catalog-item",{attrs:{title:t.title,desc:t.desc,activeSubstance:t.activeSubstance,typeIconUrl:t.typeIconUrl,photoUrl:t.photoUrl}})],1)})),0):t._e(),t._v(" "),n("nuxt-link",{staticClass:"btn-text--green catalog-szr-more",attrs:{to:"/"}},[n("span",[t._v("Вся продукция ")]),t._v(" "),n("svg",{attrs:{width:"39",height:"11",viewBox:"0 0 39 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10",stroke:"#78BE20","stroke-width":"2"}})])])],1)}),[],!1,null,"10863ed4",null).exports),C={},w=(n(359),Object(v.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-sing-wrap"},[n("div",{staticClass:"container"},[n("div",{staticClass:"form-sing_wr"},[t._m(0),t._v(" "),n("div",{staticClass:"form-sing_right"},[n("form",[n("input",{attrs:{type:"text",placeholder:"Ваше имя"}}),t._v(" "),n("input",{attrs:{type:"tel",name:"",id:"",placeholder:"Телефон"}}),t._v(" "),n("div",[n("input",{attrs:{type:"checkbox",required:"",checked:"",id:"agreement-sing"}}),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"btn-wrap"},[n("button",{attrs:{type:"submit"}},[t._v("\n                Отправить\n                "),n("span",[n("svg",{attrs:{width:"39",height:"11",viewBox:"0 0 39 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10",stroke:"white","stroke-width":"2"}})])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-sing_left"},[e("div",{staticClass:"form-sing_left_title"},[this._v("Получите бесплатную консультацию")]),this._v(" "),e("div",{staticClass:"form-sing_left_desc"},[this._v("\n          Заполните форму и мы свяжемся с Вами\n          в ближайшее время\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"agreement-sing"}},[this._v("\n              Даю согласие на\n              "),e("a",{attrs:{href:"#"}},[this._v("обработку персональных данных")])])}],!1,null,"1d672a28",null).exports),x={data:function(){return{slickOptions:Object(r.a)({slidesToShow:1,slidesToScroll:1,appendArrows:!1,dots:!1,customPaging:function(t,i){return t.slickCurrentSlide+"/"+(i+1)},arrows:!0},"customPaging",(function(t,e){})),methods:{next:function(){this.$refs.slick.next(),console.log("NEXT")},prev:function(){this.$refs.slick.prev()},reInit:function(){var t=this;this.$nextTick((function(){t.$refs.slick.reSlick()}))}}}}},k=(n(360),Object(v.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-slider-wr"},[r("slick-slide",{ref:"slick",staticClass:"slider",attrs:{options:t.slickOptions}},[r("div",{staticClass:"main-slider-item"},[r("picture",[r("source",{attrs:{media:"(max-width: 768px)",srcset:n(119)}}),t._v(" "),r("img",{attrs:{srcset:n(120),alt:""}})]),t._v(" "),r("div",{staticClass:"main-slider_content"},[r("h1",[t._v(" Производство "),r("br"),t._v(" и реализация СЗР ")]),t._v(" "),r("div",{staticClass:"main-slider_content_bottom"},[r("div",{staticClass:"main-slider_content_desc"},[t._v("Ассортимент на сегодняшний день насчитывает более 62 препаратов из всех групп пестицидов.")])])])]),t._v(" "),r("div",{staticClass:"main-slider-item"},[r("img",{attrs:{src:t.getImage("banner1.jpg"),alt:""}}),t._v(" "),r("div",{staticClass:"main-slider_content"},[r("h1",[t._v(" Производство "),r("br"),t._v(" и реализация СЗР ")]),t._v(" "),r("div",{staticClass:"main-slider_content_bottom"},[r("div",{staticClass:"main-slider_content_desc"},[t._v("Ассортимент на сегодняшний день насчитывает более 62 препаратов из всех групп пестицидов.")])])])]),t._v(" "),r("div",{staticClass:"main-slider-item"},[r("img",{attrs:{src:t.getImage("banner1.jpg"),alt:""}}),t._v(" "),r("div",{staticClass:"main-slider_content"},[r("h1",[t._v(" Производство "),r("br"),t._v(" и реализация СЗР ")]),t._v(" "),r("div",{staticClass:"main-slider_content_bottom"},[r("div",{staticClass:"main-slider_content_desc"},[t._v("Ассортимент на сегодняшний день насчитывает более 62 препаратов из всех групп пестицидов.")])])])])])],1)}),[],!1,null,"7b30bbdd",null).exports),E={mixins:[n(324).a]},y=(n(361),Object(v.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-item",class:"filter-"+t.name},[n("div",{staticClass:"filter-choose",on:{change:t.onValueChange}},[n("div",{staticClass:"filter-wrapper"},[n("div",{staticClass:"filter",attrs:{id:"city"}},[n("div",{staticClass:"filter_header"},[n("span",{staticClass:"select__current"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"filter_body"},t._l(t.options,(function(e,r){return n("div",{key:r,staticClass:"filter_body_item",attrs:{"data-value":e.value}},[t._v(t._s(e.text))])})),0)])]),t._v(" "),n("svg",{attrs:{width:"8",height:"5",viewBox:"0 0 8 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 5L7.4641 0.5H0.535898L4 5Z",fill:"#9E9E9E"}})])])])}),[],!1,null,"4393aaa7",null).exports),S={mixins:[n(326).a],components:{appHeader:header.a,appBanner:k,appFooter:footer.a,appFormquest:l.a,appCatalogszr:f,appFormsingup:w,catalogFilter:y},data:function(){var t;return{filterGroups:["productType","productCategory","productCulture","productPests"],selectedFilters:[],availableFilters:[],slickOptions:(t={slidesToShow:1,slidesToScroll:1},Object(r.a)(t,"slidesToShow",4),Object(r.a)(t,"appendArrows",!1),Object(r.a)(t,"autoplay",!0),Object(r.a)(t,"autoplaySpeed",3e3),Object(r.a)(t,"dots",!1),Object(r.a)(t,"responsive",[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:981,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:3,centerMode:!0,centerPadding:"0"}},{breakpoint:500,settings:{slidesToShow:2,centerMode:!0,centerPadding:"0"}}]),t)}},mounted:function(){var t=this;m.a.get("/filters.json").then((function(e){t.availableFilters=e.data.filter((function(e){return-1!=t.filterGroups.indexOf(e.name)}))}))}},L=(n(362),Object(v.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("app-header"),t._v(" "),n("app-banner"),t._v(" "),n("div",{staticClass:"main_desc-wr"},[n("div",{staticClass:"container"},[n("div",{staticClass:"main_desc"},[t._m(0),t._v(" "),n("div",{staticClass:"main_desc--right"},[n("div",{staticClass:"main_desc--right_block"},[t._v("\n              В продуктовой линейке ГК «Шанс» представлено 63 высококачественных препарата из всех групп пестицидов и 5 микроудобрений на основе морских водорослей. До конца 2020 года в планах компании увеличить ассортимент ХСЗР до 80 позиций, а микроудобрений до 10.\n              "),n("p",[t._v("Более 3000 сельхозпроизводителей используют препараты ГК «Шанс» для защиты своего урожая во всех регионах РФ.")]),t._v(" "),n("a",{staticClass:"main_desc--right_block_link",attrs:{href:"/about"}},[t._v("\n                Подробнее о компании\n                "),n("span",[n("svg",{attrs:{width:"39",height:"11",viewBox:"0 0 39 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10",stroke:"white","stroke-width":"2"}})])])])]),t._v(" "),t._m(1)])])])]),t._v(" "),n("div",{staticClass:"main-tape-wr"},[n("div",{staticClass:"container"},[n("div",{staticClass:"main-tape"},[n("div",{staticClass:"main-tape_item"},[n("div",{staticClass:"main-tape_img"},[n("img",{attrs:{src:t.getImage("tape1.svg"),alt:""}})]),t._v(" "),t._m(2)]),t._v(" "),n("div",{staticClass:"main-tape_item"},[n("div",{staticClass:"main-tape_img"},[n("img",{attrs:{src:t.getImage("tape2.svg"),alt:""}})]),t._v(" "),t._m(3)]),t._v(" "),n("div",{staticClass:"main-tape_item"},[n("div",{staticClass:"main-tape_img"},[n("img",{attrs:{src:t.getImage("tape3.svg"),alt:""}})]),t._v(" "),t._m(4)]),t._v(" "),n("div",{staticClass:"main-tape_item"},[n("div",{staticClass:"main-tape_img"},[n("img",{attrs:{src:t.getImage("tape4.svg"),alt:""}})]),t._v(" "),t._m(5)])])])]),t._v(" "),n("app-Formsingup"),t._v(" "),n("div",{staticClass:"catalog-szr-wrap"},[n("div",{staticClass:"container"},[n("div",{staticClass:"catalog-szr-title-wr"},[n("div",{staticClass:"catalog-szr-title"},[t._v("\n          Продукция\n        ")]),t._v(" "),n("div",{staticClass:"catalog-szr-title_btn-wr"},[n("a",{staticClass:"catalog-szr-title_btn",attrs:{href:"#"}},[n("svg",{attrs:{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M2.74749 25.398C1.93048 25.398 1.26208 24.954 0.942751 24.6177C-0.0755486 23.4735 -0.0865897 22.4548 0.0798713 21.7983C0.2251 21.2278 0.584351 20.7041 1.09223 20.3237C1.84045 19.7624 3.99765 18.2574 7.18249 16.9767C8.85559 14.0112 9.98855 11.6002 10.7546 9.68017C9.42377 7.24295 8.98723 5.22678 8.84625 4.24208C8.72735 3.41624 8.79275 2.62739 9.03989 1.89723C9.66582 0.0437407 10.9457 -0.0413311 11.4841 0.00974479C11.5937 0.0221821 13.711 0.305256 14.06 3.21642C14.0779 3.33283 14.3097 5.17935 12.6664 9.55165C13.6719 11.2252 15.1463 13.0842 17.306 14.9158C19.4191 14.8926 21.6697 15.1181 24.0324 15.7031C24.5862 15.8403 25.0652 16.1181 25.4193 16.5058C26.0164 17.1586 26.159 17.9725 25.8193 18.7971C25.8193 18.7966 25.8193 18.7962 25.8202 18.7962C25.8227 18.7962 25.68 19.2188 25.3658 19.6415C24.6974 20.5419 23.4345 20.8313 22.4222 20.3123C20.1554 19.1518 18.2649 17.9019 16.6878 16.6275C13.5089 16.7436 10.7003 17.4566 8.40717 18.3218C7.37103 20.129 6.14806 22.1218 4.70341 24.3157C4.4189 24.7482 4.02738 25.0686 3.57301 25.2427H3.57215C3.28679 25.3523 3.00908 25.398 2.74749 25.398ZM5.69963 19.5101C3.89743 20.418 2.66766 21.2832 2.15214 21.6701C1.9551 21.818 1.81837 22.0087 1.76826 22.2069C1.66974 22.5937 1.82771 23.0233 2.23622 23.4829C2.24471 23.4887 2.57339 23.8008 2.93858 23.6615H2.93773C3.04899 23.6192 3.156 23.5252 3.24093 23.397C4.14814 22.02 4.96414 20.7262 5.69963 19.5101ZM19.6526 16.6968C20.7168 17.421 21.9049 18.1301 23.2307 18.8087C23.4787 18.9375 23.7929 18.8659 23.9577 18.6445C24.1097 18.4397 24.1827 18.2249 24.1836 18.2228C24.2966 17.9422 24.2745 17.8037 24.1207 17.6357C24.0001 17.5031 23.8167 17.4016 23.6044 17.3489C22.2464 17.0127 20.9257 16.8034 19.6526 16.6968ZM11.8757 11.501C11.2922 12.8487 10.5567 14.3815 9.63015 16.1152C11.2209 15.6332 12.9891 15.2468 14.9025 15.0519C13.6583 13.85 12.6664 12.6484 11.8757 11.501ZM11.2686 1.69624C11.0563 1.69624 10.8558 1.94217 10.6919 2.42922C10.5289 2.91013 10.4881 3.44079 10.5688 4.0066C10.6665 4.68435 10.9187 5.90005 11.5692 7.41691C12.4491 4.64339 12.337 3.44974 12.3345 3.42536C12.1468 1.86655 11.3034 1.69857 11.2949 1.69741C11.2864 1.69658 11.2769 1.69624 11.2686 1.69624Z",fill:"#78BE20"}})]),t._v(" Скачать полный каталог\n")]),t._v(" "),n("a",{staticClass:"catalog-szr-title_btn",attrs:{href:"#"}},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M22.2858 15.4286C21.8123 15.4286 21.4286 15.8123 21.4286 16.2857V21.4286C21.4286 21.902 21.0448 22.2858 20.5714 22.2858H3.42865C2.95525 22.2858 2.5715 21.902 2.5715 21.4286V16.2857C2.5715 15.8123 2.18774 15.4286 1.71434 15.4286C1.24093 15.4286 0.857178 15.8123 0.857178 16.2857V21.4286C0.857178 22.8488 2.00844 24 3.4286 24H20.5715C21.9916 24 23.1429 22.8488 23.1429 21.4286V16.2857C23.1429 15.8123 22.7592 15.4286 22.2858 15.4286Z",fill:"#78BE20"}}),t._v(" "),n("path",{attrs:{d:"M16.8721 14.8226C16.54 14.5018 16.0134 14.5018 15.6812 14.8226L12.8569 17.6451V0.857159C12.8569 0.383755 12.4732 0 11.9998 0C11.5264 0 11.1426 0.383755 11.1426 0.857159V17.6452L8.32003 14.8226C7.97952 14.4937 7.43691 14.5031 7.10805 14.8436C6.78723 15.1758 6.78723 15.7024 7.10805 16.0346L11.3937 20.3202C11.7281 20.6554 12.2708 20.6561 12.6059 20.3218C12.6064 20.3213 12.6069 20.3208 12.6075 20.3202L16.8932 16.0346C17.2221 15.694 17.2126 15.1514 16.8721 14.8226Z",fill:"#78BE20"}})]),t._v("\n Скачать документацию\n ")])])]),t._v(" "),n("div",{staticClass:"catalog-filter-main-wr"},[n("div",{staticClass:"catalog-filter-wr"},[t._l(t.availableFilters,(function(e,r){return n("catalog-filter",{key:r,attrs:{title:e.title,name:e.name,options:e.options},on:{filterChanged:t.onFilterChanged}})})),t._v(" "),n("div",{staticClass:"catalog-filter-reset"},[n("svg",{attrs:{width:"18",height:"22",viewBox:"0 0 18 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M15.1475 5.96665C13.4716 4.25806 11.2433 3.31708 8.8732 3.31708H7.57231L9.66029 1.18314L8.49692 0L4.43039 4.15603L8.44385 8.31619L9.61538 7.14146L7.542 4.9923H8.8732C12.8598 4.9923 16.1032 8.29892 16.1032 12.3634C16.1032 16.4278 12.8598 19.7344 8.8732 19.7344C4.88656 19.7344 1.64317 16.4278 1.64317 12.3632V11.5256L0 11.5258V12.3634C0 14.7797 0.922975 17.0515 2.59891 18.7601C4.27481 20.4687 6.50311 21.4097 8.8732 21.4097C11.2433 21.4097 13.4716 20.4687 15.1475 18.7601C16.8234 17.0514 17.7464 14.7797 17.7464 12.3634C17.7464 9.94705 16.8234 7.67528 15.1475 5.96665Z",fill:"#78BE20"}})]),t._v(" Сбросить\n              ")])],2)]),t._v(" "),n("app-Catalogszr",{attrs:{selectedFilters:t.selectedFilters},on:{dataFiltered:t.onDataFiltered}})],1)]),t._v(" "),n("app-formquest"),t._v(" "),n("div",{staticClass:"main_trust"},[n("div",{staticClass:"container"},[n("div",{staticClass:"main_trust-wr"},[n("div",{staticClass:"main_trust_subtitle"},[t._v(" \n            Нам доверяют\n          ")]),t._v(" "),n("div",{staticClass:"main_trust_content"},[n("slick-slide",{ref:"slick",staticClass:"slider",attrs:{options:t.slickOptions}},[n("div",{staticClass:"main_trust_content_item"},[n("img",{attrs:{src:t.getImage("trust1.png"),alt:""}})]),t._v(" "),n("div",{staticClass:"main_trust_content_item"},[n("img",{attrs:{src:t.getImage("trust2.png"),alt:""}})]),t._v(" "),n("div",{staticClass:"main_trust_content_item"},[n("img",{attrs:{src:t.getImage("trust3.png"),alt:""}})]),t._v(" "),n("div",{staticClass:"main_trust_content_item"},[n("img",{attrs:{src:t.getImage("trust4.png"),alt:""}})]),t._v(" "),n("div",{staticClass:"main_trust_content_item"},[n("img",{attrs:{src:t.getImage("trust5.png"),alt:""}})])])],1)])])]),t._v(" "),n("app-Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main_desc--left"},[e("div",{staticClass:"main_desc--left--bold"},[this._v("ГК «Шанс» работает на рынке средств защиты растений с 2004 года и входит в пятерку крупнейших федеральных компаний отрасли")]),this._v(" "),e("div",{staticClass:"main_desc--left_content"},[this._v("\n              В России препараты для ГК «Шанс» будет производить завод «Шанс Энтерпрайз» - одно\n              из самых современных в стране и крупнейших в Европе предприятий по выпуску химических средств защиты растений и прочих агрохимических продуктов,\n              расположенное на территории ОЭЗ ППТ «Липецк». Проектная мощность завода 50 млн. литров продукции, соответствующей мировым стандартам.\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main_desc--right--bottom"},[e("div",{staticClass:"main_desc--right--bottom_pluses"},[e("div",{staticClass:"main_desc--right--bottom_pluses_value"},[this._v("45+")]),this._v(" "),e("div",{staticClass:"main_desc--right--bottom_pluses_title"},[this._v("представительств в Российской Федерации")])]),this._v(" "),e("div",{staticClass:"main_desc--right--bottom_pluses"},[e("div",{staticClass:"main_desc--right--bottom_pluses_value"},[this._v("450+")]),this._v(" "),e("div",{staticClass:"main_desc--right--bottom_pluses_title"},[this._v("высококвалифицированных специалистов")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-tape_desc"},[this._v("\n              Производство\n              "),e("br"),this._v("в центре России\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-tape_desc"},[this._v("\n              Комплексное научное\n              "),e("br"),this._v("сопровождение\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-tape_desc"},[this._v("\n              Круглосуточная бесплатная\n              "),e("br"),this._v("доставка препаратов\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-tape_desc"},[this._v("\n              Мировой стандарт\n              "),e("br"),this._v("качества\n            ")])}],!1,null,"51be7668",null));e.default=L.exports}}]);