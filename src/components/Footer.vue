<template lang="pug">
footer
  .copyright SUNRIDER 2021 All Rights Reserved.
  .link-box
    .link 隱私權政策
    p |
    .link 使用條款
</template>

<script>
export default {
  name: "Footer",
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

footer
  padding: 30px 0
  color: #fff
  background-color: #363636
  text-align: center
  .copyright
    opacity: .2
  .link-box
    padding-top: 20px
    .link,p
      margin: 0 30px
      +dib
</style>
