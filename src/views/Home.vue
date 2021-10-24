<template lang="pug">
.home-wrapper

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  props: {},
  mixins: [],
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading", "api"]),
  },
  created() {
    this.getApiHandler();
  },
  mounted() {},
  methods: {
    ...mapActions(["getApi"]),
    getApiHandler() {
      Promise.all([this.getApi()])
        .then(() => {
          console.log("success");
        })
        .catch((e) => {
          console.log(e);
          console.log("fail");
        });
    },
  },
  watch: {},
};
</script>
