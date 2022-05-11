<template>
  <header>
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">InterSellArt</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
                        <button type="button" class="btn btn-light">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Se connecter</a
                  >
                </button>
      </li>      
      <li class="nav-item">
                        <button type="button" class="btn btn-light">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Se déconnecter</a
                  >
                </button>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Rechercher une oeuvre..." aria-label="Search">
      <button class="btn btn-outline-secondary my-2 my-sm-0 mr-2" type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
</nav>
      <div class="d-flex justify-content-center align-items-center flex-column title">
        <h1 class="text-white mb-5 display-1">InterSellArt</h1>
        <h3 class="text-white display-5">Create, Buy, Sell</h3>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout",
};
</script>

<style scoped>
.header {
  background-size: cover;
}

header {
  background-image: url("../assets/img/imgisa.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
}

.title {
  height: 100vh;
}

h1 {
  text-shadow: 2px 2px 3px black;
  font-weight: 500;
}

h3 {
    text-shadow: 2px 2px 3px black;
}
</style>