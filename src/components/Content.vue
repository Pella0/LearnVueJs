<template>
    <div class="container nt-5">
        <h1>{{title}}</h1>
 <!--    <p>
        {{txt}}
    </p> -->
    
    <!-- <List :prenom="prenom.taille"/> -->
    <!-- <List :prenom="prenom"/> -->
    <!-- v-on:changeTitle="changementTitle($event) -->
    <List :myArr="myArr" :txt="txt" />
    <!-- <List :myArr="myArr" :txt="txt"/> -->

    </div>
</template>

<script>


import List from './List/List.vue'

export default {
    name:'Content',  
    data(){
        return {
           /*  txt: 'je suis le contenu', */
            /* prenom: {
                taille: 188 
            } */
            /* prenom: ['Fraise', 'banane'] */
            /* prenom: function(){
                console.log('Hello depuis le parents')
            } */
            myArr: [
                {titre: 'Inception', date: 2010},
                {titre: 'Ace Ventura', date: 1994},
                {titre: 'Kamoulox', date: 2005},
            ],
            txt:'Hello World',
            title: 'Je suis le titre'
        }
    },
    components: {
        List
    },
    methods: {
     /* changementTitle: function(nwTitle){
            this.title = nwTitle;
        }  */
        
    }
} 

</script>



<style scoped >
    h1{
        margin-top: 100px!important;
    }
</style>