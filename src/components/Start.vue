<template>
  <div class="start">
    <div class="startNumber">
      <img :src='item'
           v-for="(item,index) in startData"
           @mouseenter="mouseenter(index)"
           @click='addImg(index)'
           :key="index">
    </div>
    <div class="text">
      如果对服务感到满意请给个好评吧
    </div>
  </div>
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";

// 装饰器
@Options({
  props: {
    number: {
      type: [String, Number],
      default: 0,
    },
  },
})
export default class Start extends Vue {
  number: any = 0;
  startIndex: any = 0;
  startData: Array<string> = [];
  //创建星星
  startCreate(number: any) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const startSrc = require("@/static/start.png");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const unStartSrc = require("@/static/unStart.png");
    const numbers = 5;
    this.startData = [];
    const start = numbers - number;
    for (let i = 0; i < number; i++) {
      this.startData.push(startSrc);
    }
    for (let i = 0; i < start; i++) {
      this.startData.push(unStartSrc);
    }
  }
  addImg(index: any) {
    this.startIndex = index + 1;
    this.startCreate(this.startIndex);
    this.$emit("addemit", this.startIndex);
  }
  mouseenter(e: any) {
    this.startCreate(e+1);
  }

  mounted() {
    this.startCreate(this.number);
  }
}
</script>


<style lang="scss" scoped>
.start {
  height: 169px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .startNumber {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
  }
  .text {
    font-size: 14px;
    color: #949699;
    text-align: center;
    margin-bottom: 49rpx;
  }
}
</style>