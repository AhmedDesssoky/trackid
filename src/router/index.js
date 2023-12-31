import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/Signup.vue";
import LoginPage from "../views/Login.vue";
import ErrPage from "../views/ErrPage.vue";
import MainPage from "../views/Main.vue";
import MissingPerson from "../views/MissingPerson.vue";
import SearchMissing from "../views/SearchMissing.vue";
import ContactUs from "../views/ContactUs";
import Aboutus from "../views/Aboutus";
import ThePerson from "../views/ThePerson";
import ThePersonPage from "../views/ThePerson";
import updateMissing from "../components/MissingPerson/UpdateMissing.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/thepersonpage",
    name: "ThePersonPage",
    component: ThePersonPage,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/missing-person",
    name: "MissingPerson",
    component: MissingPerson,
  },
  {
    path: "/search-person",
    name: "SearchMissing",
    component: SearchMissing,
  },
  {
    path: "/Aboutus",
    name: "Aboutus",
    component: Aboutus,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/ThePerson",
    name: "ThePerson",
    component: ThePerson,
  },
  {
    path: "/update-missing",
    name: "updateMissing",
    component: updateMissing,
  },

  // stays last
  {
    path: "/:catchAll(.*)",
    name: "ErrPage",
    component: ErrPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.params.pageTitle !== undefined) {
    document.title = `${to.name} | ${to.params.pageTitle} | ${process.env.VUE_APP_TITLE} `;
  } else {
    if (to.name == null) {
      document.title = `unknown page | ${process.env.VUE_APP_TITLE}`;
    } else {
      document.title = `${to.name} | ${process.env.VUE_APP_TITLE} `;
    }
  }

  next();
});

export default router;
