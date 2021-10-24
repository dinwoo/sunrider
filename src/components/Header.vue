<template lang="pug">
header
  .main-header
    .logo
      include ../assets/icon/logo-sunrider.pug
    .menu-box
      .icon.memeber
        include ../assets/icon/icon-member.pug
      .icon.shopcart
        include ../assets/icon/icon-shopcart.pug
      .icon.ham(
        :class="{'active':showMenu}"
        @click="showMenu=!showMenu"
      )
        include ../assets/icon/icon-menu.pug
  .menu(:class="{'active':showMenu}")
    .menu-item
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

  


  
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  components: {},
  data() {
    return {
      showMenu: false,
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
</style>
