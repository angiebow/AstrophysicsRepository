<template>
  <div id="app" class="font-sans text-center text-gray-800">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
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
