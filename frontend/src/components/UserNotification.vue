<template>
  <div>
    <Navbar />
    <h1>Home - Featured Research</h1>
    <section>
      <h2>Latest Research</h2>
      <div class="research-grid">
        <ResearchCard
          v-for="research in latestResearch"
          :key="research.id"
          :research="research"
        />
      </div>
    </section>
    <section>
      <h2>Top-Rated Research</h2>
      <div class="research-grid">
        <ResearchCard
          v-for="research in topRatedResearch"
          :key="research.id"
          :research="research"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/MainNavbar.vue";
import ResearchCard from "@/components/ResearchCard.vue";

export default {
  components: { Navbar, ResearchCard },
  data() {
    return {
      latestResearch: [], // Isi data ini dengan request API untuk riset terbaru
      topRatedResearch: [], // Isi data ini dengan request API untuk riset rating tertinggi
    };
  },
};
</script>

<style scoped>
.research-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
