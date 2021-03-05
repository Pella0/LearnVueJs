<template>
    <div class="header-top">
        <ul class="nav">
            <li class="btn btn-primary btn-nav">
                <router-link to="/" exact>Acceuil</router-link>
            </li>
            <li class="btn btn-primary btn-nav">
                <router-link to="/page1">Page1</router-link>
            </li>
            <li class="btn btn-primary btn-nav">
                <router-link to="/page2">Page2</router-link>
            </li>
            <li class="btn btn-primary btn-nav">
                <router-link to="/blogspot/:id">BlogSpot</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

 
export default {
    name: 'Header',
    data(){
        return {
            titre: 'La To-Do List'
        }
    },
    
}
</script>


<style scoped src="./Header.css">

</style>