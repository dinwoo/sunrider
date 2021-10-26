<template lang="pug">
.ticket-wrapper
  .title
    .icon
      include ../assets/icon/icon-list.pug
    p 我的購物車
  .info-box
    .info
      .info-label 購買人姓名
      p XXX
    .info
      .info-label 聯絡手機
      p 0987-654321
  .ticket-box
    .tickets
      .info 購票時間：2021/11/25 12:00:00
      .info 訂單編號：HSopfjhe52kf5e5ftg
      .ticket-set
        .name 早鳥優惠-5張門票
        .price NT.1,800
      .ticket-item
        .ticket-info
          .num-title 序號
          .ticket-number Jsddkjepwojfh5ekfp
          .ticket-user 使用者：SUNRIDER User
        .btn 已綁定
    .tickets
      .info 購票時間：2021/11/25 12:00:00
      .info 訂單編號：HSopfjhe52kf5e5ftg
      .ticket-set
        .name 早鳥優惠-5張門票
        .price NT.1,800
      .ticket-item
        .ticket-info
          .num-title 序號
          .ticket-number Jsddkjepwojfh5ekfp
          .ticket-user 使用者：SUNRIDER User
        .btn.done 已綁定
      .ticket-item
        .ticket-info
          .num-title 序號
          .ticket-number Jsddkjepwojfh5ekfp
          .ticket-user 使用者：SUNRIDER User
        .btn 已綁定
  .cancel-ticket
    p 線上直播大會當日至大會日前第7日內辦理退票者，業者得不予退票
    .btn 申請退票
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Ticket",
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

.ticket-wrapper
  .title
    width: 100%
    padding: 20px 40px
    background-color: $gray-005
    box-sizing: border-box
    position: relative
    .icon
      width: 30px
      height: 30px
      fill: $gray-001
      +dib
    p
      padding-left: 7px
      font-size: 1rem
      line-height: 28px
      font-weight: bold
      color: $gray-001
      +dib
  .info-box
    padding: 25px 40px
    .info
      &+ .info
        margin-top: 20px
      .info-label
        width: 180px
        font-size: 1.1rem
        line-height: 28px
        font-weight: bold
        +dib
      p
        font-size: 1.1rem
        line-height: 28px
        color: $gray-003
        +dib
  .ticket-box
    .tickets
      width: 100%
      padding: 25px 40px
      margin-top: 25px
      box-sizing: border-box
      background-color: $gray-004
      .info
        margin-bottom: 10px
        font-size: 1rem
        line-height: 28px
        color: $gray-003
      .ticket-set
        margin-bottom: 40px
        +clearfix
        .name
          font-size: 1.1rem
          line-height: 28px
          font-weight: bold
          float: left
        .price
          font-size: 1.1rem
          line-height: 28px
          font-weight: bold
          float: right
      .ticket-item
        width: 100%
        padding: 10px 15px
        margin-top: 10px
        background-color: #fff
        box-sizing: border-box
        .ticket-info
          width: calc(100% - 180px)
          +dib
          .num-title
            margin-bottom: 10px
            font-size: 1rem
            line-height: 28px
            color: $gray-003
          .ticket-number
            margin-bottom: 30px
            font-size: 1rem
            line-height: 28px
          .ticket-user
            font-size: .9rem
            line-height: 28px
            color: $gray-003
        .btn
          width: 180px
          font-size: 1.1rem
          line-height: 54px
          color: $blue-001
          border: 1px solid $blue-001
          border-radius: 10px
          text-align: center
          cursor: pointer
          box-sizing: border-box
          +dib
          &.done
            color: $gray-003
            border: 1px solid $gray-003
  .cancel-ticket
    width: 100%
    padding: 40px
    box-sizing: border-box
    +clearfix
    p
      font-size: 0.8rem
      line-height: 22px
      color: $red-001
      float: left
    .btn
      font-size: 0.9rem
      line-height: 28px
      color: $blue-001
      text-decoration: underline
      float: right
      cursor: pointer
</style>
