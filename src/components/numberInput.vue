<template>
  <div class="number">
    <div class="reduce"
         @click='reduce'>-</div>
    <div class="input">
      <slot></slot>
    </div>
    <div class="add"
         @click='add'>+</div>
  </div>
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Number extends Vue {
  reduce() {
    this.$emit("reduce");
  }
  add() {
    this.$emit("add");
  }
}
</script>




<style lang="scss" scoped>
.number {
  width: 130px;
  height: 34px;
  display: flex;
  &:hover {
    border: 1px solid #409eff;
    box-sizing: border-box;
  }
  .reduce,
  .add {
    width: 32px;
    height: 32px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    background: #f5f7fa;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .input {
    flex: 1;
    height: 100%;
  }
}
</style>



