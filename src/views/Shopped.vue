<template lang="pug">
.shopped-wrapper
  Success(
    title="完成購票"
    content="3秒後自動跳轉查看票券序號<br>若未跳轉請點擊以下按鈕"
    :showBtn="true"
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
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "Ticket" });
    }, 3000);
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
