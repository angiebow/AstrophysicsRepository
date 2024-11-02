<template>
  <Navbar />
  <div class="flex items-center justify-center min-h-screen p-12 bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800">
        Daftar Akun Baru
      </h2>
      <form @submit.prevent="handleRegister" class="space-y-4">
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
          <label for="email" class="block text-sm font-medium text-gray-600"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
            required
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Masukkan email..."
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
          Daftar
        </button>
      </form>

      <p class="text-sm text-center text-gray-600">
        Sudah punya akun?
        <router-link to="/login" class="text-blue-600 hover:underline"
          >Masuk</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/MainNavbar.vue";
import axios from "axios";

export default {
  components: { Navbar },
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post("/api/register", {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
