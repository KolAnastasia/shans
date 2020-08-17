<template>
  <div :class="'filter-'+name">    
    <div class="header_city-choose" v-on:change="onValueChange">
      <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.51597 0.75L3.5 3.20461L5.48403 0.75H1.51597Z" fill="#78BE20" stroke="#78BE20" />
      </svg>
      <div class="header_city-wrapper">
        <div class="header_city-wr">
          <div id="city" class="header_city">
            <div class="header_city_header1">
              <span class="select__current">{{title}}</span>
            </div>
            <div class="header_city_body">
              <div class="header_city_body_item"  v-for="(item, index) in options" :key="index" :data-value="item.value">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import filterMixin from "@/components/shared/filterMixin.js";
export default {
    mixins:[filterMixin]
}

</script>
<style scoped lang="sass">
/* @import 'filter-styles.scss'; */

.header_city
    margin-left: 10px
    position: relative
    &-choose
        display: flex
        font-size: 14px
        line-height: 17px
        color: #9E9E9E
        svg
            margin-top: 6px
    &_header 
        cursor: pointer
    &_body
        line-height: 0
        max-height: 0
        overflow: hidden 
        position: absolute
        left: 0
        right: 0
        top: 100%
        width: 100%
        transition: .2s
    &.active 
        .header_city_body
            line-height: 1.3 
            max-height: 100%      
            background-color: #ffffff
            overflow: visible
            transition: .2s
            &_item 
                background-color: #ffffff
                z-index: 99
                position: relative
</style>