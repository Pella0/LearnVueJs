<template>
    <div class="container nt-5">
        <h1>Notre premier formulaire</h1>
        <form >
            <div class="form-group">
                <label for="prenom">Ton prenom</label>
                <input v-on:input="toggleResult"  v-model.lazy="formData.prenom" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="txt">Ton Texte</label><br/>
                <textarea v-model.lazy="formData.txt" name="form-control" id="txt"></textarea>
            </div>

            <h3>SelectBox</h3>
            <select v-model="formData.select">
                <option v-for="(pays, index) in formData.listPays" :key="index">{{pays}}</option>
            </select>


            <h3 class="mt-3">Checkbox</h3>

            <div class="form-check">
                <input v-model="formData.checkFruits" value="fraise" id="fraise" type="checkbox" class="form-check-input">
                <label for="fraise">Fraise</label>
            </div>

            <div class="form-check">
                <input v-model="formData.checkFruits" value="banane" id="banane" type="checkbox" class="form-check-input">
                <label for="banane">banane</label>
            </div>

            <div class="form-check">
                <input v-model="formData.checkFruits" value="cacahuete" id="cacahuete" type="checkbox" class="form-check-input">
                <label for="cacahuete">cacahuete</label>
            </div>



                <button @click.prevent="sendForm" class="btn btn-primary mt-3">Envoyer les données</button>

        </form>
    </div>

    <div v-if="infoSubmit">
        <h2>Resultats</h2>
        <div class="card p-3">
            <p>Prenom : {{formData.prenom}}</p>
            <p style="white-space: pre">Texte : {{formData.txt}}</p>
            
            <p>Select Resultats : {{formData.select}}</p>
            
            
            <p>Resultat Checkbox</p>
            <ul>
                <li v-for="(fruit,index) in formData.checkFruits" :key="index">{{fruit}}</li>
            </ul>
        </div>
    </div>
</template>


<script>





export default {
    name:'Content',  
    data(){
        return {
            formData:{
                prenom: '',
                txt: '',
                checkFruits: [],
                select: '',
                listPays: ['Russie', 'France', 'Canada', 'Afrique du Sud']
                
            },
            infoSubmit: false,
        }
    },
    components: {
        
        
    },
    methods: {
        sendForm: function(){
            this.infoSubmit = true
        },
        toggleResult: function(){
            this.infoSubmit=false
        }
        
    },
    
} 

</script>



<style scoped >
    h1{
        margin-top: 100px!important;
    }
</style>