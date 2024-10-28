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
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
};
</script>
