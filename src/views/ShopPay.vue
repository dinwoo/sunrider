<template lang="pug">
.shop-pay-wrapper
  section.main
    .title
      .icon
        include ../assets/icon/icon-shopcart.pug
      p 我的購物車
    .shopcart-box
      ShopcartItem.product-item(
        v-for="(item,index) in shopCartData"
        :key="index"
        :shopCartItem="item"
        @removeProduct="removeProduct"
      )
    .title
      .icon
        include ../assets/icon/icon-member.pug
      p 聯絡人資料
      .remark *號為必填
    .member-form
      label.input-row.name
        .input-title
          span.red *
          p 姓 名
        input.input-style(type="text" v-model="name")
      .gender-box
        label.gender
          input(type="radio" name="gender" v-model="gender" value="female")
          p 女士
        label.gender
          input(type="radio" name="gender" v-model="gender" value="male")
          p 先生
      label.input-row
        .input-title
          span.red *
          p 聯絡手機
        input.input-style(type="phone" placeholder="ex:0911222333" v-model="phone" maxLength="10")
      label.input-row
        .input-title
          span.red *
          p Email
        input.input-style(type="email" placeholder="ex:name@example.com" v-model="email")
      label.input-row
        .input-title
          p 會員編號
        input.input-style(type="text" v-model="memberCode")
      .input-row
        .input-title
        label.check
          input(type="checkbox" v-model="check")
          p 我已閱讀並同意購票說明及注意事項
      .main-btn(@click="postOrderApi") 前往付款
      

</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import ShopcartItem from "@/components/ShopcartItem.vue";

export default {
  name: "ShopPay",
  components: { ShopcartItem },
  props: {},
  mixins: [],
  data() {
    return {
      name: "",
      gender: "",
      phone: "",
      email: "",
      memberCode: "",
      check: false,
    };
  },
  computed: {
    ...mapState(["isLoading", "shopCartData"]),
    amount() {
      return this.$store.getters.totalPrice;
    },
    productItems() {
      return this.shopCartData.map((item) => {
        return {
          productId: item.id,
          qty: item.num,
        };
      });
    },
  },
  created() {},
  mounted() {
    if (!this.shopCartData.length) {
      alert("購物車為空，將回到購票頁");
      this.$router.push({ name: "Product" });
    }
    if (this.token == "") {
      this.lineLogin(process.env.VUE_APP_LIFF_ID_SHOPPAY)
        .then(() => {
          console.log("success");
        })
        .catch(() => {
          console.log("error");
        });
    }
  },
  methods: {
    ...mapActions(["postOrder"]),
    ...mapMutations({
      clearShopCartData: "CLEAR_SHOPCART_DATA",
    }),
    postOrderApi() {
      if (!this.shopCartData.length) {
        alert("購物車為空，將回到購票頁");
        this.$router.push({ name: "Product" });
      }
      if (this.name == "") {
        alert("請填寫姓名");
        return false;
      } else if (this.gender == "") {
        alert("請勾選性別");
        return false;
      } else if (this.phone == "") {
        alert("請填寫聯絡手機");
        return false;
      } else if (!this.verifyPhone(this.phone)) {
        alert("聯絡手機格式錯誤");
        return false;
      } else if (this.email == "") {
        alert("請填寫Email");
        return false;
      } else if (!this.verifyEmail(this.email)) {
        alert("Email格式錯誤");
        return false;
      } else if (!this.check) {
        alert("請閱讀並同意購票說明及注意事項");
        return false;
      }

      this.postOrder({
        amount: String(this.amount),
        paidUserName: this.name,
        paidUserGender: this.gender,
        paidUserPhone: this.phone,
        paidUserEmail: this.email,
        paidMemberCode: this.memberCode,
        items: this.productItems,
        frontendUrl: window.location.origin + "/shopped",
      })
        .then((res) => {
          this.clearShopCartData([]);
          window.location.href = res.item;
        })
        .catch((e) => {
          console.log(e);
          console.log("fail");
        });
    },
    removeProduct() {
      if (!this.shopCartData.length) {
        alert("購物車為空，將回到購票頁");
        this.$router.push({ name: "Product" });
      }
    },
    // checkPhone(e) {
    //   console.log(e);
    //   if (e.keyCode < 48 || e.keyCode > 57) {
    //     console.log(this.phone);
    //     this.phone.replace(e.key, "");
    //   }
    // },
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.shop-pay-wrapper
  section.main
    .title
      width: 100%
      padding: 20px 40px
      background-color: $gray-005
      box-sizing: border-box
      position: relative
      .icon
        width: 30px
        height: 30px
        fill: $gray-001
        +dib
      p
        padding-left: 7px
        font-size: 1rem
        line-height: 28px
        font-weight: bold
        color: $gray-001
        +dib
      .remark
        font-size: 0.9rem
        line-height: 28px
        color: $red-002
        position: absolute
        top: 50%
        right: 40px
        transform: translateY(-50%)
    .shopcart-box
      width: 100%
      padding: 25px 40px
      box-sizing: border-box
      .product-item
        & + .product-item
          margin-top: 45px
    .member-form
      width: 100%
      padding: 25px 40px
      text-align: center
      box-sizing: border-box
      .name
        width: calc(100% - 230px)
        +dib
      .gender-box
        width: 230px
        margin-bottom: 15px
        +dib
        .gender
          width: 50%
          text-align: right
          +dib
          input
            +dib
          p
            padding-left: 10px
            +dib
    +rwd(540px)
      .title
        padding: 10px 20px
        .icon
          width: 20px
          height: 20px
        p
          // font-size: 1rem
          // line-height: 28px
        .remark
          // font-size: 0.9rem
          // line-height: 28px
          right: 20px
      .shopcart-box
        padding: 20px
        .product-item
          & + .product-item
            margin-top: 25px
      .member-form
        padding: 20px
        .name
          width: calc(100% - 130px)
        .gender-box
          width: 130px
          // margin-bottom: 15px
          .gender
            input
            p
              // padding-left: 10px
</style>
