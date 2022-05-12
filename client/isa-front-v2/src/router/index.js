import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import PublicationCreate from "./views/publication/PublicationCreate.vue"
import LoginForm from "./components/LoginForm.vue"
import UserForm from "./components/UserForm.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/newPublication",
    name: "New Publication",
    component: PublicationCreate,
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
