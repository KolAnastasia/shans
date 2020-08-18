<template>
    <client-only>
        <div class="news-slider-wr"> 
            <slick-slide
                ref="slick"
                :options="slickOptions" 
                class="slider">
                <div class="news-slider-item">
                   <img :src="getImage('sliderNews1.jpg')" alt="" />
                </div>
                <div class="news-slider-item">
                    <img :src="getImage('sliderNews1.jpg')" alt="" />
                </div>
                <div class="news-slider-item">
                    <img :src="getImage('sliderNews1.jpg')" alt="" />
                </div>  

            </slick-slide>
            <!-- <div class="slick-slider-next"> Next </div>
            <div class="slick-slider-prev"> Prev </div> -->
        </div> 
    </client-only>
</template>

<script>
export default {
    data() {
		return {
			slickOptions: {
				slidesToShow: 1,
                slidesToScroll: 1,
                dots: false, // показывать `точки`
                arrows: true // скрыть стрелки
        },

      methods: {

        next() {
            this.$refs.slick.next();
            console.log("NEXT")
        },
 
        prev() {
            this.$refs.slick.prev();
        },
 
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
 
        
      },
    };
  },
  
}

</script>

<style lang="sass" scoped>
.news-slider
    width: 100%
    &-item
        width: 100%
        position: relative
        img 
            width: 100%
    &-wr 
        width: 100%
        position: relative
        max-width: 980px
        margin: 50px 0

.news-slider-wr .slider .slick-arrow 
    position: absolute
    border: none 
    bottom: 15px 
    background: none

</style>