<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

// router.beforeEach((to, from, next) => {
//   if (to.meta === "canAdmin") {
//     if (store.state.user.loginUser?.role !== "admin") {
//       next();
//       return;
//     }
//   }
// });
</script>
