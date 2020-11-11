<template>
  <div>
    <div class="box">
      <Tabbar :labData='labDatas'></Tabbar>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Tabbar from "@/components/Tabbar.vue";
@Options({
  components: {
    Tabbar,
  },
})
export default class ShowTabbar extends Vue {
  labDatas: any = [
    {
      text: "全部",
      status: "",
      page: 1,
      flag: false,
      content: [],
    },
    {
      text: "待接收",
      status: "0",
      flag: false,
      page: 1,
      content: [],
    },
    {
      text: "进行中",
      status: "1",
      page: 1,
      flag: false,
      content: [],
    },
    {
      text: "待评价",
      status: "2",
      page: 1,
      flag: false,
      content: [],
    },
    {
      text: "已结束",
      status: "3",
      page: 1,
      flag: false,
      content: [],
    },
  ];
}
</script>



<style lang="scss" scoped>
.box {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  width: 100%;
}
</style>