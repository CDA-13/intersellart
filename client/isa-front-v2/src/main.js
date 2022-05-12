import { createApp } from "vue"
import App from "./App.vue"
import { createRouter, createWebHistory } from "vue-router"
import FormPublication from "./components/FormPublication.vue"
import LoginForm from "./components/LoginForm.vue"
import UserForm from "./components/UserForm.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
  ],
})

createApp(App).use(router).mount("#app")
