import Vue from 'vue';

//import file by name

Vue.mixin({
    methods: {
      getImage(fileName) {
        if (fileName != undefined)
          return require(`@/assets/${fileName}`);
      }
    }
})