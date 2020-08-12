<template>
    <div class="catalog_item">
        <div class="catalog_item_img"> 
            <img src="../assets/catalog1.png"/>
        </div>
        <div class="catalog_item_title"> 
            Глифошанс Супер, ВР
        </div>
        <div class="catalog_item_desc"> 
            Системный гербицид сплошного действия для борьбы с широким спектром сорняков
        </div>
        <div class="catalog_item_act-subst"> 
            <span> Действующее вещество: </span>
                540 г/л глифосата (калийная соль)
        </div>
        <div class="catalog_icons">
            <div class="catalog_mark">
                <img src="../assets/gerbicide.png"/>
            </div>
            <div class="catalog_fav"> 
                <img src="../assets/cat-favourite.svg"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // props: {
    //     title:String,
    //     desc:String,
    //     activeSubstance:String,
    //     typeIconUrl:String,
    //     photoUrl:String,
    //     type:String
    // }

}

</script>

<style lang="sass" scoped>

    .catalog
        padding: 100px 0
        &_item 
            max-width: 330px
            border: 1px solid #E5E5E5
            padding: 30px
            box-sizing: border-box
            &_img 
                margin-bottom: 30px
                text-align: center
                img 
                    width: 100%
                    max-width: 127px
            &_title
                font-weight: bold
                font-size: 24px
                line-height: 36px
                margin-bottom: 10px
            &_desc
                font-size: 14px
                line-height: 24px
                color: #9E9E9E
                margin-bottom: 25px
</style>
