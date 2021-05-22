<template>
  <div class="home">
    <div
      class="item"
      @click="gotoPath(item.path)"
      v-for="(item,index) in arrData"
      :key="index"
    >{{item.text}}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {
  arrData: object[] = [
    { text: "翻牌滚动", path: "/ShowRollover" },
    { text: "虚拟列表", path: "/ShowVirtualScroll" },
    { text: "手风琴", path: "/showCollapse" },
    { text: "星级评价", path: "/showStart" },
    { text: "tab切换", path: "/showTabbar" },
    { text: "swiper", path: "/showSwiper" },
    { text: "动画列表", path: "/showList" },
    { text: "动态菜单", path: "/showMenu" },
    { text: "计数器", path: "/showNumber" },

  ];

  // 不能使用箭头函数  否则this指向当前实例
  gotoPath(path: string) {
    this.$router.push(path);
  }
}
</script>


<style lang="scss" scoped>
.item {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
</style>
