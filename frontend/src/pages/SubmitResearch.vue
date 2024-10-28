<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <Navbar />

    <!-- Page Title -->
    <h1 class="p-24 text-3xl font-bold text-center text-gray-800">
      Submit New Research
    </h1>

    <!-- Form -->
    <form
      @submit.prevent="submitResearch"
      class="max-w-lg p-8 mx-auto space-y-6 bg-white rounded-lg shadow-lg"
    >
      <!-- Title Field -->
      <div>
        <label for="title" class="block mb-1 font-semibold text-gray-700"
          >Title</label
        >
        <input
          type="text"
          id="title"
          v-model="title"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
      </div>

      <!-- Description Field -->
      <div>
        <label for="description" class="block mb-1 font-semibold text-gray-700"
          >Description</label
        >
        <textarea
          id="description"
          v-model="description"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          rows="5"
        ></textarea>
      </div>

      <!-- Tags Field -->
      <div>
        <label for="tags" class="block mb-1 font-semibold text-gray-700"
          >Tags</label
        >
        <input
          type="text"
          id="tags"
          v-model="tags"
          placeholder="e.g., black holes, galaxy formation"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
      </div>

      <!-- File Upload Field -->
      <div>
        <label for="file" class="block mb-1 font-semibold text-gray-700"
          >Upload File</label
        >
        <input
          type="file"
          id="file"
          @change="handleFileUpload"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full py-2 font-semibold text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/MainNavbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      title: "",
      description: "",
      tags: "",
      file: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    submitResearch() {
      // Logika untuk submit riset ke backend
    },
  },
};
</script>
