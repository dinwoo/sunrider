<template lang="pug">
.live-wrapper
  .remark
    p 若需更換裝置觀看，請點擊右方“離開觀看”，可於另一裝置以相同票券序號登入觀看。
    .btn 離開觀看
  .live-box
  .chatroom
    .title 聊天室
    .chat-box
      .chat-item(v-for="item in 15")
        figure.user-pic
          img(src="@/assets/images/user-pic.jpg")
        .user-info
          .name User01
          .chat 聊天內容聊天內容聊天內容聊天內容聊天內容聊天內容
    .insert-box
      figure.user-pic
        img(src="@/assets/images/user-pic.jpg")
      input.insert-txt(type="text" placeholder="新增留言")
      .send-btn 送出
  .btn-box
    .main-btn 逛逛SUNRIDER商品


</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Live",
  components: {},
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

.live-wrapper
  .remark
    width: 100%
    padding: 20px 40px
    box-sizing: border-box
    p
      width: calc(100% - 80px)
      font-size: 0.7rem
      line-height: 22px
      color: $red-001
      +dib
    .btn
      width: 80px
      font-size: 0.9rem
      line-height: 28px
      color: $blue-001
      text-decoration: underline
      cursor: pointer
      text-align: right
      +dib
  .live-box
    width: 100%
    height: 370px
    background-color: #ccc
  .chatroom
    width: 100%
    box-sizing: border-box
    .title
      padding: 20px 40px
      font-size: 1.1rem
      line-height: 40px
      color: $gray-001
    .chat-box
      height: 400px
      padding: 0px 40px
      overflow-y: auto
      .chat-item
        padding: 5px 0
        figure.user-pic
          width: 60px
          border-radius: 50%
          overflow: hidden
          +dib
        .user-info
          width: calc( 100% - 60px )
          padding-left: 20px
          box-sizing: border-box
          +dib
          .name
            font-size: 0.8rem
            line-height: 28px
            color: $gray-002
          .chat
            font-size: 0.9rem
            line-height: 28px
            color: $gray-003
    .insert-box
      padding: 20px 40px
      border-top: 1px solid $gray-002
      figure.user-pic
        width: 60px
        border-radius: 50%
        overflow: hidden
        +dib
      input.insert-txt
        width: calc( 100% - 250px )
        padding: 10px 0
        margin: 0 20px
        font-size: 0.9rem
        box-sizing: border-box
        border: none
        border-bottom: 1px solid $gray-003
        +dib
      .send-btn
        padding: 16px 56px
        font-size: 0.9rem
        color: $red-001
        border: 1px solid $red-001
        border-radius: 30px
        cursor: pointer
        transition: .3s
        +dib
        &:hover
          color: #fff
          background-color: $red-001
  .btn-box
    padding: 50px 0
    text-align: center
    background-image: url(../assets/images/banner-product.png)
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
  +rwd(540px)
    .remark
      padding: 20px
      p
        width: calc(100% - 60px)
        // font-size: 0.7rem
        line-height: 18px
      .btn
        width: 60px
        // font-size: 0.9rem
        // line-height: 28px
    .live-box
      height: 270px
    .chatroom
      .title
        padding: 20px
        // font-size: 1.1rem
        line-height: 20px
      .chat-box
        height: 400px
        padding: 0px 20px
        .chat-item
          // padding: 5px 0
          figure.user-pic
            width: 40px
            vertical-align: top
          .user-info
            width: calc( 100% - 40px )
            padding-left: 10px
            vertical-align: top
            .name
              // font-size: 0.8rem
              // line-height: 28px
            .chat
              // font-size: 0.9rem
              // line-height: 28px
      .insert-box
        padding: 20px
        figure.user-pic
          width: 40px
        input.insert-txt
          width: calc( 100% - 150px )
          padding: 5px 0
          margin: 0 10px
          // font-size: 0.9rem
        .send-btn
          padding: 7px 28px
          font-size: 1rem
          border-radius: 20px
    .btn-box
      padding: 30px 0
</style>
