<template>
    <main class="container h-100">
        <section class="d-flex flex-column justify-content-evenly h-100">
            <div>
                <h1 class="text-center">Publication</h1>
            </div>
            <div class="">
                <FormPublication />
            </div>
        </section>
    </main>
</template>

<script>
import FormPublication from './../../components/FormPublication.vue'
export default {
    data(){
        return {
            message: 'Hello Vue!'
        }
    },
    
    components: {
        FormPublication
    }
}
</script>