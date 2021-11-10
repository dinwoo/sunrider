<template lang="pug">
#app
  template(v-show="!isLoading")
    component(:is="$route.meta.layout")
  .loading-mask(v-if="isLoading")
    figure.loding-icon
      //- img(src="@/assets/images/loading-icon.svg")
    
</template>

<script>
import { mapState } from "vuex";
import HomeLayout from "@/layouts/HomeLayout";
import DefaultLayout from "@/layouts/DefaultLayout";
export default {
  components: {
    HomeLayout,
    DefaultLayout,
  },
  data() {
    return {};
  },
  metaInfo() {
    return {};
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  mounted() {},
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;700&display=swap');

*
  padding: 0
  margin: 0
  font-family: 'Noto Sans TC', serif

img
	width: 100%
	vertical-align: middle

a
	color: #000
	text-decoration: none

input:focus
  outline: none


.input-row
  display: block
  margin-bottom: 15px
  .input-title
    width: 110px
    text-align: left
    +dib
    .red
      font-size: 0.8rem
      color: $red-002
      +dib
    p
      font-size: 0.9rem
      +dib
  .input-style
    width: calc(100% - 110px)
    padding: 16px 15px
    border: none
    background-color: $gray-004
    font-size: 0.9rem
    line-height: 28px
    border-radius: 5px
    box-sizing: border-box
    +dib
    &:focus
      outline: none
  .check
    width: calc(100% - 110px)
    text-align: left
    +dib
    input
      +dib
    p
      padding-left: 10px
      font-size: 0.8rem
      +dib
  +rwd(540px)
    .input-title
      width: 80px
      .red
        // font-size: 0.8rem
      p
        // font-size: 0.9rem
    .input-style
      width: calc(100% - 80px)
      padding: 16px 15px
      // font-size: 0.9rem
      // line-height: 28px
    .check
      width: calc(100% - 80px)
      input
        width: 15px
      p
        width: calc(100% - 20px)
        // padding-left: 10px
        box-sizing: border-box

.main-btn
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
    padding: 15px 90px
    margin: 30px 0
    border-radius: 32px
html
  font-size: 20px
  +rwd(768px)
    font-size: 16px
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

#app
  background-color: #fff

.loading-mask
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  background-color: rgba(#000,.7)
  z-index: 101
  figure.loding-icon
    width: 50px
    +pstc5
</style>
