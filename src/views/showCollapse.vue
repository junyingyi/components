<template>
  <div class="home">
    <div :key="index"
         v-for="(item,index) in datas">
      <Collapse :collapseName="'深圳市三栖科技有限公司'"
                :config="collapseConfig"
                @click="openDetail(index)"
                :BindData="item"
                :ref="'collapse'+index"></Collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//组件
import Collapse from "@/components/CollapseItem.vue";

@Options({
  components: {
    Collapse,
  },
})
export default class ShowRollover extends Vue {
  collapseConfig: object[] = [
    {
      label: "经销商地址",
      type: "text",
      key: "dealerAddress",
    },
    {
      label: "经销商介绍",
      type: "text",
      key: "dealerAddress",
    },
    {
      label: "营业执照",
      type: "img",
      key: "dealerLicense",
    },
    {
      label: "门店照片",
      type: "img",
      key: "dealerPic",
    },
  ];
  datas: object[] = [
    {
      dealerAddress: "测试数据",
      dealerLicense: require("@/assets/logo.png"),
      dealerPic: require("@/assets/logo.png"),
    },
    {
      dealerAddress: "测试数据",
      dealerLicense: require("@/assets/logo.png"),
      dealerPic: require("@/assets/logo.png"),
    },
  ];

  lastIndex: number = 0;
  op: boolean = false;

  //手风琴
  openDetail(index: number) {
    if (index != this.lastIndex && this.lastIndex >= 0) {
      (<any>this).$refs["collapse" + this.lastIndex].isOpen = false;
      (<any>this).$refs["collapse" + index].isOpen = !(<any>this).$refs[
        "collapse" + index
      ].isOpen;
    } else {
      (<any>this).$refs["collapse" + index].isOpen = !(<any>this).$refs[
        "collapse" + index
      ].isOpen;
    }
    this.lastIndex = index;
  }
}
</script>


<style lang="scss" scoped>
.id {
  width: 100px;
  height: 100px;
  background-color: red;
}

.close {
  width: 100px;
  height: 100px;
  transition: all 1s cubic-bezier(0.25, 1, 0.25, 1);
}
.open {
  width: 200px;
  height: 200px;
  transition: all 1s cubic-bezier(0.25, 1, 0.25, 1);
}
</style>