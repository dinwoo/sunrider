<template lang="pug">
.shop-pay-wrapper
  section.main
    .title
      .icon
        include ../assets/icon/icon-shopcart.pug
      p 我的購物車
    .shopcart-box
      ShopcartItem.product-item(
        v-for="(item,index) in shopCartData"
        :key="index"
        :shopCartItem="item"
      )
    .title
      .icon
        include ../assets/icon/icon-member.pug
      p 聯絡人資料
      .remark *號為必填
    .member-form
      label.input-row.name
        .input-title
          span.red *
          p 姓 名
        input.input-style(type="text")
      .gender-box
        .gender
          input(type="radio")
          p 女士
        .gender
          input(type="radio")
          p 先生
      label.input-row
        .input-title
          span.red *
          p 聯絡手機
        input.input-style(type="phone")
      label.input-row
        .input-title
          span.red *
          p Email
        input.input-style(type="email")
      label.input-row
        .input-title
          p 會員編號
        input.input-style(type="text")
      .input-row
        .input-title
        .check
          input(type="checkbox")
          p 我已閱讀並同意購票說明及注意事項
      router-link.btn(:to="{name:'Shopped'}") 前往付款
      

</template>

<script>
import { mapState, mapActions } from "vuex";
import ShopcartItem from "@/components/ShopcartItem.vue";

export default {
  name: "ShopPay",
  components: { ShopcartItem },
  props: {},
  mixins: [],
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading", "shopCartData"]),
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

.shop-pay-wrapper
  section.main
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
      .remark
        font-size: 0.9rem
        line-height: 28px
        color: $red-002
        position: absolute
        top: 50%
        right: 40px
        transform: translateY(-50%)
    .shopcart-box
      width: 100%
      padding: 25px 40px
      box-sizing: border-box
      .product-item
        & + .product-item
          margin-top: 45px
    .member-form
      width: 100%
      padding: 25px 40px
      text-align: center
      box-sizing: border-box
      .name
        width: calc(100% - 230px)
        +dib
      .gender-box
        width: 230px
        margin-bottom: 15px
        +dib
        .gender
          width: 50%
          text-align: right
          +dib
          input
            +dib
          p
            padding-left: 10px
            +dib
      .btn
        padding: 15px 115px
        margin: 30px 0
        font-size: 1.1rem
        color: $red-001
        border: 1px solid $red-001
        border-radius: 32px
        display: inline-block
        cursor: pointer
        transition: .3s
        &:hover
          color: #fff
          background-color: $red-001
    +rwd(540px)
      .title
        padding: 10px 20px
        .icon
          width: 20px
          height: 20px
        p
          // font-size: 1rem
          // line-height: 28px
        .remark
          // font-size: 0.9rem
          // line-height: 28px
          right: 20px
      .shopcart-box
        padding: 20px
        .product-item
          & + .product-item
            margin-top: 25px
      .member-form
        padding: 20px
        .name
          width: calc(100% - 130px)
        .gender-box
          width: 130px
          // margin-bottom: 15px
          .gender
            input
            p
              // padding-left: 10px
        .btn
          padding: 15px 115px
          margin: 30px 0
          border-radius: 32px
</style>
