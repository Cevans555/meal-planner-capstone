import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'
import AddMeal from '../views/AddMeal.vue'
import EditMeal from '../views/EditMeal.vue'
import DeleteMeal from '../views/DeleteMeal.vue'
import AddHousehold from '../views/AddHousehold.vue'
import EditHousehold from '../views/EditHousehold.vue'
import DeleteHousehold from '../views/DeleteHousehold.vue'
import ListOfHouseholds from '../views/ListOfHouseholds'
import AddMealPlan from '../views/AddMealPlan.vue'
import ListOfMealPlan from '../views/ListOfMealPlan.vue'
import EditMealPlan from '../views/EditMealPlan.vue'



Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/addMeal",
      name: "addMeal",
      component: AddMeal,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/editMeal/:id",
      name: "editMeal",
      component: EditMeal,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/deleteMeal/:id",
      name: "deleteMeal",
      component: DeleteMeal,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/addHousehold",
      name: "addHousehold",
      component: AddHousehold,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/editHousehold/:id",
      name: "editHousehold",
      component: EditHousehold,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/deleteHousehold/:id",
      name: "deleteHousehold",
      component: DeleteHousehold,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/listOfHousehold",
      name: "listOfHousehold",
      component: ListOfHouseholds,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addMealPlan',
      name: 'addMealPlan',
      component: AddMealPlan,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/listOfMealPlan",
      name: "listOfMealPlan",
      component: ListOfMealPlan,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editMealPlan',
      name: 'editMealPlan',
      component: EditMealPlan,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
