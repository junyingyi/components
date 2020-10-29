<template>
  <div>
    <Start @addemit='addemit'></Start>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Start from "@/components/Start.vue";
// 装饰器
@Options({
  components: {
    Start,
  },
})
export default class ShowStart extends Vue {
  startNumber: any = 0;
  addemit(number: any) {
    this.startNumber = number;
  }
}
</script>