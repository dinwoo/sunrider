<template lang="pug">
.home-wrapper
  section.banner
    figure
      img(src="@/assets/images/logo-country.png")
    .slogan-ch 百年傳承 40載起
    .slogan-en Century Heritage, Successor Innovation
    .timer
      .timer-title 直播倒數
      .timer-box
        .timer-item
          .number {{countDownDay}}
          .unit 天
        .timer-item
          .number {{countDownHour}}
          .unit 小時
        .timer-item
          .number {{countDownMinute}}
          .unit 分鐘
    .status 直播尚未開放入場
    .remark
      | 將於12/4下午2點開放入場
      br
      | 點擊以下按鈕，即可進入觀看！
    .main-btn(
      :class="{'disable': countDownTime > 0}"
      @click="goLivePage"
    ) 開始觀看
</template>

<script>
import { mapState, mapActions } from "vuex";
import timer from "@/mixins/timer.js";

export default {
  name: "WaitLive",
  components: {},
  props: {},
  mixins: [timer],
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading", "countDownTime"]),
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(["checkLiveStatus"]),
    init() {
      if (this.token == "") {
        this.lineLogin(process.env.VUE_APP_LIFF_ID_WAITLIVE)
          .then(() => {
            this.checkLiveStatusApi();
            console.log("success");
          })
          .catch(() => {
            console.log("error");
          });
      } else {
        this.checkLiveStatusApi();
      }
    },
    checkLiveStatusApi() {
      this.checkLiveStatus()
        .then((res) => {
          console.log("success");
          if (!res.isBinding) {
            this.$router.push({ name: "Exchange" });
          } else if (res.countdownSeconds <= 0) {
            this.$router.push({ name: "Live" });
          } else {
            this.initTimer();
          }
        })
        .catch((e) => {
          console.log(e);
          if (e == "userVerificationError") {
            this.init();
          }
          console.log("fail");
        });
    },
    goLivePage() {
      if (this.countDownTime <= 0) {
        this.$router.push({ name: "Live" });
      } else {
        alert("直播尚未開始！");
      }
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
    .disable
      color: #999
      border: 1px solid #ccc
      background-color: #eee
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
