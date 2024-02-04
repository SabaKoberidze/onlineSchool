<script setup lang="ts">
//import { RouterView,  useRouter, useRoute} from "vue-router";
import { onMounted} from "vue";
//import { logInState } from "./stores/auth";
import navBar from './components/navBar.vue'
//const router = useRouter();
//const route = useRoute();
//const auth = logInState();
onMounted(async () => {
  // await router.isReady();
  // await auth.authenticate();
  // if (route.name === "login") {
  //   router.push(route.query.redirect || "/");
  // }
});
</script>

<template>
  <navBar msg="miqaByte" v-if="!$route.meta.hideNavbar"/>
  <router-view></router-view>
</template>

<style scoped>

</style>
