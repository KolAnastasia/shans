(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{302:function(t,e,n){},303:function(t,e,n){},304:function(t,e,n){"use strict";var r=n(302);n.n(r).a},305:function(t,e,n){"use strict";var r={props:["names","links","heading","actPage"]},c=(n(304),n(26)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumbs breadcrumbs-section"},[n("div",{staticClass:"container"},[n("nav",[n("ul",[t._l(t.links,(function(link,e){return n("li",{key:e},[n("nuxt-link",{attrs:{to:link}},[n("div",[t._v("\n              "+t._s(t.names[e])+"\n            ")])])],1)})),t._v(" "),n("li",{staticClass:"active-page"},[t._v(" \n              "+t._s(t.actPage)+"\n          ")])],2)]),t._v(" "),n("div",{staticClass:"breadcrumbs-heading-wrap"},[n("h1",{staticClass:"breadcrumbs-heading"},[t._v(t._s(t.heading))])])])])}),[],!1,null,"edc9aa80",null);e.a=component.exports},306:function(t,e,n){},311:function(t,e,n){"use strict";var r=n(303);n.n(r).a},312:function(t,e,n){"use strict";var r={},c=(n(311),n(26)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn-more_wr"},[e("div",{staticClass:"btn-more_icon"},[e("svg",{attrs:{width:"11",height:"14",viewBox:"0 0 11 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M5.5 0L5.5 12M5.5 12L10 7.49217M5.5 12L1 7.49217",stroke:"#78BE20","stroke-width":"2"}})])]),this._v(" "),e("span",[this._v(" \n        Показать всё\n    ")])])}),[],!1,null,"7944c8e0",null);e.a=component.exports},318:function(t,e,n){},319:function(t,e,n){"use strict";var r=n(306);n.n(r).a},320:function(t,e,n){},347:function(t,e,n){"use strict";n(19),n(63);var r={props:{name:{required:!0},selected:{default:!1}},data:function(){return{isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}},c=n(26),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}],staticClass:"tab-wrap"},[this._t("default")],2)}),[],!1,null,"4f8e7d38",null);e.a=component.exports},349:function(t,e,n){"use strict";n(19);var r={props:["heading"],data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(t){this.tabs.forEach((function(e){e.isActive=e.name==t.name}))}},mounted:function(){window.innerWidth}},c=(n(319),n(26)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"heading-wrap"},[n("div",{staticClass:"tabs"},[n("ul",t._l(t.tabs,(function(e,r){return n("li",{key:r,class:{"is-active":e.isActive}},[n("a",{attrs:{href:e.href},on:{click:function(n){return t.selectTab(e)}}},[t._v(t._s(e.name))])])})),0)])]),t._v(" "),n("div",{staticClass:"tabs-details"},[t._t("default")],2)])}),[],!1,null,"2d953e6f",null);e.a=component.exports},355:function(t,e,n){"use strict";var r=n(318);n.n(r).a},356:function(t,e,n){"use strict";var r=n(320);n.n(r).a},383:function(t,e,n){"use strict";n.r(e);var header=n(310),footer=n(309),r={props:{name:String,link:String,number:String}},c=(n(355),n(26)),o=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"documentation_item"},[n("nuxt-link",{attrs:{to:t.link}},[n("div",{staticClass:"documentation_item_number"},[t._v(" "+t._s(t.number))]),t._v(" "),n("div",{staticClass:"documentation_item_title"},[t._v(" "+t._s(t.name))])])],1)}),[],!1,null,"87ea118c",null).exports,l=n(349),d=n(347),f=n(312),v=n(38),m=n.n(v),h={components:{certificatesItem:o,tabs:l.a,tab:d.a,btnMore:f.a},data:function(){return{docGroups:[]}},mounted:function(){var t=this;m.a.get("/certificates.json").then((function(e){t.docGroups=e.data,t.docGroups.forEach((function(t){var i=1;t.selected=!1,t.items.forEach((function(t){t.number=i<10?"0"+i:""+i,i++}))})),t.docGroups[0].selected=!0}))}},_=(n(356),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("tabs",[n("div",{staticClass:"documentation-wr"},t._l(t.docGroups,(function(e,r){return n("tab",{key:r,attrs:{name:e.parentName,selected:e.selected}},[t._l(e.items,(function(t,e){return n("certificates-item",{key:e,attrs:{link:t.link,name:t.name,number:t.number}})})),t._v(" "),n("btn-More")],2)})),1)])],1)}),[],!1,null,"10d55d7b",null).exports),w=n(308),k=n(305),C={components:{appHeader:header.a,appFooter:footer.a,appCertificates:_,appFormquest:w.a,appBreadcrumb:k.a},computed:{names:function(){var t=[];return t.push("Главная"),t},links:function(){var t=[];return t.push("/"),t},actPage:function(){return"Документация"},heading:function(){return"Документация"}}},x=Object(c.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("app-header"),t._v(" "),n("app-breadcrumb",{attrs:{names:t.names,links:t.links,heading:t.heading,actPage:t.actPage}}),t._v(" "),n("app-certificates"),t._v(" "),n("app-formquest"),t._v(" "),n("app-Footer")],1)}),[],!1,null,"cbbea460",null);e.default=x.exports}}]);