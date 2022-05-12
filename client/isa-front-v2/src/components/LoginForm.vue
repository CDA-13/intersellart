<template>
  <div class="container">
    <div class="card mt-5">
      <div class="card-body">
        <form>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="userEmail"
                  placeholder="email"
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
  name: "LoginForm",
  data() {
    return {
      event: {
        id: 5928101,
        category: "animal welfare",
        title: "Cat Adoption Day",
        description: "Find your new feline friend at this event.",
        location: "Meow Town",
        date: "January 28, 2022",
        time: "12:00",
        petsAllowed: true,
        organizer: "Kat Laydee",
      },
    }
  },
}
</script>
