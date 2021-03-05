<template>
<div>
    <h1>Voici  la PAGE 2</h1>
    <div @click="goToHome" class="btn btn-primary">Retour à l'acceuil</div>
</div> 
</template>

<script>
export default {
    name:'Page2',
    methods:{
        goToHome: function(){
            this.$router.push('/')
        }
    }
}
</script>


<style scoped>

</style>