<template>
    <div>
    <p>
        {{txt}}
    </p>
    </div>
    <!-- <List :prenom="prenom.taille"/> -->
    <List :prenom="prenom"/>
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