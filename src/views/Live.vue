<template lang="pug">
.live-wrapper
  .remark#flag(:class="{'fixed':isFixedVideo}")
    p 若需更換裝置觀看，請點擊右方“離開觀看”，可於另一裝置以相同票券序號登入觀看。
    .btn(@click="logoutApi") 離開觀看
  .fixed-box(:class="{'fixed':isFixedVideo}")
    .live-box
      div(style='padding:56.25% 0 0 0;position:relative;')
        iframe(src='https://player.vimeo.com/video/652846845?h=c30e89e084&badge=0&autopause=0&player_id=0&app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen='' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='SUNRIDER 直播')
      //- iframe(src='https://vimeo.com/event/1473882/embed/bef220b65c' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen='' style='position:absolute;top:0;left:0;width:100%;height:100%;')
    .title 聊天室
  .chatroom
    .chat-box#chatBox(@scroll="scrollChatBox")
      .chat-item(v-for="chat in chatList")
        figure.user-pic
          img(:src="chat.url")
        .user-info
          .name {{chat.name}}
          .chat {{chat.message}}
    .insert-box
      figure.user-pic
        img(:src="this.lineData.profilePicUrl")
      input.insert-txt(type="text" placeholder="新增留言" v-model.trim="userMsg" @keypress.enter="sendMsg")
      .send-btn(@click="sendMsg") 送出
    .disconnected(v-if="isDisconnected")
      p 聊天室斷線，請重新整理
    .arrow-down(
      :class="{'show':isScrollUp}"
      @click="showNewChat"
    )
      include ../assets/icon/icon-arrow-d.pug
  .btn-box
    img(src="@/assets/images/live-kv.jpg")
    a.kv-btn(href="https://shop.sunrider.com/home.asp" target="_blank") 立即搶購
  .popup(v-if="showPopup")
    .container
      p 您已有登入觀看直播的裝置，請先在原裝置離開觀看，或點擊此按鈕
      .main-btn.popup-btn(@click="logoutAllApi") 登出其他裝置直接觀看



</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Live",
  components: {},
  props: {},
  mixins: [],
  data() {
    return {
      userMsg: "",
      chatList: [],
      isDisconnected: false,
      isAllowSend: true,
      chatBoxHeight: 0,
      chatBoxPst: 0,
      showPopup: false,
      isFixedVideo: false,
    };
  },
  computed: {
    ...mapState(["isLoading", "lineData"]),
    isScrollUp() {
      return this.chatBoxPst < this.chatBoxHeight;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  sockets: {
    connecting() {
      console.log("正在連接");
    },
    connect() {
      console.log("聊天室連線");
    },
    disconnect() {
      console.log("聊天室斷線");
      alert("聊天室斷線，請重新整理");
      this.isDisconnected = true;
    },
    ChatMessage(data) {
      this.chatList.push(data);
      if (this.chatList.length > 200) {
        this.chatList.shift();
      }
      this.chatBoxHeight =
        document.getElementById("chatBox").scrollHeight -
        document.getElementById("chatBox").offsetHeight;
      if (!this.isScrollUp || data.lineId == this.lineData.lineId) {
        var chatBox = document.getElementById("chatBox");
        setTimeout(() => {
          chatBox.scrollTo({
            top: chatBox.scrollHeight,
            behavior: "smooth",
          });
        }, 1);
      }
    },
    logout(data) {
      console.log(data);
      if (data.lineId == this.lineData.lineId && data.token !== this.token) {
        alert("您目前已從其他裝置登入，將為您從此裝置登出。");
        this.$router.push({ name: "Home" });
      }
    },
  },
  methods: {
    ...mapActions([
      "setWatchStatus",
      "liveLogout",
      "liveLogoutAll",
      "checkLiveStatus",
    ]),
    handleScroll() {
      this.isFixedVideo =
        window.scrollY >
        document.getElementById("flag").offsetTop +
          document.getElementById("flag").offsetHeight
          ? true
          : false;
    },
    init() {
      // if (this.token == "") {
      this.lineLogin(process.env.VUE_APP_LIFF_ID_LIVE)
        .then(() => {
          // this.checkWatchStatus();
          this.checkLiveStatusApi();
        })
        .catch(() => {
          console.log("失敗");
        });
      // } else {
      //   this.checkWatchStatus();
      //   // this.$socket.connect();
      // }
    },
    checkWatchStatus() {
      this.setWatchStatus()
        .then((res) => {
          console.log(res);
          if (!res.success) {
            this.showPopup = true;
          } else {
            this.$socket.connect();
          }
        })
        .catch(() => {
          console.log("失敗");
        });
    },
    checkLiveStatusApi() {
      this.checkLiveStatus()
        .then((res) => {
          console.log("success");
          if (!res.isBinding) {
            this.$router.push({ name: "Exchange" });
          } else {
            this.checkWatchStatus();
          }
        })
        .catch((e) => {
          console.log(e);
          if (e == "userVerificationError") {
            this.init();
          }
          console.log("fail");
        });
    },
    logoutAllApi() {
      this.liveLogoutAll()
        .then((res) => {
          console.log(res);
          this.showPopup = false;
          this.$socket.connect();
        })
        .catch(() => {
          console.log("失敗");
        });
    },
    logoutApi() {
      this.liveLogout()
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Home" });
        })
        .catch(() => {
          console.log("失敗");
        });
    },
    sendMsg() {
      if (this.userMsg != "" && this.isAllowSend) {
        this.$socket.emit("ChatMessage", {
          lineId: this.lineData.lineId,
          name: this.lineData.name,
          url: this.lineData.profilePicUrl,
          message: this.userMsg,
        });
        this.isAllowSend = false;
        this.userMsg = "";
        setTimeout(() => {
          this.isAllowSend = true;
        }, 1000);
      }
    },
    scrollChatBox() {
      this.chatBoxPst = document.getElementById("chatBox").scrollTop;
    },
    showNewChat() {
      var chatBox = document.getElementById("chatBox");
      document.getElementById("chatBox").scrollTo({
        top: chatBox.scrollHeight,
        behavior: "smooth",
      });
    },
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
    margin-bottom: 0
    background-color: #fff
    box-sizing: border-box
    &.fixed
      margin-bottom: 450px
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
  .fixed-box
    width: 100%
    max-width: 768px
    position: relative
    z-index: 101
    &.fixed
      position: fixed
      top: 0px
      left: 0
      right: 0
      margin: auto
    .live-box
      width: 100%
      height: 370px
      background-color: #ccc
      position: relative
    .title
      padding: 20px 40px
      font-size: 1.1rem
      line-height: 40px
      color: $gray-001
      background-color: #fff
  .chatroom
    width: 100%
    position: relative
    box-sizing: border-box
    .chat-box
      min-height: 180px
      max-height: 400px
      padding: 0px 40px
      overflow-y: auto
      position: relative
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
            word-wrap: break-word
    .insert-box
      padding: 20px 40px
      background-color: #fff
      border-top: 1px solid $gray-002
      position: relative
      z-index: 2
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
        border-radius: 0px
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
    .disconnected
      width: 100%
      height: 100%
      background-color: rgba(#000,.8)
      position: absolute
      top: 0
      left: 0
      z-index: 3
      p
        width: 100%
        font-size: 1.2rem
        color: #fff
        text-align: center
        +pstc5
    .arrow-down
      width: 40px
      fill: $gray-002
      transition: .3s
      cursor: pointer
      position: absolute
      z-index: 1
      bottom: 60px
      left: 50%
      transform: translateX(-50%)
      &:hover
        fill: $gray-003
      &.show
        bottom: 100px
  .btn-box
    position: relative
    .kv-btn
      padding: 0.4% 4%
      font-size: 0.8rem
      color: $red-001
      border: 2px solid $red-001
      border-radius: 10px
      position: absolute
      top: 65%
      left: 40%
      transition: .3s
      &:hover
        color: #fff
        background-color: $red-001
  .popup
    width: 100%
    height: 100%
    background-color: rgba(#000,.5)
    position: fixed
    top: 0
    left: 0
    z-index: 200
    .container
      width: 90%
      padding: 20px
      max-width: 350px
      border-radius: 20px
      background-color: #fff
      text-align: center
      box-sizing: border-box
      +pstc5
      p
        padding-top: 20px
      .popup-btn
        padding: 15px 30px
  +rwd(540px)
    .remark
      padding: 20px
      &.fixed
        margin-bottom: 330px
      p
        width: calc(100% - 60px)
        line-height: 18px
      .btn
        width: 60px
    .fixed-box
      .live-box
        height: 270px
      .title
        padding: 20px
        line-height: 20px
    .chatroom
      .chat-box
        min-height: 100px
        padding: 0px 20px
        .chat-item
          figure.user-pic
            width: 40px
            vertical-align: top
          .user-info
            width: calc( 100% - 40px )
            padding-left: 10px
            vertical-align: top
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
      .arrow-down
        bottom: 40px
        &.show
          bottom: 80px
    .btn-box
      .kv-btn
        font-size: 0.6rem
        border-radius: 5px
    .popup
      .container
        .popup-btn
          margin: 15px 0
</style>
