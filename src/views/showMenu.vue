<template>
  <div class="menu">
    <AppMeun></AppMeun>
  </div>
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppMeun from "@/components/AppMenu.vue";

@Options({
  components: {
    AppMeun
  }
})
export default class ShowMenu extends Vue {

}
</script>


<style lang="scss" scoped>
.menu {
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>