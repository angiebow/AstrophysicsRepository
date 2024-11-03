<template>
  <div>
    <Navbar />
    <h1 class="m-8">Dashboard</h1>
    <section>
      <h2>Your Submissions</h2>
      <div v-for="research in userResearch" :key="research.id">
        <h3>{{ research.title }}</h3>
        <router-link :to="`/research/${research.id}`">Edit</router-link>
      </div>
    </section>
    <section>
      <h2>Notifications</h2>
      <Notification
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </section>
  </div>
</template>

<script>
import Notification from "@/components/UserNotification.vue";
import Navbar from "@/components/MainNavbar.vue";

export default {
  components: { Notification, Navbar },
  data() {
    return {
      userResearch: [], // Data riset pengguna dari API
      notifications: [], // Data notifikasi dari API
    };
  },
};
</script>

<style scoped>
section {
  margin-bottom: 2rem;
}
</style>
