<template>
    <div>
    <h1>Le post numér {{id}}</h1>
    <div>
        <h2>{{oneArticl.title}}</h2>
        <br>
        <p>
            {{oneArticl.body}}
        </p>
    </div>
    
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Post',
    data(){
        return{
            id: this.$route.params.id,
            oneArticl:[]
        }
    },
    mounted(){
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(res=>{
            this.oneArticl = res.data
        })
    }
}
</script>


<style scoped>

</style>