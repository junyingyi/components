<template>
  <div>
    <ShowLists></ShowLists>
  </div>
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ShowLists from "@/components/List.vue";

@Options({
  components: {
    ShowLists,
  },
})
export default class ShowList extends Vue {


}
</script>


<style lang="scss" scoped>
</style>