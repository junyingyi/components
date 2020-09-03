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
    { text: "手风琴", path: "/showCollapse" },
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
