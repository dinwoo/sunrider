import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    ...mapState(["countDownTime"]),
    countDownDay() {
      let day = Math.floor(this.countDownTime / 60 / 60 / 24);
      return day < 10 ? "0" + day : String(day);
    },
    countDownHour() {
      let hour = Math.floor((this.countDownTime / 60 / 60) % 24);
      return hour < 10 ? "0" + hour : String(hour);
    },
    countDownMinute() {
      let min = Math.floor(((this.countDownTime / 60) % 1440) % 60);
      return min < 10 ? "0" + min : String(min);
    },
    countDownSecond() {
      let sec = Math.floor(this.countDownTime);
      return sec < 10 ? "0" + sec : String(sec);
    },
  },
  mounted() {
    //監聽瀏覽器重整及關閉前將計時器移除
    window.addEventListener("unload", this.stopTimer);
  },
  beforeDestroy() {
    //移除監聽
    window.removeEventListener("unload", this.stopTimer);
    this.stopTimer();
  },
  methods: {
    ...mapMutations({
      setCountDownTime: "SET_COUNT_DOWN_TIME",
    }),
    initTimer() {
      //設置計時器
      if (this.timer) return;
      this.timer = setInterval(this.countdown, 1000);
    },
    countdown() {
      if (this.countDownTime > 0) {
        this.setCountDownTime(this.countDownTime - 1);
      } else {
        this.stopTimer();
      }
    },
    stopTimer() {
      //移除計時器
      clearInterval(this.timer);
      this.timer = null;
    },
  },
};
