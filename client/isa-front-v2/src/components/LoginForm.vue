<template>
  <div class="container">
    <div class="card mt-5">
      <div class="card-body">
        <form @submit.prevent="onSubmit">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="userEmail"
                  placeholder="email"
                  v-model="email"
                />
                <label for="userEmail">Email</label>
                <a href="#" class="btn btn-link"> S’inscrire</a>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="userPassword"
                  placeholder="password"
                  v-model="password"
                />
                <label for="userEmail">Mot de passe</label>
                <a href="#" class="btn btn-link">Mot de passe oulié ?</a>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <a href="#" class="btn btn-danger"> Annuler</a>
            </div>
            <div class="col d-flex justify-content-end">
              <a href="#" class="btn btn-primary"> Connexion</a> <br />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      pseudo: "",
      name: "LoginForm",
    }
  },
  methods: {
    onSubmit(){
      let formData = new FormData()
      formData.append("pseudo", this.pseudo)
      formData.append("email", this.email)
      const response = await axios.post("/api/user/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.status != 500) {
        alert(response.message)
      } else {
        alert("Votre êtes connecté!")
      }
    }
  }
}
</script>
