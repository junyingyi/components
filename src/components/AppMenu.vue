<template>
  <div class="menuList">
    <childMenu :meunList='meunList'></childMenu>
    <newGropdown @handleCommand='handleCommand'></newGropdown>
  </div>
</template>


<script>
import { Options, Vue } from "vue-class-component";
import childMenu from "@/components/menu/childMenu"
import newGropdown from "@/components/menu/newGropdown"
@Options({
  components: {
    childMenu,
    newGropdown
  }
})
export default class AppMeun extends Vue {




  handleCommand (index) {
    switch (index) {
      case '1':
        this.meunList.push({ name: '子菜单', children: [], oneStatus: true, });
        break;
      case '2':
        this.meunList.push({ name: '文本消息', type: 'TEXT', });
        break;
      case '3':
        this.meunList.push({ name: 'H5链接', type: 'LINK', content: '' });
        break;
      case '4':
        this.meunList.push({ name: '拨号', type: 'DIAL', content: '' });
        break;
      case '5':
        this.meunList.push({ name: '地图', type: 'MAP', content: '' });
        break;
    }
  }
}
</script>


<style lang="scss" scoped>
     .menuList{
            border: 1px solid rgb(217, 217, 217);
            border-radius: 4px;
            padding: 0px 6px;
            height: 46px;
            line-height: 46px;
            margin-bottom: 20px;
     }
  
</style>