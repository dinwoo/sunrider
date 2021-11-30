<template lang="pug">
.home-wrapper
  section.banner
    figure
      img(src="@/assets/images/logo-country.png")
    .slogan-ch 百年傳承 40載起
    //- .slogan-en Century Heritage, Successor Innovation
    .timer
      .timer-title 直播倒數
      .timer-box
        template(v-if="countDownDay!='00'||countDownHour!='00'||countDownMinute!='00'")
          .timer-item
            .number {{countDownDay}}
            .unit 天
          .timer-item
            .number {{countDownHour}}
            .unit 小時
          .timer-item
            .number {{countDownMinute}}
            .unit 分鐘
        template(v-else)
          .timer-item
            .number {{countDownSecond}}
            .unit 秒
  section.intro
    .title 活動亮點
    .info
      | 仙妮蕾德2021臺灣年會即將引爆
      br
      br
      | 百年傳承 四十載起
      br
      | 新品上市 重磅登場
      br
      | 事業機會 不能錯過
      br
      br
      | 仙妮蕾德首次舉辦線上大會
      br
      | 接棒 期待 不一樣的仙妮蕾德
      br
      br
      | 凡買票、參加即可享只送不賣的超值好禮
      br
      | 誠摯邀您一同參與
    router-link.main-btn(:to="{name:'Product'}") 前往購票

</template>

<script>
import { mapState, mapActions } from "vuex";
import timer from "@/mixins/timer.js";

export default {
  name: "Home",
  components: {},
  props: {},
  mixins: [timer],
  data() {
    return {
      second: null,
    };
  },
  computed: {
    ...mapState(["isLoading", "token"]),
  },
  created() {
    this.getLoginTokenApi();
  },
  mounted() {},
  methods: {
    ...mapActions(["getCountDown"]),
    getLoginTokenApi() {
      Promise.all([this.getCountDown()])
        .then(() => {
          console.log("success");
          this.initTimer();
        })
        .catch((e) => {
          console.log(e);
          console.log("fail");
        });
    },
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.home-wrapper
  section.banner
    padding: 70px 0 50px
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
      text-align: center
    .timer
      padding-top: 97px
      .timer-title
        font-size: 1.1rem
        font-weight: bold
        text-align: center
      .timer-box
        padding-top: 25px
        text-align: center
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
