<template lang="pug">
.product-item-wrapper
  figure.product-pic
    img(:src="shopCartItem.imageUrl")
  .product-info
    .title {{shopCartItem.name}}
    //- .product-name {{shopCartItem.name}}
    .trash(@click="removeShopCartData(shopCartItem.id);$emit('removeProduct')")
      include ../assets/icon/icon-trash.pug
    .number-box
      .number-btn.minus(@click="shopCartItem.num==1?removeShopCartData(shopCartItem.id):shopCartItem.num--") －
      input(type="text" v-model.number="shopCartItem.num")
      .number-btn.plus(@click="shopCartItem.num++") ＋
    .price NT${{shopCartItem.price}}
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ShopcartItem",
  components: {},
  props: {
    shopCartItem: Object,
  },
  data() {
    return {};
  },
  computed: {},
  beforeDestroy() {},
  mounted() {},
  methods: {
    ...mapMutations({
      removeShopCartData: "REMOVE_SHOPCART_DATA",
    }),
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.product-item-wrapper
  display: flex
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
      width: 25px
      height: 25px
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
  +rwd(540px)
    figure.product-pic
      width: 100px
    .product-info
      width: calc( 100% - 100px )
      padding-left: 15px
      .title,.product-name
        // font-size: 1rem
        // line-height: 25px
        // font-weight: bold
      .trash
        width: 20px
        height: 20px
      .number-box
        left: 15px
        .number-btn
          width: 24px
          // font-size: 1rem
          line-height: 24px
        input
          width: 40px
          // font-size: 1rem
          line-height: 24px
      .price
        font-size: 0.8rem
        line-height: 28px
</style>
