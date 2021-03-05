<template>
<div>
    <h1>Les articles de blog</h1>
    <hr>

    <ul>

        <li v-for="(articl, index) in allArticles" :key="index">
            <router-link :to="`/blogpost/${index +1}`">
                <div class="card m-2">
                    <h3>{{articl.title}}</h3>
                </div>
            </router-link>
        </li>


    </ul>
</div>
</template>

<script>

import axios from 'axios'

export default {
    name:'Page1',
    data(){
        return{
            allArticles: []
        }
    },
    created(){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res);
            for(const blogPost of res.data)
            this.allArticles.push(blogPost)
        })
    }
}
</script>


<style scoped>

</style>