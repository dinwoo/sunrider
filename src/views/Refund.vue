<template lang="pug">
.refund-wrapper
  section.information
    .title 退票說明
    .highlight 申請退票前，請詳細閱讀以下退票說明
    .list 1.若購買套票，退票亦需整個套票退票，無法退單張票券。
    .list 2.任一組票券序號若已綁定使用者，視同票券已使用，業者得不予退票，套票亦同。
    .list 3.線上直播大會當日前第7日前辦理退票者，手續費為100元。
    .remind-title 注意事項
    .list ・非供自用或購買票券而轉售圖利者，企業經營者得不予退。
    .list ・為維護購票者個資安全，本退票服務僅限購票者本人申請，勾選欲退票的品 項後，並須填妥退票申請書將以下資料完整提供辦理，經收單後，視同您同意本公司進行相關退票作業，包含電話聯繫、缺(補)件作業等並直接辦理退票作業。
    .list ・扣除退票手續費後票款金額，於確認退票申請後約7-10個工作日刷退至原刷卡購票之信用卡帳戶，恕無法以現金或其他指定方式退還，退款時間將依發卡行及銀行之作業時間為準約需10-14工作天，請主動向銀行端查詢退款進度。
    .list ・系統服務費、轉帳及金流手續費非屬票價部分不在退費範圍之內。
  section.main
    .wrapper
      .title 請勾選欲退票的品項
      .refund-box
        label.refund-item(v-for="ticket in refundList" :key="ticket.ticketId")
          input(type="checkbox" v-model="refundCheckList" :value="ticket")
          .radio
          .refund-info
            .info
              span.gray 購票時間
              | {{dateFormat(ticket.date)}}
            .info
              span.gray 訂單編號
              | {{ticket.orderCode}}
            .name {{ticket.name}}
            .price NT.{{ticket.amount}}
    .wrapper
      .title 請填寫退票申請書
      .form-box
        label.input-row
          .input-title
            span.red *
            p 姓 名
          input.input-style(type="text" placeholder="需同購買人姓名" v-model="name")
        label.input-row
          .input-title
            span.red *
            p 聯絡手機
          input.input-style(type="text" placeholder="需同購買人聯絡手機" v-model="phone")
        label.input-row
          .input-title
            span.red *
            p Email
          input.input-style(type="text" placeholder="需同購買人Email" v-model="email")
        label.input-row
          .input-title
            span.red *
            p 信用卡號
          .credit-card
            .card-num
              input(type="text" maxlength="4" v-model="cardNum1")
            .card-num
              input(type="text" value="****" disabled)
            .card-num
              input(type="text" value="****" disabled)
            .card-num
              input(type="text" maxlength="4" v-model="cardNum2")
          .remark 需同購買之信用卡號
        label.input-row
          .input-title
            span.red *
            p 聯絡地址
          input.input-style(type="text" placeholder="" v-model="address")
        .input-row
          .input-title
          .check
            input(type="checkbox" v-model="check")
            p 我已閱讀並同意退票說明及注意事項
      .main-btn(@click="postRefundApi") 送出退票申請
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Refund",
  components: {},
  props: {},
  data() {
    return {
      refundCheckList: [],
      name: "test name",
      phone: "0987654321",
      email: "test@test.com",
      cardNum1: "1234",
      cardNum2: "5678",
      address: "台北市",
      check: true,
    };
  },
  computed: {
    ...mapState(["isLoading", "orderList"]),
    refundList() {
      let list = [];
      if (Object.keys(this.orderList).length) {
        this.orderList.forEach((order) => {
          order.items.forEach((ticket) => {
            if (ticket.isRefundable) {
              list.push({
                date: order.createDate,
                orderCode: order.orderCode,
                orderId: order.id,
                ticketId: ticket.id,
                name: ticket.product.name,
                amount: ticket.amount,
              });
            }
          });
        });
      }
      return list;
    },
    creditCardNum() {
      return `${this.cardNum1}********${this.cardNum2}`;
    },
    refundAmount() {
      return this.refundCheckList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      }, 0);
    },
    refundItems() {
      return this.refundCheckList.map((item) => {
        return {
          orderId: item.orderId,
          orderItemId: item.ticketId,
        };
      });
    },
  },
  beforeDestroy() {},
  mounted() {
    this.lineLogin("1655134709-g4jlYvqq")
      .then(() => {
        this.getOrderApi();
      })
      .catch(() => {
        console.log("失敗");
      });
  },
  methods: {
    ...mapActions(["getOrder", "postRefund"]),
    getOrderApi() {
      this.getOrder()
        .then(() => {
          console.log("success");
        })
        .catch((e) => {
          console.log(e);
          console.log("fail");
        });
    },
    postRefundApi() {
      if (!this.refundCheckList.length) {
        alert("請選擇欲退票品項");
        return false;
      } else if (this.name == "") {
        alert("請填寫姓名");
        return false;
      } else if (this.phone == "") {
        alert("請填寫聯絡手機");
        return false;
      } else if (this.email == "") {
        alert("請填寫Email");
        return false;
      } else if (this.cardNum1 == "" || this.cardNum2 == "") {
        alert("請填寫信用卡資訊");
        return false;
      } else if (this.address == "") {
        alert("請填寫地址");
        return false;
      } else if (!this.check) {
        alert("請閱讀並同意退票說明及注意事項");
        return false;
      }

      this.postRefund({
        amount: String(this.refundAmount),
        paidUserName: this.name,
        paidUserPhone: this.phone,
        paidUserEmail: this.email,
        paidUserAddress: this.address,
        paidCardCode: this.creditCardNum,
        items: this.refundItems,
      })
        .then(() => {
          console.log("success");
          this.$router.push({ name: "Refunded" });
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
  section.information
    width: 100%
    padding: 45px
    box-sizing: border-box
    .title
      font-size: 1.1rem
      line-height: 28px
      letter-spacing: 1.1px
      font-weight: bold
      text-align: center
    .highlight
      margin-bottom: 50px
      font-size: 0.9rem
      line-height: 28px
      letter-spacing: .9px
      color: $red-002
      text-align: center
    .list
      padding-left: 0.8rem
      margin-bottom: 15px
      font-size: 1rem
      line-height: 28px
      color: $gray-003
      text-indent: -0.8rem
    .remind-title
      margin: 50px 0 15px
      font-size: 1rem
      line-height: 28px
      color: $gray-003
    +rwd(540px)
      padding: 20px
      .title
      .highlight
        margin-bottom: 30px
      .list
        // padding-left: 0.8rem
        margin-bottom: 10px
        // text-indent: -0.8rem
      .remind-title
        margin: 25px 0 10px
  section.main
    .wrapper
      width: 100%
      padding: 20px 40px
      background-color: $gray-004
      box-sizing: border-box
      text-align: center
      & + .wrapper
        margin-top: 20px
      .title
        margin-bottom: 30px
        font-size: 1.1rem
        line-height: 28px
      .refund-box
        text-align: left
        .refund-item
          width: 100%
          padding: 30px
          background-color: #fff
          display: block
          box-sizing: border-box
          cursor: pointer
          & + .refund-item
            margin-top: 10px
          input
            position: absolute
            opacity: 0
            &:checked + .radio:before
                display: block
          .radio
            width: 30px
            height: 30px
            border-radius: 50%
            border: 1px solid $gray-003
            box-sizing: border-box
            position: relative
            +dib
            &:before
              content: ''
              display: none
              width: 18px
              height: 18px
              border-radius: 50%
              background-color: $red-001
              +pstc0
          .refund-info
            width: calc( 100% - 30px )
            padding-left: 40px
            box-sizing: border-box
            position: relative
            +dib
            .info
              margin-bottom: 10px
              font-size: 1rem
              line-height: 28px
              span.gray
                padding-right: 20px
                color: $gray-003
            .name
              margin-top: 20px
              font-size: 1.1rem
              line-height: 28px
            .price
              font-size: 1.1rem
              line-height: 28px
              position: absolute
              right: 0
              bottom: 0
      .form-box
        .input-row
          text-align: left
          input
            background-color: #fff
          .credit-card
            width: calc(100% - 110px)
            +dib
            .card-num
              width: 100px
              +dib
              & + .card-num
                margin-left: 30px
                position: relative
                &:before
                  content: ''
                  display: block
                  width: 10px
                  height: 2px
                  background-color: $gray-001
                  position: absolute
                  left: -20px
                  top: 0
                  bottom: 0
                  margin: auto
              input
                width: 100%
                padding: 16px 15px
                border: none
                font-size: 0.9rem
                line-height: 28px
                border-radius: 5px
                text-align: center
                box-sizing: border-box
                &:disabled
                  background-color: $gray-004
          .remark
            padding-top: 5px
            padding-left: 110px
            font-size: 0.8rem
            color: $red-001
          .check
            p
              font-size: 0.8rem
              color: $gray-001
    +rwd(540px)
      .wrapper
        padding: 20px
        & + .wrapper
          // margin-top: 20px
        .title
          margin-bottom: 15px
          // font-size: 1.1rem
          // line-height: 28px
        .refund-box
          .refund-item
            padding: 15px
            & + .refund-item
              // margin-top: 10px
            .radio
              width: 20px
              height: 20px
              &:before
                width: 14px
                height: 14px
            .refund-info
              width: calc( 100% - 20px )
              padding-left: 20px
              .info
                margin-bottom: 5px
                // font-size: 1rem
                // line-height: 28px
                span.gray
                  // padding-right: 20px
              .name
                margin-top: 10px
                // font-size: 1.1rem
                // line-height: 28px
              .price
                // font-size: 1.1rem
                // line-height: 28px
        .form-box
          .input-row
            input
            .credit-card
              width: calc(100% - 80px)
              .card-num
                width: 50px
                & + .card-num
                  margin-left: 18px
                  &:before
                    width: 8px
                    // height: 2px
                    left: -12px
                input
                  padding: 16px 5px
                  // font-size: 0.9rem
                  // line-height: 28px
            .remark
              // padding-top: 5px
              padding-left: 80px
              // font-size: 0.8rem
            .check
              p
                // font-size: 0.8rem
</style>
