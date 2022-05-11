<template>
  <header>
    <div class="header">
      <nav
        class="
          navbar navbar-expand-lg navbar-light
          bg-light
          d-flex
          justify-content-between
        "
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ISA</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex align-items-end" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: 100px"
            >
              <li class="nav-item"> 
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
            </ul>
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: 100px"
            >
              <li class="nav-item">
                <button type="button" class="btn btn-light">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Se connecter</a
                  >
                </button>
                <button type="button" class="btn btn-light">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Se déconnecter</a
                  >
                </button>
              </li>
            </ul>
            <form class="d-flex align-self-end ml-5">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Rechercher une oeuvre..."
                aria-label="Search"
              />
              <button class="btn btn-outline-dark ml-1" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div class="d-flex align-items-center flex-column mt-5">
        <h1 class="text-white mb-5">InterSellArt</h1>
        <h3 class="text-white">Create, Buy, Sell</h3>
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
</style>