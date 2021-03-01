<template>
    <div>
        <ul class="liste">
            <li v-for="(fruit, index) in fruits" :key="index">{{fruit}}</li>
        </ul>
        <p>{{prenom()}}</p>
        <!-- <p>{{reversing()}}</p> -->
    </div>
</template>

<script>
export default {
    name: 'List',
    data(){
        return{
            fruits: ['fraise', 'banane', 'peche']
        }
    },
    /* props:['prenom'], */
    props:{
        prenom: {
            type: Function,
            required: true
        }
    },
   /*  methods: {
        reversing : function(){
            return this.prenom.split('').reverse().join('')
        }
    } */
}
</script>

<style scoped src="./List.css">

</style>