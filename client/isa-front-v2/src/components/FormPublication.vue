<template>
    <div class="container-fluid bg-light shadow-sm">
        <div class="mb-3">
            <label for="InputTitle" class="form-label">Titre</label>
            <input type="text" v-model="title"  class="form-control" id="InputTitle" name="title" placeholder="Titre">
            <div v-if="errorTitle" class="alert alert-danger" role="alert">
                Le titre doit contenir plus de 3 caractères.
            </div>
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Image</label>
            <input class="form-control" type="file" id="formFile" name="image" @change="handleFileUpload" ref="file">
            <div v-show="errorImage" class="alert alert-danger" role="alert">
                Le type du fichier doit être une image.
            </div>
        </div>
        <div class="mb-3">
            <label for="TextAreaDescription" class="form-label">Description</label>
            <textarea class="form-control" id="TextAreaDescription" name="description" rows="5" v-model="description"></textarea>
            <div v-if="errorDescription" class="alert alert-danger" role="alert">
                La description doit contenir plus de 3 caractères.
            </div>
        </div>
        <div class="text-end">
            <button class="btn btn-primary m-2" @click="onSubmit">Publier</button>
        </div>
        <div v-if="errorCall" class="alert alert-danger" role="alert">
            Erreur serveur.
        </div>
    </div>
</template>


<script>

import axios from 'axios'
export default {
    data(){
        return {
            title: '',
            description: '',
            image: '',
            errorTitle:false,
            errorDescription: false,
            errorImage: false,
            errorCall: false
        }
    },
    props: ['propsTitle', 'propsDescription'],
    created(){
        this.title = this.propsTitle === undefined ?  '' : this.propsTitle
        this.description = this.propsDescription === undefined ? '' : this.propsDescription
    },
    methods: {
        handleFileUpload(e){
            console.log(this.$refs)
            this.image = this.$refs.file.files[0]
        },
        async onSubmit(){
            let goodExtension = ['jpg', 'jpeg', 'png', 'gif']
            
            this.errorTitle = this.title.length < 3 ? true : false
            this.errorDescription = this.description.length < 3 ? true : false

            if(!this.image){
                this.errorImage = true
            }else{
                console.log(this.image)
                let extension = this.image.name.split('.').pop()
                if(goodExtension.indexOf(extension) === -1){
                    this.errorImage = true
                }else{
                    this.errorImage = false
                }
            }

            if(!this.errorTitle && !this.errorDescription){
                try{
                    let formData = new FormData()
                    formData.append('title', this.title)
                    formData.append('description', this.description)
                    formData.append('image', this.image)
                    const response = await axios.post('/api/publication/createpub', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                   
                }catch(error){
                    this.errorCall = true
                }
            }
        }
    }
}
</script>