<template>
    <div class="container">
        <tabs>
            <tab :name="docGroup.parentName" v-for="(docGroup, index) in docGroups" :key="index" :selected="docGroup.selected">
                <certificates-item v-for="(item, index) in docGroup.items" :key="index"
                    :link="item.link"
                    :name="item.name" 
                    :number="item.number"
                />
            </tab>
        </tabs>
<!--         
        <div class="certificates_item"
            v-for="(item, index) in certificatesDoc"
            :key="index"
        >
            <certificates-item
            :link="item.link"
             :name="item.name" 
             :number="item.number"
            />
        </div> -->
    </div>
</template>

<script>
import certificatesItem from "@/components/certificates/certificatesItem.vue";
import tabs from "@/components/tabs/tabs.vue";
import tab from "@/components/tabs/tab.vue";
import axios from "axios"
export default {
    components: {
        certificatesItem,
        tabs,
        tab
    },
    data: function() {
        return {
            docGroups : []
        }
    },
    mounted(){
        axios.get('/certificates.json').then(response => {
            this.docGroups = response.data;
            this.docGroups.forEach(function(docGroup){
                let i=1;
                docGroup.selected = false;
                docGroup.items.forEach(function(doc){
                    doc.number = i;
                    i++;
                })
            });
            this.docGroups[0].selected = true;
        });
    }
    
}

</script>

<style lang="sass" scoped>

</style>
