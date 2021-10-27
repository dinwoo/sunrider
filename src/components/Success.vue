<template lang="pug">
.success-wrapper
  figure.pic
    img(src="@/assets/images/icon-check.svg")
  .title {{title}}
  p(v-html="content")
  router-link.btn(:to="{name:'Ticket'}" v-if="showBtn") 前往查看票券序號
</template>

<script>
export default {
  name: "Success",
  components: {},
  props: {
    title: String,
    content: String,
    showBtn: Boolean,
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
</style>
