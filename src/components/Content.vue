<template>
    <div class="container nt-5">
        <h1>{{title}}</h1>
 <!--    <p>
        {{txt}}
    </p> -->
    
    <!-- <List :prenom="prenom.taille"/> -->
    <!-- <List :prenom="prenom"/> -->
    <!-- v-on:changeTitle="changementTitle($event) -->
    <!-- <List :myArr="myArr" :txt="txt">
        <p>Envoyez</p>
        <template v-slot:info>
            <h1>Le contenu du slot nommé</h1>
        </template>
    </List> -->
    <!-- <List :myArr="myArr" :txt="txt"/> -->
            <div class="btn btn-outline-primary mr-2" @click='toggleOng1'>Onglet 1</div>
            <div class="btn btn-outline-primary" @click='toggleOng2'>Onglet 2</div>
            
            <div class="card mb-5" v-if="toggle1">
                <Texte1 class="p-5"/>
            </div>
            <div class="card mb-5" v-if="toggle2">
                <Texte2 class="p-5"/>
            </div>
    </div>
</template>

<script>


import Texte1 from './Text/Texte1'
import Texte2 from './Text/Texte2'
/* import List from './List/List.vue' */

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
            title: 'Je suis le titre',
            toggle1: true,
            toggle2: false
        }
    },
    components: {
        /* List */
        Texte2,
        Texte1
    },
    methods: {
     /* changementTitle: function(nwTitle){
            this.title = nwTitle;
        }  */
        toggleOng1: function(){
            this.toggle1 = true
            this.toggle2= false
        },
        toggleOng2: function(){
            this.toggle1 = false
            this.toggle2= true
        }     
    }
} 

</script>



<style scoped >
    h1{
        margin-top: 100px!important;
    }
</style>