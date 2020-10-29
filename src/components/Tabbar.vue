<template >
  <div class="tab">
    <div class="tabLine"
         :style='{"left":tabLeft}'></div>
    <div class="tabItem"
         v-for="(item,index) in labData"
         @click='tabClick(index)'
         :class="index==tabIndex?'active':''"
         :key='index'>
      {{item.text}}
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    labData: {
      type: Array,
      default: [],
    },
  },
})
export default class Tabbar extends Vue {
  tabIndex: any = 0;
  tabLeft: any = [];
  tabClick(index: number) {
    if (this.tabIndex == index) return;
    this.tabIndex = index;
    this.lineTo(index);
  }

  //线段位置
  lineTo(index: number = 0) {
    const length = (<any>this).labData.length;
    const maxlength = 100;
    const distance = 100 / length;
    const oneLine = distance / 2;
    this.tabLeft = oneLine + distance * index + "%";
  }

  mounted() {
    this.lineTo();
  }
}
</script>


<style lang="scss" scoped>
.tab {
  height: 40px;
  display: flex;
  justify-content: space-between;
  position: relative;
  .tabLine {
    position: absolute;
    width: 28px;
    height: 3px;
    background: #108ee9;
    bottom: 0;
    left: 0%;
    transform: translateX(-50%);
    transition: all 1s;
  }
  .tabItem {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: #909399;
  }
  .active {
    color: #108ee9;
  }
}
</style>