<template lang="pug">
svg.svg-icon
  use(:xlink:href="`#${iconName}`")

</template>

<script>
export default {
  name: "SvgIcon",
  components: {},
  props: {
    iconName: {
      typer: String,
    },
  },
  mixins: [],
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="sass" scoped>
.svg-icon
  width: 100%
  height: 100%
  overflow: hidden
</style>
