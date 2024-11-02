<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />

    <div class="container px-6 py-12 mx-auto">
      <h1 class="mb-6 text-3xl font-semibold text-center text-gray-800">
        Home - Featured Research
      </h1>
      <h1>{{ message }}</h1>
      <h1>Logged User: {{ loggedIn }}</h1>

      <!-- Latest Research Section -->
      <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold text-gray-700">
          Latest Research
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ResearchCard
            v-for="research in latestResearch"
            :key="research.id"
            :research="research"
          />
        </div>
      </section>

      <!-- Top-Rated Research Section -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold text-gray-700">
          Top-Rated Research
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ResearchCard
            v-for="research in topRatedResearch"
            :key="research.id"
            :research="research"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/MainNavbar.vue";
import ResearchCard from "@/components/ResearchCard.vue";

export default {
  components: { Navbar, ResearchCard },
  data() {
    return {
      latestResearch: [], // Data dari API untuk riset terbaru
      topRatedResearch: [], // Data dari API untuk riset rating tertinggi
      message: "",
      loggedIn: localStorage.getItem("username"),
    };
  },
  async created() {
    try {
      const response = await fetch("/api/hello");
      const data = await response.json();
      this.message = data.message;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>
