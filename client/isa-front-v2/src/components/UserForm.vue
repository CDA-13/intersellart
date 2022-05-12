<template>
  <div class="container">
    <div class="card mt-5">
      <div class="card-body">
        <h1 class="card-title">Inscription au site</h1>

        <form @submit.prevent="onSubmit">
          <div class="row">
            <div class="col">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="userLastName"
                  placeholder="Nom de famille"
                  v-model="lastname"
                  required
                />
                <label for="userLastName">Nom</label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="userFirstName"
                  placeholder="Prénom"
                  v-model="firstname"
                  required
                />
                <label for="userFirstName">Prénom</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="userEmail"
                  placeholder="email"
                  v-model="email"
                  required
                />
                <label for="userEmail">Email</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="emailConfirm"
                  placeholder="email"
                  v-model="emailConfirm"
                  required
                />
                <label for="userPseudo">Confirmation de l’email</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="userPseudo"
                  placeholder="pseudo"
                  v-model="pseudo"
                  required
                />
                <label for="userPseudo">Mon Pseudo d’artiste</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="userPassword1"
                  placeholder="password"
                  v-model="password"
                  required
                />
                <label for="userPassword1">Mot de passe</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="userPassword2"
                  placeholder="password"
                  v-model="passwordConfirm"
                  required
                />
                <label for="userPassword2">Confirmer votre mot de passe</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <a href="#" class="btn btn-danger"> Annuler</a>
            </div>
            <div class="col d-flex justify-content-end">
              <button class="btn btn-primary" type="submit">Envoyer</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      pseudo: "",
      email: "",
      emailConfirm: "",
      password: "",
      passwordConfirm: "",
      lastname: "",
      firstname: "",
    }
  },
  methods: {
    async onSubmit() {
      let formData = new FormData()
      formData.append("pseudo", this.pseudo)
      formData.append("email", this.email)
      formData.append("emailConfirm", this.emailConfirm)
      formData.append("password", this.password)
      formData.append("passwordConfirm", this.passwordConfirm)
      formData.append("lastname", this.lastname)
      formData.append("firstname", this.firstname)
      const response = await axios.post("/api/user/signUp", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.status != 500) {
        alert(response.message)
      } else {
        alert("Votre compte Artiste a bien été créé. Bienvenue!")
      }
    },
  },
}
</script>
