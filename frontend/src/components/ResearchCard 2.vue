<template>
  <div class="research-card">
    <h3>{{ research.title }}</h3>
    <p>{{ research.description }}</p>
    <router-link :to="`/research/${research.id}`">Read more</router-link>
  </div>
</template>

<script>
export default {
  props: {
    research: Object,
  },
};
</script>

<style scoped>
.research-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
}
</style>
