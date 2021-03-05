<template> 

  <main-header></main-header>
  <div id="nav">
    <router-link to="/">Acceuil</router-link> |
    <router-link to="/page1">Page1</router-link>

  </div>
  <router-view/> 
</template>

<script>

import Header from './components/Header/Header'

export default {
  name: 'App',
  components: { 
    MainHeader: Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
