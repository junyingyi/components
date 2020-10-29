<template>
  <div id="imgbox"
       @touchStart="touchStart"
       @touchMove="touchMove"
       @touchEnd="touchEnd">
    <div class="item"
         v-for="(item,index) in divData"
         :key="index"
         :style="{'background':item.bgc}">{{item.text}}</div>

  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    config: {
      type: Object,
      default: {
        auto: false,
      },
    },
  },
  computed: {
    newAuto: function () {
      return this.config.auto;
    },
  },
  watch: {
    newAuto(val) {
      console.log(val, this.timeOut);
      !val ? clearInterval(this.timeOut) : this.autoMove();
    },
  },
})
export default class Swiper extends Vue {
  divData: object[] = [
    {
      text: "swiper1",
      bgc: "yellow",
    },
    {
      text: "swiper2",
      bgc: "red",
    },
  ];
  start: number = 0;
  end: number = 0;
  index: number = 0;
  timeOut: any = null;
  //swiper处理
  handleSwiper(dom: any, length: number) {
    let Y = 0;
    let index: any = 0;
    if (!(<any>this).config.auto) return;
    this.timeOut = setInterval(() => {
      if (Y <= -300 * (length - 1)) {
        Y = 0;
        index = 0;
      } else {
        Y -= 300;
        index++;
      }
      dom.style.transform = `translateY(${Y}px)`;
    }, (<any>this).config.time);
  }

  touchStart(e: any) {
    if ((<any>this).config.auto) return;
    this.start = e.changedTouches[0].screenY;
  }
  touchEnd(e: any) {
    if ((<any>this).config.auto) return;
    const end: any = e.changedTouches[0].screenY;
    const dom: any = document.getElementById("imgbox");
    const height = dom.parentNode.style.height.replace("px", "");
    const move = end - this.start;
    if (move >= 100) {
      this.index -= 1;
      if (this.index < 0) {
        dom.style.transform = `translateY(0px)`;
        this.index = 0;
        return;
      }
      dom.style.transform = `translateY(${height * this.index}px)`;
    } else if (move <= -100) {
      this.index += 1;
      if (this.index >= this.divData.length) {
        this.index -= 1;
      }
      dom.style.transform = `translateY(${-height * this.index}px)`;
    } else {
      dom.style.transform = `translateY(${height * this.index}px)`;
    }
  }
  touchMove(e: any) {
    if ((<any>this).config.auto) return;
    const move = e.changedTouches[0].screenY;
    const distance = move - this.start;
    const dom: any = document.getElementById("imgbox");
    const height = dom.parentNode.style.height.replace("px", "");
    dom.style.transform = `translateY(${
      distance + (-height * this.index + 1)
    }px)`;
  }

  autoMove() {
    const dom: any = document.getElementById("imgbox");
    this.handleSwiper(dom, this.divData.length);
  }

  mounted() {
    this.autoMove();
  }
}
</script>



<style lang="scss" scoped>
#imgbox {
  width: 100%;
  height: 100%;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  -webkit-transform: translateZ(0px);
  .item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>