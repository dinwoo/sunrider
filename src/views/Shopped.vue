<template lang="pug">
.shopped-wrapper
  figure.pic
    img(src="@/assets/images/icon-check.svg")
  .title 完成購票
  p
    | 3秒後自動跳轉查看票券序號
    br
    | 若未跳轉請點擊以下按鈕
  router-link.btn(:to="{name:'Ticket'}") 前往查看票券序號

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Shopped",
  components: {},
  props: {},
  mixins: [],
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions([""]),
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.shopped-wrapper
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
