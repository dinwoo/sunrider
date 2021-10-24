<template lang="pug">
.default-wrapper
  Header
  .default-container
    router-view
  Footer
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Default",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.default-wrapper
  width: 100%
  .default-container
    width: 100%
  +rwd(768px)
    .default-container

article
  padding-top: 82px
  +rwd(768px)
    padding-top: 65px
</style>
