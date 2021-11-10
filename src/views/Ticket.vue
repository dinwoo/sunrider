<template lang="pug">
.ticket-wrapper
  .title
    .icon
      include ../assets/icon/icon-list.pug
    p 購票紀錄
  .empty(v-if="!orderList.length")
    p
      | 無購票紀錄，
      router-link.go-product(:to="{name:'Product'}") 繼續前往購票
  .order-item(v-for="order in orderList" :key="order.id")
    .info-box
      .info
        .info-label 購買人姓名
        p {{order.paidUserName}}
      .info
        .info-label 聯絡手機
        p {{order.paidUserPhone}}
    .ticket-box
      .info 購票時間：{{dateFormat(order.createDate)}}
      .info 訂單編號：{{order.orderCode}}
      .tickets(v-for="orderItem in order.items" :key="orderItem.id")
        .ticket-set
          .name {{orderItem.product.name}}
            span.red(v-if="!order.isPaid") 未付款
          .price NT.{{orderItem.amount}}
        .ticket-item(v-for="ticket in orderItem.tickets" :key="ticket.id")
          .ticket-info
            .num-title 序號
            .ticket-number {{ticket.code}}
            .ticket-user 使用者：{{ticket.bindingUserName}}
          .btn(
            v-if="order.isPaid"
            :class="{'done':ticket.bindingUserId}"
            v-clipboard:copy="ticket.code"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          ) {{ticket.bindingUserId?'已綁定':'複製序號'}}
  .cancel-ticket
    p 線上直播大會當日至大會日前第7日內辦理退票者，業者得不予退票
    router-link.btn(:to="{name:'Refund'}" v-if="orderList.length") 申請退票
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
    ...mapState(["isLoading", "orderList"]),
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(["getOrder"]),
    init() {
      if (this.token == "") {
        this.lineLogin(process.env.VUE_APP_LIFF_ID_TICKET)
          .then(() => {
            this.getOrderApi();
          })
          .catch(() => {
            console.log("失敗");
          });
      } else {
        this.getOrderApi();
      }
    },
    getOrderApi() {
      this.getOrder()
        .then(() => {
          console.log("success");
        })
        .catch((e) => {
          console.log(e);
          if (e == "userVerificationError") {
            this.init();
          }
          console.log("fail");
        });
    },
    onCopy() {
      alert("複製成功！");
    },
    onError() {
      alert("複製失敗！");
    },
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
  .empty
    min-height: calc(100vh - 420px)
    p
      padding: 2rem 0
      font-size: 1.2rem
      text-align: center
      .go-product
        cursor: pointer
        display: inline-block
        text-decoration: underline
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
    width: 100%
    padding: 25px 40px
    box-sizing: border-box
    background-color: $gray-004
    .info
      margin-bottom: 10px
      font-size: 1rem
      line-height: 28px
      color: $gray-003
    .tickets
      margin-top: 25px
      .ticket-set
        margin-bottom: 40px
        +clearfix
        .name
          font-size: 1.1rem
          line-height: 28px
          font-weight: bold
          float: left
          .red
            padding-left: 5px
            color: red
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
            pointer-events: none
            color: $gray-003
            border: 1px solid $gray-003
  .cancel-ticket
    width: 100%
    padding: 40px
    box-sizing: border-box
    p
      width: calc(100% - 80px)
      font-size: 0.8rem
      line-height: 22px
      color: $red-001
      +dib
    .btn
      width: 80px
      font-size: 0.9rem
      line-height: 28px
      color: $blue-001
      text-decoration: underline
      cursor: pointer
      text-align: right
      +dib
  +rwd(540px)
    .title
      padding: 10px 20px
      .icon
        width: 20px
        height: 20px
      p
        // font-size: 1rem
        // line-height: 28px
    .empty
      min-height: calc(100vh - 280px)
    .info-box
      padding: 20px
      .info
        &+ .info
          margin-top: 10px
        .info-label
          width: 120px
          // font-size: 1.1rem
          // line-height: 28px
        p
          // font-size: 1.1rem
          // line-height: 28px
    .ticket-box
      padding: 20px
      .info
        margin-bottom: 5px
        // font-size: 1rem
        // line-height: 28px
      .tickets
        margin-top: 15px
        .ticket-set
          margin-bottom: 20px
          .name
            // font-size: 1.1rem
            // line-height: 28px
          .price
            // font-size: 1.1rem
            // line-height: 28px
        .ticket-item
          // padding: 10px 15px
          // margin-top: 10px
          .ticket-info
            width: calc(100% - 100px)
            .num-title
              margin-bottom: 5px
              // font-size: 1rem
              // line-height: 28px
            .ticket-number
              margin-bottom: 15px
              // font-size: 1rem
              // line-height: 28px
            .ticket-user
              // font-size: .9rem
              // line-height: 28px
          .btn
            width: 100px
            // font-size: 1.1rem
            line-height: 40px
    .cancel-ticket
      padding: 20px
      p
        width: calc(100% - 60px)
        // font-size: 0.8rem
        // line-height: 22px
      .btn
        width: 60px
        // font-size: 0.9rem
        // line-height: 28px
</style>
