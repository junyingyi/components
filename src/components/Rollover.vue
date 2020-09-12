<template>
  <div id="container"></div>
</template>




<script lang='ts'>
import { Options, Vue } from "vue-class-component";

// 装饰器
@Options({
  props: {
    // 配置
    config: {
      type: Object,
      default: {
        color: ["#8AC6FF", "#5AAFFF", "#0379E6", "#2E9BFF"],
        default: 9,
        add: 1.3,
      },
    },
  },
})
export default class Rollover extends Vue {
  config: any;

  mounted() {
    this.$nextTick(() => {
      let num: any = this.config.default;
      const baseBGC: any= this.config.color;
      let newStr: any = num.toFixed(2) + "";
      const container: any = document.getElementById("container");
      const anum: any = [];

      //创建vdome
      const getVNode = (VNode: any) => {
        return `<div class="side before" style="background:${baseBGC[0]}">${VNode}</div><div class="side bottom" style="background:${baseBGC[1]}">0</div><div class="side after" style="background:${baseBGC[2]}">0</div><div class="side top" style="background:${baseBGC[3]}">0</div>`;
      };
      for (let i = 0; i < newStr.length; i++) {
        const div: any = document.createElement("div");
        container.appendChild(div);
        if (newStr[i] == ".") {
          div.className = "fiexd";
          div.innerHTML = ".";
        } else {
          div.className = "box";
          div.innerHTML = getVNode(newStr[i]);
          div.deg = 0;
        }
        anum.push(div);
      }

      function add(val: any) {
        const newNum: any = (num + val).toFixed(2) + "";
        const chartLength: any = newNum.length - newStr.length;
        //数据长度没变
        if (chartLength) {
          let newBrother = document.createElement("div")
          newBrother.className = 'newBox'
          let a = []
          //新增
          for (let i = 0; i < chartLength; i++) {
            const div: any = document.createElement("div");
            newBrother.appendChild(div);
            if (newNum[i] == ".") {
              div.className = "fiexd";
              div.innerHTML = ".";
            } else {
              div.className = "box";
              div.innerHTML = getVNode(newNum[i]);
              div.deg = 0;
            }
             a.push(div);
          }
             anum.unshift(...a);
             container.insertBefore(newBrother, container.children[0]);
        }
        // return
        //修改
         let j = newNum.length - newStr.length
        for (let i=j ; i < newNum.length; i++) {
          if (newNum[i] == newStr[i-j] || anum[i].innerHTML == ".") continue;
          let deg = anum[i].deg;
          anum[i].deg = deg = deg + 90;
          const index = (deg / 90) % 4;
           console.log(newNum[i],anum[i],i,anum[i])
          anum[i].children[index].innerHTML = newNum[i];
          anum[i].style.transform = "rotateX(" + deg + "deg)";
        }
        num = Number(newNum);
        newStr = newNum;
      }

      setInterval(() => {
        add(this.config.add);
        //  add(this.config.add);
        //  add(this.config.add);
      }, 1000);
    });
  }
}
</script>


<style lang="scss">
#container {
  height: 50px;
  display: flex;
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box {
  position: relative;
  width: 30px;
  height: 50px;
  /* margin: 300px auto; */
  /* 开启 3d 舞台 */
  transform-style: preserve-3d;
  transition: all 1s ease;
  margin-left: 5px;
}

.fiexd {
  margin: 5px;
  font-size: 40px;
}

.newBox {
  display: flex;
}

.side {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 36px;
  color: #ffffff;
  background: rgba(66, 66, 66, 1);
  border-radius: 10px;
}

/* 往左移动  宽度的一半 并按照 Y 轴旋转 90度*/
// .left {
//   transform: translateX(-25px) rotateY(90deg);
//   background: rgba(57, 57, 107.5, 1);
// }

/* 往右移动 宽度的 一半 并按照 Y 轴旋转 90度 */
// .right {
//   transform: translateX(25px) rotateY(90deg);
//   background: rgba(62, 238, 86, 1);
// }

/* 往上移动  宽度的一半 并按照 X 轴旋转 90度*/
.top {
  transform: translateY(-25px) rotateX(90deg);
//   background: #0379e6;
}

/* 往下移动  宽度的一半 并按照 X 轴旋转 90度*/
.bottom {
  transform: translateY(25px) rotateX(-90deg);
//   background: #5aafff;
}

/* 往前移动  宽度的一半*/
.before {
  transform: translateZ(25px);
//   background: #8ac6ff;
}

/* 往后移动  宽度的一半*/
.after {
  transform: translateZ(-25px) rotateX(180deg);
//   background: #2e9bff;
}
</style>