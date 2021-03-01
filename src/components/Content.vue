<template>
    <div class="container nt-5">
    <p>
        {{txt}}
    </p>
    
    <!-- <List :prenom="prenom.taille"/> -->
    <List :prenom="prenom"/>
    </div>
</template>

<script>

import List from './List/List.vue'

export default {
    name:'Content',  
    data(){
        return {
            txt: 'je suis le contenu',
            /* prenom: {
                taille: 188 
            } */
            /* prenom: ['Fraise', 'banane'] */
            prenom: function(){
                console.log('Hello depuis le parents')
            }
        }
    },
    components: {
        List
    },
}
</script>



<style scoped >
</style>