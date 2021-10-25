<template lang="pug">
header
  .main-header
    .logo
      include ../assets/icon/logo-sunrider.pug
    .menu-box
      .icon.memeber
        include ../assets/icon/icon-member.pug
      .icon.shopcart(
        @click="showShopCart=!showShopCart"
      )
        include ../assets/icon/icon-shopcart.pug
      .icon.ham(
        :class="{'active':showMenu}"
        @click="showMenu=!showMenu"
      )
        include ../assets/icon/icon-menu.pug
  .menu(:class="{'active':showMenu}")
    router-link.menu-item(:to="{name:'Product'}")
      p 購票
      .arrow
        include ../assets/icon/icon-arrow-r.pug
    .menu-item
      p 觀看直播
      .arrow
        include ../assets/icon/icon-arrow-r.pug
    a.menu-item(href="" target="_blank") 
      p SUBRIDER官網
      .arrow
        include ../assets/icon/icon-arrow-r.pug
  .shopcart-box(:class="{'active':showShopCart}")
    .warpper
      .product-item(v-for="item in 4")
        figure.product-pic
          img(src="@/assets/images/product-ticket5.png")
        .product-info
          .title 早鳥套票優惠
          .product-name 5張門票
          .trash
            include ../assets/icon/icon-trash.pug
          .number-box
            .number-btn.minus －
            input(type="number")
            .number-btn.plus ＋
          .price NT$1,800
      .calculate-box
        .container
          .title Total
          .sum-price NT$1,800
        .btn-box
          .btn.buy 繼續購買
          .btn.checkout 馬上結帳


</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  components: {},
  data() {
    return {
      showMenu: false,
      showShopCart: false,
    };
  },
  computed: {
    ...mapState([]),
  },
  beforeDestroy() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

header
  width: 100%
  max-width: 768px
  position: fixed
  top: 0
  left: 0
  right: 0
  margin: auto
  z-index: 100
  .main-header
    width: 100%
    padding: 40px
    background-color: #fff
    box-shadow: 0 3px 6px rgba(#000,.16)
    box-sizing: border-box
    position: relative
    z-index: 2
    .logo
      width: 270px
      fill: $red-001
    .menu-box
      position: absolute
      top: 50%
      right: 40px
      transform: translateY(-50%)
      .icon
        fill: $gray-001
        cursor: pointer
        transition: .3s
        +dib
        &:hover
          fill: $red-001
        & + .icon
          margin-left: 35px
        &.ham.active
          fill: $red-001
          transform: rotate(-90deg)
  .menu
    width: 100%
    background-color: #fff
    box-shadow: 0 3px 6px rgba(#000,.16)
    transform: translateY(100%)
    transition: .3s
    position: absolute
    bottom: 50vh
    left: 0
    z-index: 1
    &.active
      bottom: 0
    .menu-item
      width: 100%
      padding: 20px 40px
      box-sizing: border-box
      display: block
      position: relative
      cursor: pointer
      p
        font-size: 1.1rem
        color: $gray-002
        transition: .3s
      .arrow
        fill: $gray-002
        transition: .3s
        position: absolute
        right: 40px
        top: 50%
        transform: translateY(-50%)
      &:hover
        p
          color: $gray-003
        .arrow
          fill: $gray-003
  .shopcart-box
    width: 600px
    height: 100vh
    padding: 110px 40px 0
    background-color: #fff
    box-sizing: border-box
    box-shadow: 0 3px 6px rgba(#000,.16)
    overflow-y: auto
    transition: .3s
    position: absolute
    right: -620px
    top: 0
    &.active
      right: 0
    .warpper
      min-height: 100%
      padding-top: 45px
      padding-bottom: 250px
      box-sizing: border-box
      position: relative
      .product-item
        display: flex
        & + .product-item
          margin-top: 45px
        figure.product-pic
          width: 150px
        .product-info
          width: calc( 100% - 150px )
          padding-left: 30px
          box-sizing: border-box
          position: relative
          .title,.product-name
            font-size: 1rem
            line-height: 25px
            font-weight: bold
          .trash
            fill: $gray-003
            position: absolute
            top: 0
            right: 0
            cursor: pointer
          .number-box
            position: absolute
            bottom: 0
            left: 30px
            .number-btn
              width: 34px
              font-size: 1rem
              line-height: 34px
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
              line-height: 34px
              text-align: center
              border: none
              +dib
              &:focus
                outline: none
          .price
            font-size: 1.1rem
            line-height: 28px
            font-weight: bold
            position: absolute
            bottom: 0
            right: 0
      .calculate-box
        width: 100%
        padding-bottom: 40px
        border-top: 1px solid $gray-002
        position: absolute
        bottom: 0
        left: 0
        right: 0
        margin: auto
        .container
          display: flex
          justify-content: space-between
          .title,.sum-price
            padding: 10px 0
            font-size: 1.1rem
            line-height: 28px
            font-weight: bold
        .btn-box
          padding-top: 60px
          display: flex
          justify-content: space-between
          .btn
            width: 230px
            font-size: 0.9rem
            line-height: 54px
            text-align: center
            border-radius: 28px
            cursor: pointer
            transition: .3s
            &.buy
              border: 1px solid $gray-002
            &.checkout
              color: #fff
              background-color: $red-001
              border: 1px solid $red-001
              transition: .3s
              &:hover
                background-color: #C12032
</style>
