<template lang="pug">
footer
  .copyright SUNRIDER 2021 All Rights Reserved.
  .link-box
    a.link(href="https://sunrider.com.tw/privacy-policy/" target="_blank") 隱私權政策
    p |
    a.link(href="https://sunrider.com.tw/terms-conditions/" target="_blank") 使用條款
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
      color: #fff
      +dib
  +rwd(540px)
    padding: 15px 0
    .copyright
    .link-box
      padding-top: 10px
      .link,p
        margin: 0 15px
</style>
