<template lang="pug">
.home-layout
  Header
  router-view
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "HomeLayout",
  components: {
    Header,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"
</style>
