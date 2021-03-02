<template>
    <div class="header-top">
        <p>
            {{titre}}
        </p>
    </div>
</template>

<script>
import {emitter} from '../main'
 
export default {
    name: 'Header',
    data(){
        return {
            titre: 'Mont titre de base'
        }
    },
    created(){
        emitter.on('changeTitle', (data) =>{
            this.titre = data
        } )
    } 
}
</script>


<style scoped src="./Header.css">

</style>