import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["lang"])
  },
  methods: {
    compileFilePath(file) {
      return require(`@/assets/images/${file}`)
    },
    verifyPhone(phone) {
      const phoneRules = /^09\d{8}$/
      return phoneRules.test(phone)
    },
    verifyEmail(email) {
      const emailRules = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      return emailRules.test(email)
    },
    getUrlToken() {
      var url = location.href
      var t = ""
      if (url.indexOf("?") != -1) {
        var ary = url.split("?")[1].split("&")
        for (let i = 0; i <= ary.length - 1; i++) {
          if (ary[i].split("=")[0] == "t") t = ary[i].split("=")[1]
        }
      }
      return t
    },
    articleHandler(article) {
      return article.replace(/\n/g, "<br>").replace(/\t/g, " ")
    }
  }
}
