<template lang="pug">
.refund-wrapper
  section.main
    .logo
      include ../assets/icon/logo-sunrider.pug
    label.input-row.ticket-num
      .input-title 
        span.red *
        p 請輸入您的票券序號
      input.input-style(type="text" placeholder="")
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
        input.input-style(type="text" placeholder="兌換用，請務必輸入真實姓名")
      label.input-row
        .input-title
          span.red *
          p 聯絡手機
        input.input-style(type="text" placeholder="兌換用，請務必輸入真實聯絡手機")
      label.input-row
        .input-title
          span.red *
          p 出生日期
        .birthday-box
          select
            option(value="") 西元
          select
            option(value="") 月份
          select
            option(value="") 日期
      label.input-row
        .input-title
          span.red *
          p 地址
        input.input-style(type="text" placeholder="兌換用，請務必輸入真實聯絡手機")
      label.input-row
        .input-title
          p 會員編號
        input.input-style(type="text" placeholder="" value="TW")
      label.input-row
        .input-title
          p 級別
        input.input-style(type="text" placeholder="輸入本次年會表彰新晉級別")
    .remind 觀看直撥建議以Chrome瀏覽觀看
    router-link.main-btn(:to="{name:'WaitLive'}") 加入觀看
</template>

<script>
export default {
  name: "Refund",
  components: {},
  props: {},
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
