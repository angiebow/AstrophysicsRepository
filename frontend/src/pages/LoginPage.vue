<template>
  <Navbar />
  <div class="flex items-center justify-center min-h-screen p-12 bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800">
        Masuk ke dalam akun Anda
      </h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-600"
            >Username</label
          >
          <input
            v-model="username"
            type="text"
            id="username"
            required
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan username..."
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-600"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            required
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan password..."
          />
        </div>

        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Login
        </button>
      </form>

      <p class="text-sm text-center text-gray-600">
        Belum punya akun?
        <router-link to="/register" class="text-blue-600 hover:underline"
          >Daftar</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/MainNavbar.vue";
import AuthService from "../services/auth.js";

export default {
  components: { Navbar },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await AuthService.login({
          username: this.username,
          password: this.password,
        });
        console.log(response.data);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
