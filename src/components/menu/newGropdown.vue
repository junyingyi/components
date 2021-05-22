<template>
  <!-- <el-dropdown @command="handleCommand"
               placement="right"> -->
  <!-- <i class="el-icon-plus"
       v-show="addFlag"
       @click="addMenuAction"></i> -->
  <!-- <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="1">
        <i class="el-icon-s-fold"></i>
        <span :style="{'color':notMenu?'#ccc':''}">子菜单</span>
      </el-dropdown-item>
      <el-dropdown-item command="2">
        <i class="el-icon-chat-dot-round"></i>
        回复文本消息
      </el-dropdown-item>
      <el-dropdown-item command="3">
        <i class="el-icon-link"></i>
        打开H5链接
      </el-dropdown-item>
      <el-dropdown-item command="4">
        <i class="el-icon-phone-outline"></i>
        拨打指定号码
      </el-dropdown-item>
      <el-dropdown-item command="5">
        <i class="el-icon-location-outline"></i>
        打开地图导航
      </el-dropdown-item>
    </el-dropdown-menu> -->
  <!-- </el-dropdown> -->
  <!-- <div> -->
  <div v-show="addFlag"
       @click="addMenuAction"
       class="addmenu">
    +
    <div class="menu">
      <div><span :style="{'color':notMenu?'#ccc':''}">子菜单</span></div>
      <div>回复文本消息</div>
      <div>打开H5链接</div>
      <div>拨打指定号码</div>
      <div>打开地图导航</div>
    </div>
  </div>
  <!-- </div> -->
</template>



<script>
export default {
  props: {
    options: Array,
    notMenu: Boolean,  //二级是否可选菜单
  },
  data () {
    return {
      addFlag: true,

    }
  },
  methods: {
    addMenuAction () {

    },
    handleCommand (index) {
      if (this.options) {
        switch (index) {
          case '1':
            if (this.notMenu) return
            this.options.push({ name: '子菜单', children: [], twoStatus: true });
            break;
          case '2':
            this.options.push({ name: '文本消息', type: 'TEXT', });
            break;
          case '3':
            this.options.push({ name: 'H5链接', type: 'LINK', content: '' });
            break;
          case '4':
            this.options.push({ name: '拨号', type: 'DIAL', content: '' });
            break;
          case '5':
            this.options.push({ name: '地图', type: 'MAP', content: '' });
            break;
        }

      } else {
        this.$emit('handleCommand', index)
      }
    },
  }
}
</script>



<style lang="scss" scoped>
i {
  font-size: 30px;
  font-style: normal;
  position: relative;
}
.addmenu {
  font-size: 30px;
  font-style: normal;
  position: relative;
  display: inline-block;
  .menu {
    display: none;
    position: absolute;
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    width: 100px;
    box-shadow: 0px 2px 2px 2px #ccc;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    div {
      border-bottom: 1px solid #ccc;
      &:hover {
        color: #4192ec;
        border-bottom: 2px solid #4192ec;
      }
    }
  }
  &:hover {
    .menu {
      display: block;
    }
  }
}
</style>