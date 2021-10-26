<template lang="pug">
.product-item-wrapper
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
</template>

<script>
export default {
  name: "ShopcartItem",
  components: {},
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
</style>
