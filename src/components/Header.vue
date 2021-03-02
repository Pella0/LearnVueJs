<template>
    <div class="header-top">
        <p>
            {{titre}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            titre: 'Mont titre de base'
        }
    }
}
</script>


<style scoped src="./Header.css">

</style>