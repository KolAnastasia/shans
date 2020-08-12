<!-- Компонент для Фильтра-->
<template>
    <div class="filter">
        <span>{{title}}</span>
        <select :name="name" :id="name"  v-on:change="onValueChange">
            <option 
                v-for="(item, index) in options"
                :key="index" 
                :value="item.value"
               >
                    {{item.text}}
            </option>
        </select>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        options:Array, 
        name:String
    },
    methods:{
        onValueChange(event){
            let filterName =  event.target.name;
            let selectedValue = event.target.value;
            this.$emit('filterChanged', {filterName, selectedValue})
        }
    }
}
</script>
<style scoped>
    /* @import 'filter-styles.scss'; */
</style>