<template>
  <div class="home">
        <Rollover :config="config"></Rollover>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//组件
import Rollover from '@/components/Rollover.vue'

@Options({
  components: {
    Rollover
  },
})
export default class ShowRollover extends Vue {

    config: object = {
        color: ["#8AC6FF", "#5AAFFF", "#0379E6", "#2E9BFF"],
        default: 9,
        add: 236.12,
    }
}
</script>