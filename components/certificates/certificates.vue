<template>
    <div class="container">
        <div class="certificates_item"
            v-for="(item, index) in certificatesDoc"
            :key="index"
        >
            <app-certificatesItem
            :link="item.title"
             :name="item.name" 
            />
        </div>
    </div>
</template>

<script>
import certificatesItem from "@/components/certificates/certificatesItem.vue";
import axios from "axios"
export default {
    components: {
        certificatesItem
    },
    data: function() {
        return {
            certificatesDoc : []
        }
    },
    mounted(){
        axios.get('/certificates.json').then(response => {
            this.certificatesDoc = response.data
        });
    }
    
}

</script>

<style lang="sass" scoped>

</style>
