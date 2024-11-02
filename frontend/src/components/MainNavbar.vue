<template>
  <nav
    class="fixed top-0 left-0 z-10 flex items-center justify-between w-full p-4 bg-gray-900 shadow-md"
  >
    <!-- Brand Logo -->
    <div
      class="text-xl font-semibold text-white cursor-pointer hover:text-green-400"
    >
      Astrophysics Research Repository
    </div>

    <div class="items-center font-semibold text-gray-200">
      <h1>Logged User: {{ loggedIn }}</h1>
    </div>

    <!-- Navbar Links -->
    <div class="flex items-center space-x-4">
      <router-link
        to="/"
        class="font-semibold text-gray-200 transition hover:text-green-400"
        active-class="text-green-400 border-b-2 border-green-400"
        exact-active-class="text-green-400 border-b-2 border-green-400"
      >
        Home
      </router-link>
      <router-link
        to="/dashboard"
        class="font-semibold text-gray-200 transition hover:text-green-400"
        active-class="text-green-400 border-b-2 border-green-400"
        exact-active-class="text-green-400 border-b-2 border-green-400"
      >
        Dashboard
      </router-link>
      <router-link
        to="/submit"
        class="font-semibold text-gray-200 transition hover:text-green-400"
        active-class="text-green-400 border-b-2 border-green-400"
        exact-active-class="text-green-400 border-b-2 border-green-400"
      >
        Submit Research
      </router-link>
      <router-link
        to="/login"
        class="font-semibold text-gray-200 transition hover:text-green-400"
        active-class="text-green-400 border-b-2 border-green-400"
        exact-active-class="text-green-400 border-b-2 border-green-400"
      >
        Login
      </router-link>
      <router-link
        to="/register"
        class="font-semibold text-gray-200 transition hover:text-green-400"
        active-class="text-green-400 border-b-2 border-green-400"
        exact-active-class="text-green-400 border-b-2 border-green-400"
      >
        Register
      </router-link>
      <button
        @click="handleLogout"
        v-if="loggedIn"
        to="/login"
        class="font-semibold text-gray-200 transition hover:text-green-400"
        active-class="text-green-400 border-b-2 border-green-400"
        exact-active-class="text-green-400 border-b-2 border-green-400"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
import AuthService from "../services/auth.js";
export default {
  name: "MainNavbar",
  data() {
    return {
      loggedIn: localStorage.getItem("username"),
    };
  },
  methods: {
    async handleLogout() {
      try {
        await AuthService.logout({});
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
