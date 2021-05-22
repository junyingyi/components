<template>
  <div>
    <transition-group name="bounce">
      <div class='div'
           v-for="item in tabdata"
           :key="item">{{item}}</div>
    </transition-group>

    <div class="btn">
      <div @click="add">新增一个</div>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  // watch: {
  //   labindex:{
  //     handler(val,old){
  //       console.log(val,old)
  //     },
  //     deep:true
  //   }
  // }
})
export default class List extends Vue {
  tabdata: any = [];
  // labindex: any = {
  //   index:0
  // }

  mounted() {
    for (let i: any = 0; i < 5; i++) {
      setTimeout(
        (j: any) => {
          this.tabdata.push(j);
        },
        200 * i,
        i
      );
    }
  }
  add() {
    // this.labindex.index++;
    let index: any = this.tabdata.length-1;
    index++;
    this.tabdata.push(index);
  }
}
</script>



<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s ease-in-out;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.div {
  text-align: center;
  color: #fff;
  &:nth-child(odd) {
    background-color: #108ee9;
  }
  &:nth-child(even) {
    background-color: greenyellow;
  }
  &:hover {
    background-color: gray;
  }
}

.btn {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 100px;
    height: 40px;
    background-color: #108ee9;
    text-align: center;
    line-height: 40px;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
  }
}
</style>