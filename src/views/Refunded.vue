<template lang="pug">
.refunded-wrapper
  Success(
    title="退票申請已送出"
    content="確認退票申請後約7-10個工作日刷退至<br>原刷卡購票之信用卡帳戶。退款時間將依發卡行<br>及銀行之作業時間為準約需10-14工作天，請您耐心等候。"
    :showBtn="false"
  )

</template>

<script>
import { mapState, mapActions } from "vuex";
import Success from "@/components/Success.vue";

export default {
  name: "Refunded",
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
  mounted() {},
  methods: {
    ...mapActions([""]),
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.refunded-wrapper
</style>
