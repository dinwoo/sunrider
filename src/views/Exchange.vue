<template lang="pug">
.refund-wrapper
  section.main
    .logo
      include ../assets/icon/logo-sunrider.pug
    label.input-row.ticket-num
      .input-title 
        span.red *
        p 請輸入您的票券序號
      input.input-style(type="text" placeholder="" v-model="code")
      .remark *號為必填
    .title 看直播抽好禮
    .highlight
      | 請留下您的真實姓名及聯絡電話，即可參加抽獎活動，
      br
      | 有機會獲得精美贈品！
    .list 獎項將於直播中抽出，請鎖定直播到最後一刻喔！
    .form-box
      label.input-row
        .input-title
          span.red *
          p 真實姓名
        input.input-style(type="text" placeholder="兌換用，請務必輸入真實姓名" v-model="name")
      label.input-row
        .input-title
          span.red *
          p 聯絡手機
        input.input-style(type="text" placeholder="兌換用，請務必輸入真實聯絡手機" v-model="phone")
      label.input-row
        .input-title
          span.red *
          p 出生日期
        .birthday-box
          select(v-model="year")
            option(value="null") 西元
            option(v-for="year in 111" :key="year" :value="year+1910") {{year+1910}}
          select(v-model="month")
            option(value="null") 月份
            option(v-for="month in 12" :key="month" :value="month") {{month}}
          select(v-model="day")
            option(value="null") 日期
            option(v-for="day in 31" :key="day" :value="day") {{day}}
      label.input-row
        .input-title
          span.red *
          p 地址
        input.input-style(type="text" placeholder="兌換用，請務必輸入真實地址" v-model="address")
      label.input-row
        .input-title
          p 會員編號
        input.input-style(type="text" placeholder="" value="TW" v-model="memberCode")
      label.input-row
        .input-title
          p 級別
        input.input-style(type="text" placeholder="輸入本次年會表彰新晉級別" v-model="memberRank")
    .remind 觀看直撥建議以Chrome瀏覽觀看
    .main-btn(@click="postBindingApi") 加入觀看
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Exchange",
  components: {},
  props: {},
  data() {
    return {
      code: "12345",
      name: "testname",
      phone: "0987654321",
      year: null,
      month: null,
      day: null,
      address: "台北市",
      memberCode: "123456",
      memberRank: "1",
    };
  },
  computed: {
    ...mapState(["isLoading"]),
    birthday() {
      return `${this.year}-${this.month}-${this.day}`;
    },
  },
  beforeDestroy() {},
  mounted() {
    this.checkLiveStatus()
      .then((res) => {
        console.log(res);
        if (res.isBinding && res.countdownSeconds <= 0) {
          this.$router.push({ name: "Live" });
        } else if (res.isBinding && res.countdownSeconds > 0) {
          this.$router.push({ name: "WaitLive" });
        }
      })
      .catch((e) => {
        console.log(e);
        console.log("fail");
      });
  },
  methods: {
    ...mapActions(["checkLiveStatus", "postBinding"]),
    postBindingApi() {
      if (this.code == "") {
        alert("請填寫票券序號");
        return false;
      } else if (this.name == "") {
        alert("請填寫姓名");
        return false;
      } else if (this.phone == "") {
        alert("請填寫聯絡手機");
        return false;
      } else if (this.year == null || this.month == null || this.day == null) {
        alert("請填寫生日");
        return false;
      } else if (this.address == "") {
        alert("請填寫地址");
        return false;
      }

      this.postBinding({
        code: this.code,
        bindingUserName: this.name,
        bindingUserPhone: this.phone,
        bindingUserBirthday: this.birthday,
        bindingUserAddress: this.address,
        bindingMemberCode: this.memberCode,
        bindingMemberRank: this.memberRank,
      })
        .then(() => {
          console.log("success");
          this.$router.push({ name: "WaitLive" });
        })
        .catch((e) => {
          console.log(e);
          console.log("fail");
        });
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.refund-wrapper
  section.main
    width: 100%
    padding: 0 40px
    text-align: center
    box-sizing: border-box
    .logo
      display: block
      width: 270px
      margin: 85px auto
      fill: $red-001
    .ticket-num
      .input-title,.input-style
        width: 100%
      .remark
        padding: 10px 0
        font-size: 0.8rem
        line-height: 22px
        color: $gray-003
        text-align: right
    .title
      margin: 10px 0
      font-size: 1.1rem
      line-height: 28px
      letter-spacing: 1.1px
      font-weight: bold
      text-align: center
    .highlight
      margin-bottom: 20px
      font-size: 0.9rem
      line-height: 28px
      letter-spacing: .9px
      color: $red-002
      text-align: center
    .list
      margin-bottom: 30px
      font-size: 1rem
      line-height: 28px
      color: $gray-003
  .form-box
    .input-row
      text-align: left
      .birthday-box
        width: calc(100% - 110px)
        +dib
        select
          width: calc((100% - 20px) / 3)
          padding: 16px 15px
          border: none
          background-color: $gray-004
          font-size: 0.9rem
          line-height: 28px
          border-radius: 5px
          +dib
          & + select
            margin-left: 10px
  .remind
    margin-top: 40px
    margin-bottom: -20px
    font-size: 0.8rem
    line-height: 22px
    color: $blue-001
  +rwd(540px)
    section.main
      padding: 0 20px
      .logo
        width: 200px
        margin: 65px auto
      .ticket-num
        .input-title,.input-style
        .remark
          padding: 5px 0
          // font-size: 0.8rem
          // line-height: 22px
      .title
      .highlight
        font-size: 0.8rem
      .list
        margin-bottom: 20px
        font-size: .8rem
        // line-height: 28px
    .form-box
      .input-row
        .birthday-box
          width: calc(100% - 80px)
          select
            width: calc((100% - 10px) / 3)
            // font-size: 0.9rem
            // line-height: 28px
            & + select
              margin-left: 5px
    .remind
      margin-top: 20px
      // margin-bottom: -20px
      // font-size: 0.8rem
      // line-height: 22px
</style>
