<template>
  <div class="contentBox">
    <div class="companyName">
      <div>{{collapseName}}</div>
      <div>
        <img
          :class="isOpen ? 'rightArrowImg' : 'notrightArrowImg'"
          src="@/assets/rightArrowImg.png"
          alt
        />
      </div>
    </div>
    <view :class="isOpen ? 'content-open' : 'content-close'">
      <view
        class="box"
        v-for="(item,index) in config"
        :key="index"
        :class="isOpen ? 'item-open' : 'item-close'"
      >
        <div class="lable">{{item.label}}</div>
        <div class="lableValue">
          <span v-if="item.type == 'text'">{{BindData[item.key]}}</span>
          <img v-if="item.type == 'img'" :src="BindData[item.key]" alt />
        </div>
      </view>
    </view>
  </div>
</template>




<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    collapseName: {
      type: String,
      default: null,
    },
    BindData: {
      type: Object,
      default: null,
    },
    config: {
      type: Array,
      default: null,
    },
  },
})
export default class CollapseItem extends Vue {
  collapseName!: string;
  BindData!: object;
  isOpen: any = false;
}
</script>


<style lang="scss" scoped>
.contentBox {
  overflow: hidden;
  background: #e8eaef;
  border-radius: 16px;
  margin-bottom: 24px;
  padding: 0 28px;
  .companyName {
    height: 128px;
    display: flex;
    align-items: center;
    div {
      height: 100%;
      &:nth-child(1) {
        flex: 1;
        display: flex;
        align-items: center;
      }
      &:nth-child(2) {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 11px;
          height: 20px;
        }
      }
    }
  }

  .box {
    display: flex;
    width:100%;
    .lable {
      width: 175px;
      font-size: 26px;
      font-weight: 500;
      color: #949599;
    }
    .lableValue {
      flex: 1;
      font-size: 26px;
      font-weight: 500;
      color: #313133;
      img {
        width: 180px;
        height: 120px;
      }
    }
  }
}
.rightArrowImg {
  transform: rotate(90deg);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.25, 1);
}
.notrightArrowImg {
  transform: rotate(0deg);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.25, 1);
}
.content-open {
  height: 460px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.25, 1);
}
.content-close {
  height: 0px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.25, 1);
}
.item-open {
  height: auto;
  margin-bottom: 25px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.25, 1);
}
.item-close {
  opacity: 0;
  overflow: hidden;
  height: 0px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.25, 1);
}
</style>