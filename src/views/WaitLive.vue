<template lang="pug">
.home-wrapper
  section.banner
    figure
      img(src="@/assets/images/logo-country.svg")
    .slogan-ch 百年傳承 40載起
    .slogan-en Century Heritage, Successor Innovation
    .timer
      .timer-title 直播倒數
      .timer-box
        .timer-item
          .number 05
          .unit 天
        .timer-item
          .number 10
          .unit 小時
        .timer-item
          .number 30
          .unit 分鐘
    .status 直播尚未開放入場
    .remark
      | 將於12/4下午2點開放入場
      br
      | 點擊以下按鈕，即可進入觀看！
    router-link.main-btn(:to="{name:'Live'}") 開始觀看
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  props: {},
  mixins: [],
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading", "api"]),
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

.home-wrapper
  section.banner
    padding: 70px 0 50px
    text-align: center
    figure
      width: 420px
      margin: 0 auto 16px
    .slogan-ch
      font-size: 2.1rem
      color: $green-001
      letter-spacing: 2.1px
      text-align: center
    .slogan-en
      font-size: 1.1rem
      letter-spacing: 1.15px
      color: $green-001
    .timer
      padding-top: 97px
      .timer-title
        font-size: 1.1rem
        font-weight: bold
      .timer-box
        padding-top: 25px
        .timer-item
          margin: 0 20px
          +dib
          .number
            font-size: 3.5rem
            color: $red-001
            +dib
          .unit
            padding-left: 20px
            font-size: 1rem
            color: $gray-003
            +dib
    .status
      font-size: 0.9rem
      line-height: 28px
      color: $red-001
    .remark
      margin-top: 50px
      font-size: 1rem
      line-height: 28px
      color: $gray-003
    +rwd(540px)
      padding: 35px 0 25px
      figure
        width: 300px
        // margin: 0 auto 16px
      .slogan-ch
        // font-size: 2.1rem
        // letter-spacing: 2.1px
      .slogan-en
        // font-size: 1.1rem
        // letter-spacing: 1.15px
      .timer
        padding-top: 50px
        .timer-title
          // font-size: 1.1rem
        .timer-box
          padding-top: 15px
          .timer-item
            margin: 0 10px
            .number
              font-size: 2.5rem
            .unit
              padding-left: 10px
              // font-size: 1rem
  section.intro
    padding: 35px 0 75px
    background-color: $gray-004
    text-align: center
    .title
      font-size: 1.1rem
      font-weight: bold
    .info
      padding: 25px 0 60px
      color: $gray-003
</style>
