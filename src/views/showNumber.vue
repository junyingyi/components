<template >
  <div class="box">
    <inputNumber @reduce='reduce'
                 @add='add'>
      <input v-model="value"
             class="input"
             @blur='changeAction' />
    </inputNumber>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import inputNumber from "@/components/numberInput.vue";
@Options({
  components: {
    inputNumber,
  },
})
export default class ShowNumber extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  value: number = 1;
  
  reduce() {
    if (this.value <= 1) return;
    this.value--;
  }
  add() {
    this.value++;
  }
  changeAction() {
    !this.value && (this.value = 1);
  }
}
</script>

<style lang="scss" scoped>
.box {
  // width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
input {
  height: 30px;
  border: 0px;
  padding-left: 2rem;
  padding-left: 0;
  width: 100%;
  text-align: center;
  &:focus {
    border-color: #fff;
    outline: 0;
  }
}
</style>