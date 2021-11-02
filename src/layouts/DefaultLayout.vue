<template lang="pug">
.default-wrapper
  Header
  .default-container
    router-view
  Footer
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Default",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["shopCartData"]),
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("shopCartData")) !== null) {
      this.setShopCartData(JSON.parse(localStorage.getItem("shopCartData")));
    }
    window.onbeforeunload = () => {
      localStorage.setItem("shopCartData", JSON.stringify(this.shopCartData));
    };
  },
  methods: {
    ...mapMutations({
      setShopCart: "SET_SHOPCART",
      setMenu: "SET_MENU",
      setShopCartData: "SET_SHOPCART_DATA",
    }),
  },
  watch: {
    "$route.name": function() {
      window.scrollTo(0, 0);
      this.setMenu(false);
      this.setShopCart(false);
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.default-wrapper
  max-width: 768px
  padding-top: 110px
  margin: auto
  background-color: #fff
  box-shadow: 0 0 10px #ccc
  .default-container
    width: 100%
  +rwd(540px)
    padding-top: 64px
    .default-container

article
  padding-top: 82px
  +rwd(768px)
    padding-top: 65px
</style>
