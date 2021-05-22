<template>
  <div class="h">
    <span class="childMenu"
          v-for="(item,index) in newMeunList"
          :key="index">
      <i class="common el-icon-edit-outline"
         @click="editMenuAction(item)"></i>
      <i class="common el-icon-sort"
         :class="item.oneStatus?'sort':''"
         @click="sortMenuAction">
      </i>
      <i class="common el-icon-close"
         @click="deleteMenuAction(index)"></i>
      <span>{{item.name}}</span>
      <div class="boxNone"
           v-if="item.oneStatus">
        <div class="content">
          <childMenu :meunList='item.children'></childMenu>
        </div>
        <div>
          <newGropdown v-if="item.oneStatus&&item.children.length<6"
                       @handleCommand='handleCommand'
                       :options='item.children'></newGropdown>
        </div>
      </div>

      <div class="twoNone"
           v-if="item.twoStatus">
        <div class="content">
          <childMenu :meunList='item.children'></childMenu>
        </div>
        <div>
          <newGropdown v-if="item.twoStatus&&item.children.length<6"
                       @handleCommand='handleCommand'
                       :notMenu='true'
                       :options='item.children'></newGropdown>
        </div>
      </div>
    </span>
    <!-- <menuEdit ref="menuEdit"></menuEdit> -->
  </div>
</template>



<script>
export default {
  name: "childMenu",
  components: {
    // menuEdit: () => import('../menuEdit'),
    newGropdown: () => import("./newGropdown")
  },
  props: {
    meunList: Array,//组件数据
  },
  computed: {
    newMeunList () {
      // console.log(this.meunList)
      return this.meunList
    }
  },
  methods: {
    sortMenuAction () {

    },
    editMenuAction (item) {
      var className;
      switch (item.type) {
        case 'TEXT':
          className = 'el-icon-chat-dot-round'
          break;
        case 'LINK':
          className = 'el-icon-link'
          break;
        case 'DIAL':
          className = 'el-icon-phone-outline'
          break;
        case 'MAP':
          className = 'el-icon-location-outline'
          break;
        default:
          className = 'el-icon-s-fold'
          break;
      }
      this.$refs.menuEdit.dialogVisible = true;
      this.$nextTick(_ => {
        this.$refs.menuEdit.init(item.name, className, item.type, item);
        console.log(item, "传入的数据")
      })
    },
    deleteMenuAction (index) {
      this.meunList.splice(index, 1);
    },
    handleCommand (index) {
    },
  }
}
</script>



<style lang="scss" scoped>
.h {
  display: inline-block;
  // position: relative;
}
.childMenu {
  display: inline-block;
  font-size: 14px;
  line-height: 42px;
  margin: 0 20px;
  position: relative;

  .common {
    padding: 0 1px;
  }
  .el-icon-sort {
    transform: rotate(0deg);
    position: relative;
  }
  .sort {
    transform: rotate(90deg);
  }

  .boxNone,
  .twoNone {
    position: absolute;
    //  bottom:-45px;
    border-radius: 10px;
    //  background-color: #fff;
    display: none;
    box-shadow: 0px 2px 2px 2px #ccc;
    .content {
      width: 200px;
      display: flex;
      flex-direction: column;
    }
  }
  .boxNone {
    left: 50%;
    transform: translateX(-50%);
  }
  .twoNone {
    top: 0;
    right: -200px;
  }
}
.childMenu:hover {
  cursor: pointer;
  // color: #4192ec;
  border-bottom: 2px solid #4192ec;
  .boxNone {
    display: block;
    text-align: center;
  }
  .childMenu:hover {
    cursor: pointer;
    // color: #4192ec;
    border-bottom: 2px solid #4192ec;
    .twoNone {
      display: block;
      text-align: center;
    }
  }
}
</style>