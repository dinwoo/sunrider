import { mapState, mapActions } from "vuex";
import liff from "@line/liff";

export default {
  computed: {
    ...mapState(["token", "countDownTime"]),
  },
  methods: {
    ...mapActions(["getLoginToken"]),
    compileFilePath(file) {
      return require(`@/assets/images/${file}`);
    },
    verifyPhone(phone) {
      const phoneRules = /^09\d{8}$/;
      return phoneRules.test(phone);
    },
    verifyEmail(email) {
      const emailRules = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      return emailRules.test(email);
    },
    getUrlToken() {
      var url = location.href;
      var t = "";
      if (url.indexOf("?") != -1) {
        var ary = url.split("?")[1].split("&");
        for (let i = 0; i <= ary.length - 1; i++) {
          if (ary[i].split("=")[0] == "t") t = ary[i].split("=")[1];
        }
      }
      return t;
    },
    articleHandler(article) {
      return article.replace(/\n/g, "<br>").replace(/\t/g, " ");
    },
    dateFormat(originDate) {
      let date = new Date(originDate);
      const formatDate = (current_datetime) => {
        let formatted_date =
          current_datetime.getFullYear() +
          "/" +
          (current_datetime.getMonth() + 1) +
          "/" +
          current_datetime.getDate() +
          " " +
          current_datetime.getHours() +
          ":" +
          current_datetime.getMinutes() +
          ":" +
          current_datetime.getSeconds();
        return formatted_date;
      };
      return formatDate(date);
    },
    lineLogin(liffId) {
      return new Promise((resolve, reject) => {
        liff
          .init({
            liffId,
          })
          .then(() => {
            if (!liff.isLoggedIn()) {
              console.log("尚未登入Line");
              liff.login({});
            } else {
              liff
                .getProfile()
                .then((profile) => {
                  this.$store.commit("SET_LINE_PROFILE", profile);
                  return this.getLoginToken();
                })
                .then(() => {
                  resolve(true);
                })
                .catch((err) => {
                  console.log("error", err);
                });
            }
          })
          .catch((err) => {
            reject(false);
            console.log(err);
          });
      });
    },
  },
};
