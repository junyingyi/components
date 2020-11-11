<template>
  <div class="swiperBox">
    <div class="box"
         style="width: 300px;
  height: 300px;">
      <Swiper :config="config"></Swiper>
    </div>
    <div class="text"
         @click="btn">暂只支持上下滚动( <span>点我切换{{config.auto?'自动':'手动'}}</span> )</div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Swiper from "@/components/Swiper.vue";
@Options({
  components: {
    Swiper,
  },
})
export default class ShowSwiper extends Vue {
  config: any = {
    auto: true,
    time: 2000,
  };

  btn() {
    this.config.auto = !this.config.auto;
  }
}
</script>



<style lang="scss" scoped>
.swiperBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box {
  overflow: hidden;
}
.text {
  height: 100px;
  line-height: 100px;
  text-align: center;
  span {
    color: red;
  }
}
.but {
  border: none;
  background-color: transparent;
  outline: none; //消除默认点击蓝色边框效果
}
</style>