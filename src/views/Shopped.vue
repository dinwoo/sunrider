<template lang="pug">
.shopped-wrapper
  Success(
    :showIcon="isSuccess"
    :title="isSuccess?'完成購票':'交易失敗'"
    :content="isSuccess?'3秒後自動跳轉查看票券序號<br>若未跳轉請點擊以下按鈕':`${$route.query.msg}<br>請重新訂購`"
    :showBtn="true"
    :routeLink="isSuccess?'Ticket':'Product'"
    :btnTxt="isSuccess?'前往查看票券序號':'前往商品頁'"
  )

</template>

<script>
import { mapState, mapActions } from "vuex";
import Success from "@/components/Success.vue";

export default {
  name: "Shopped",
  components: { Success },
  props: {},
  mixins: [],
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading"]),
    isSuccess() {
      return this.$route.query.result == "1" ? true : false;
    },
  },
  created() {},
  mounted() {
    if (this.isSuccess) {
      setTimeout(() => {
        this.$router.push({ name: "Ticket" });
      }, 3000);
    }
  },
  methods: {
    ...mapActions([""]),
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.shopped-wrapper
</style>
