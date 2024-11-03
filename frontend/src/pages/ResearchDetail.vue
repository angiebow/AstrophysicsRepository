<template>
  <div>
    <Navbar />
    <div class="research-detail">
      <h1>{{ research.title }}</h1>
      <p>{{ research.description }}</p>
      <button @click="downloadDataset">Download Dataset</button>
      <section>
        <h2>Comments & Ratings</h2>
        <div v-for="comment in research.comments" :key="comment.id">
          <p>
            <strong>{{ comment.user }}:</strong> {{ comment.text }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      research: {}, // Data riset akan didapatkan dari API
    };
  },
  methods: {
    downloadDataset() {
      // Implementasi fungsi download dataset
    },
  },
};
</script>

<style scoped>
.research-detail {
  padding: 2rem;
}
</style>
