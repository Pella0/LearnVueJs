<template>
    <div class="container nt-5">
        <h1>Notre premier formulaire</h1>
        <form >
            <div class="form-group">
                <label for="prenom">Ton prenom</label>
                <input v-model="prenom" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="txt">Ton prenom</label><br/>
                <textarea v-model="txt" name="form-control" id="txt"></textarea>
            </div>
            <h2>Resultats</h2>
            <div class="card p-3">
                <p>Prenom : {{prenom}}</p>
                <p>Texte : {{txt}}</p>
            </div>
        </form>
    </div>
</template>


<script>


/* import Texte1 from './Text/Texte1'
import Texte2 from './Text/Texte2'
import Modale from './Modale/Modale.vue' */
/* import List from './List/List.vue' */
/* import axios from 'axios' */


export default {
    name:'Content',  
    data(){
        return {
            prenom: '',
            txt: ''
        }
    },
    /* components: {
        List,
        Texte2,
        Texte1,
        Modale 
        
    }, */
    methods: {
        
        
    },
    /* mounted(){
        axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then(res => {
            console.log(res);
            this.urlImg = res.data[0].url
        })
    } */
} 

</script>



<style scoped >
    h1{
        margin-top: 100px!important;
    }
</style>