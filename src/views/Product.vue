<template lang="pug">
.product-wrapper
  section.banner
    figure
      img(src="@/assets/images/product-KV.jpg")
  section.information
    .title 購票說明
    .highlight 購票前，請詳細閱讀以下購票說明及注意事項
    .list 1.線上直播大會之門票，購買後將以票券序號形式提供，意即購買5張門票即會有5組門票序號。
    .list 2.每組門票序號限1人使用，直撥當日點擊觀看直播連結/Line選單進入、綁定Line帳號並輸入票券序號後即綁定使用者。
  section.remark
    p
      | 注意事項：
      br
      | 每組票券序號限1人使用，綁定該使用者之Line帳號後即無法變更，是同票券已使用，亦無法退票。
      br
      | 觀看直撥中，若需更換裝置觀看，請點擊右上方“離開觀看”，可於另一裝置以相同票券序號登入觀看。
  section.product-box
    .product-item
      .container
        .title 早鳥套票優惠
        .product-name 5張門票
        figure.product-pic
          img(src="@/assets/images/product-ticket5.png")
        .number-box
          .number-btn.minus －
          input(type="number")
          .number-btn.plus ＋
        .price NT$1,800
        .add-cart 加入購物車
    .product-item
      .container
        .title 早鳥套票優惠
        .product-name 10張門票
        figure.product-pic
          img(src="@/assets/images/product-ticket10.png")
        .number-box
          .number-btn.minus －
          input(type="number")
          .number-btn.plus ＋
        .price NT$2,800
        .add-cart 加入購物車
    .product-item
      .container
        .product-name 單張門票
        figure.product-pic
          img(src="@/assets/images/product-ticket1.png")
        .number-box
          .number-btn.minus －
          input(type="number")
          .number-btn.plus ＋
        .price NT$2,800
        .add-cart 加入購物車
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
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

.product-wrapper
  section.banner
    figure
      width: 100%
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
  section.remark
    padding: 35px 40px
    background-color: $gray-004
    p
      font-size: 1rem
      line-height: 28px
      color: $gray-003
  section.product-box
    .product-item
      padding: 50px 0
      & + .product-item
        border-top: 1px solid #DFE4EB
      .container
        max-width: 425px
        margin: auto
        .title
          text-decoration: underline
        .title,.product-name
          font-size: 1.1rem
          letter-spacing: 1.1px
          line-height: 35px
          font-weight: bold
          text-align: center
        figure.product-pic
          width: 100%
          margin: 25px 0
        .number-box
          float: left
          .number-btn
            width: 42px
            font-size: 1.4rem
            line-height: 42px
            background-color: $gray-004
            text-align: center
            cursor: pointer
            +dib
            &.plus
              color: #fff
              background-color: $gray-003
          input
            width: 70px
            font-size: 1rem
            line-height: 42px
            text-align: center
            border: none
            +dib
            &:focus
              outline: none
        .price
          font-size: 1.1rem
          line-height: 42px
          font-weight: bold
          float: right
        .add-cart
          width: 315px
          margin: 115px auto 0
          font-size: 1.1rem
          line-height: 66px
          color: $red-001
          border-radius: 34px
          border: 1px solid $red-001
          text-align: center
          transition: .3s
          clear: both
          cursor: pointer
          &:hover
            color: #fff
            background-color: $red-001
</style>
