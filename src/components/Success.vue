<template lang="pug">
.success-wrapper
  figure.pic(v-if="showIcon")
    img(src="@/assets/images/icon-check.svg")
  figure.pic.fail(v-else)
    img(src="@/assets/images/times-circle-regular.svg")
  .title {{title}}
  p(v-html="content")
  router-link.btn(:to="{name:routeLink}" v-if="showBtn") {{btnTxt}}
</template>

<script>
export default {
  name: "Success",
  components: {},
  props: {
    showIcon: Boolean,
    title: String,
    content: String,
    showBtn: Boolean,
    routeLink: String,
    btnTxt: String,
  },
  data() {
    return {};
  },
  computed: {},
  beforeDestroy() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.success-wrapper
  width: 100%
  min-height: calc(100vh - 252.2px)
  padding: 65px 0
  text-align: center
  box-sizing: border-box
  figure.pic
    width: 210px
    margin: auto
    &.fail
      width: 160px
      margin: 0 auto 1rem
  .title
    font-size: 1.5rem
    letter-spacing: 1.5px
    line-height: 25px
  p
    padding: 85px 0 35px
    font-size: 1rem
    line-height: 28px
    color: $gray-003
  .btn
    padding: 16px 70px
    font-size: 1.1rem
    color: $blue-001
    border: 1px solid $blue-001
    border-radius: 33px
    display: inline-block
    box-sizing: border-box
    cursor: pointer
    transition: .3s
    &:hover
      color: #fff
      background-color: $blue-001
  +rwd(540px)
    min-height: calc(100vh - 154.73px)
    padding: 35px 0
    figure.pic
      width: 160px
    .title
      font-size: 1.2rem
      // letter-spacing: 1.5px
      // line-height: 25px
    p
      padding: 45px 0 25px
      font-size: .8rem
      // line-height: 28px
    .btn
      padding: 16px 40px
      // font-size: 1.1rem
      // border-radius: 33px
</style>
