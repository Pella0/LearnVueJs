<template>
    <div class="container nt-5">
        <h1>Entrez des taches à faire</h1>
        <form>
            <label for="action">Action</label>
            <input v-model="formData.tache" type="text" id="action" class="form-control">

        <button @click.prevent='creationItem' class="btn-btn-primary mb-3">Creer un tache</button>
        </form>

        <ul>
            <li v-for="(taches, index) in tableauTaches" :key="index">
                <Item :id="index" :tache="taches" :suppression="suppression"></Item>
            </li>
        </ul>
   
    </div>


</template>


<script>

import Item from './Item/Item'



export default {
    name:'Content',  
    data(){
        return {
          formData: {
              tache: ''
          },
          tableauTaches: ['javaScript', 'Vue', 'Python', 'React']  
        }
    },
    components: {
        Item
        
    },
    methods: {
        creationItem: function() {
            this.tableauTaches.push(this.formData.tache)
            this.formData.tache=''
        },
        suppression: function(e){
            console.log(e.target.parentNode.id)
            /* e.target.parentNode.id  est l'endroit du tableau && 1 est le nombre d'element que l'on veut retirer */
            this.tableauTaches.splice(e.target.parentNode.id,1) 
        }
        
    },
    
} 

</script>



<style scoped >
    h1{
        margin-top: 100px!important;
    }
    ul{
        list-style-type: none;
        padding:0;
    }
</style>