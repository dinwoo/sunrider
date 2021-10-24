<template lang="pug">
#app
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
