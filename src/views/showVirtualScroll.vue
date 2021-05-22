<template>
  <div class="menu">
    <div class="vbox"
         ref="vboxs"
         style="height: 400px;"
         @scroll="vboxScroll">
      <div class="content"
           ref='contents'>
        <div v-for="(item,index) in newArray"
             :key="index">{{item}}</div>
      </div>
    </div>
    
  </div>
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import AppMeun from "@/components/AppMenu";

@Options({
  components: {
    // AppMeun
  },
  computed: {
    newArray() {
      // if(end>this.end)this.setData(this.end, end);
      // const end = this.labIndex + this.addNumbers;
      // console.log(this.end, end, "!23123");
      // if (this.end > end) {
      //   this.labIndex++;
      //   this.setData(end, this.end);
      // }
      return this.allArray.slice(this.start, this.end);
    },
  },
})
export default class ShowVirtualScroll extends Vue {
  start: any = 0;

  end: any = 20;

  addNumbers: any = 20;

  itemHeight: any = 30;

  labIndex: any = 1;

  allArray: Array<number> = [];

  bt: any = false;

  vboxScroll(e: any) {
    const h = parseInt((<any>this).$refs.contents.style.height);
    let t = this.start * this.itemHeight;
    const top = e.target.scrollTop;
    this.start = Math.floor(top / this.itemHeight);
    this.end = this.start + this.addNumbers;
    //绝对定位对相对定位的偏移量
    (<any>this).$refs.contents.style.transform = `translateY(${t}px)`;

    // console.log(this.$refs.contents.style.top)
    // const scrollHeight = e.target.scrollHeight;
    // const v: any = this.$refs.vboxs;
    // const vboxHeight = parseInt(v.style.height);
    // const reduces = scrollHeight - vboxHeight;
    // if (reduces - top <= 30) {
    //   if(this.bt)return;
    //   this.bt = true;
    //    this.setData(this.start, this.end);
    // }else{
    //    this.bt = false;
    // }
  }

  //创建数据方法
  setData(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this.allArray.push(i);
    }

   (<any>this).$refs.contents.style.height = this.itemHeight * end + "px";
  }

  mounted() {
    console.log("!23123");
    this.setData(this.start, 10000);
  }
}
</script>


<style lang="scss" scoped>
.menu {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .vbox {
    position: relative;
    overflow-y: auto;
    transform-style: preserve-3d;
  }
  .content {
    text-align: center;
    div {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>