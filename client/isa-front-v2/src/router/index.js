import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/newPublication",
    name: "New Publication",
    component: FormPublication,
  },
  {
    path: "/login",
    name: "Connexion",
    component: LoginForm,
  },
  {
    path: "/suscribe",
    name: "Inscription",
    component: UserForm,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
