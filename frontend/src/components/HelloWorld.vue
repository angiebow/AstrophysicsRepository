<template>
  <div>
    <h1>Items</h1>
    <ul>
      <li v-for="item in items" :key="item._id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "../axios";

export default {
  data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("/items");
      this.items = response.data;
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
