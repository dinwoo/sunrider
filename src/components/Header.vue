<template lang="pug">
header
  .main-header
    router-link.logo(:to="{name:'Home'}")
      include ../assets/icon/logo-sunrider.pug
    .menu-box
      router-link.icon.memeber(:to="{name:'Ticket'}")
        include ../assets/icon/icon-member.pug
      .icon(
        @click="setShopCartHandler()"
      )
        include ../assets/icon/icon-shopcart.pug
      .icon.ham(
        :class="{'active':showMenu}"
        @click="setMenuHandler()"
      )
        include ../assets/icon/icon-menu.pug
  .menu(:class="{'active':showMenu}")
    .menu-item(@click="goProductPage")
      p 購票
      .arrow
        include ../assets/icon/icon-arrow-r.pug
    .menu-item(@click="goExchangePage")
      p 觀看直播
      .arrow
        include ../assets/icon/icon-arrow-r.pug
    a.menu-item(href="https://sunrider.com.tw/" target="_blank") 
      p SUNRIDER官網
      .arrow
        include ../assets/icon/icon-arrow-r.pug
  .shopcart(:class="{'active':showShopCart}")
    .shopcart-box
      .warpper
        .close(@click="setShopCart(false)")
        ShopcartItem.product-item(
          v-for="(item,index) in shopCartData"
          :key="index"
          :shopCartItem="item"
        )
        .empty(v-if="!shopCartData.length")
          p
            | 購物車尚未有產品，
            span.go-product(@click="continueBuy") 前去購買
        .calculate-box(v-else)
          .container
            .title Total
            .sum-price NT${{amount}}
          .btn-box
            .btn.buy(:to="{name:'Product'}" @click="continueBuy") 繼續購買
            router-link.btn.checkout(:to="{name:'ShopPay'}") 馬上結帳


</template>

<script>
import { mapState, mapMutations } from "vuex";
import ShopcartItem from "@/components/ShopcartItem.vue";

export default {
  name: "Header",
  components: { ShopcartItem },
  data() {
    return {};
  },
  computed: {
    ...mapState(["showMenu", "showShopCart", "shopCartData", "isLineLogin"]),
    amount() {
      return this.$store.getters.totalPrice;
    },
  },
  beforeDestroy() {},
  mounted() {},
  methods: {
    ...mapMutations({
      setShopCart: "SET_SHOPCART",
      setMenu: "SET_MENU",
    }),
    setShopCartHandler() {
      this.setShopCart(!this.showShopCart);
      this.setMenu(false);
    },
    setMenuHandler() {
      this.setMenu(!this.showMenu);
      this.setShopCart(false);
    },
    continueBuy() {
      this.setShopCart(false);
      if (this.$route.name != "Product") {
        this.$router.push({ name: "Product" });
      }
    },
    goProductPage() {
      if (this.$route.name == "Product") {
        this.setMenu(false);
      } else {
        this.$router.push({ name: "Product" });
      }
    },
    goExchangePage() {
      if (
        this.$route.name == "Exchange" ||
        this.$route.name == "WaitLive" ||
        this.$route.name == "Live"
      ) {
        this.setMenu(false);
      } else {
        this.$router.push({ name: "Exchange" });
      }
    },
  },
  watch: {
    shopCartData(val) {
      localStorage.setItem("shopCartData", JSON.stringify(val));
    },
  },
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
      display: block
      width: 270px
      fill: $red-001
    .menu-box
      position: absolute
      top: 50%
      right: 40px
      transform: translateY(-50%)
      .icon
        width: 35px
        height: 35px
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
  .shopcart
    width: 610px
    height: 100vh
    position: absolute
    top: 0
    right: 0
    pointer-events: none
    overflow-x: hidden
    &.active
      pointer-events: auto
      .shopcart-box
        right: 0
    .shopcart-box
      width: 600px
      height: 100%
      padding: 110px 40px 0
      background-color: #fff
      box-sizing: border-box
      box-shadow: 0 3px 6px rgba(#000,.16)
      overflow-y: auto
      transition: .3s
      position: absolute
      right: -620px
      top: 0
      .warpper
        min-height: 100%
        padding-top: 45px
        padding-bottom: 250px
        box-sizing: border-box
        position: relative
        .close
          width: 30px
          height: 30px
          position: absolute
          top: 10px
          left: -30px
          transform: rotate(45deg)
          cursor: pointer
          &:before,&:after
            content: ''
            display: block
            background-color: $red-001
            +pstc0
          &:before
            width: 4px
            height: 100%
          &:after
            width: 100%
            height: 4px
        .product-item
          & + .product-item
            margin-top: 45px
        .empty
          padding: 2rem 0
          text-align: center
          p
            font-size: 1.2rem
            .go-product
              cursor: pointer
              display: inline-block
              text-decoration: underline
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
  +rwd(540px)
    .main-header
      padding: 20px
      .logo
        width: 170px
      .menu-box
        right: 20px
        .icon
          width: 25px
          height: 25px
          & + .icon
            margin-left: 20px
    .menu
      .menu-item
        padding: 20px
        p
          font-size: 1.1rem
        .arrow
          right: 20px
    .shopcart
      width: 90vw
      .shopcart-box
        width: calc( 90vw - 10px )
        padding: 64px 20px 0
        right: -100vw
        .warpper
          padding-top: 30px
          padding-bottom: 140px
          .close
            width: 20px
            height: 20px
            top: 5px
            left: -15px
          .product-item
            & + .product-item
              margin-top: 25px
          .calculate-box
            padding-bottom: 20px
            .container
              .title,.sum-price
                padding: 10px 0
                // font-size: 1.1rem
            .btn-box
              padding-top: 30px
              .btn
                width: 48%
                line-height: 34px
                border-radius: 17px
</style>
