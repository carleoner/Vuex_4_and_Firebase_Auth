<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<!-- https://github.com/iamshaunjp/Vuex-4-Firebase-Auth/tree/lesson-1 -->

<!-- commends: -->
<!-- npm install -->

<script>
import Navbar from "./components/Navbar";

export default {
  components: { Navbar },
};
</script>
