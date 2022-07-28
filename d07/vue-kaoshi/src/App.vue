<template>
  <div >
    <input type="text" v-model.trim="word" @keyup.enter="sousuo" />
    <table>
      <th>
        编号
        <p @click="qh = !qh">
          <img src="@/assets/arrow-down.png" alt="" v-show="qh" @click="zz" />
          <img src="@/assets/arrow-red.png" alt="" v-show="!qh" @click="kk" />
        </p>
      </th>
      <th>名称</th>
      <th>
        价格
        <p @click="sh = !sh">
          <img src="@/assets/arrow-down.png" alt="" v-show="sh" @click="kz" />
          <img src="@/assets/arrow-red.png" alt="" v-show="!sh" @click="zk" />
        </p>
      </th>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.goods_name }}</td>
          <td>{{ item.price }}</td>
          
        </tr>
      </tbody>
    </table>
    <span
      >每页
      <input type="text" v-model="text" class="inp1" placeholder="10" />,共10条
    </span>
    <Fenye class="fy"></Fenye>
  </div>
</template>

<script>
import Fenye from "./components/fenye.vue";

export default {
  components: { Fenye },
  data() {
    return {
      /**
       * 渲染需要的数组
       */
      list: [],
      /**
       * 搜索所用到的关键字
       */
      word: "",
      /**
       * 分页的数据
       */
      text: "",
      /**
       * 控制照片的变量
       */
      qh: false,
      sh: false,
    };
  },
  methods: {
    /**
     * 获取daat里面的数据
     */
    getlist() {
      this.$axios.get("./data.json").then((res) => {
        console.log(res);
        this.list = res.data.data;
      });
    },
    /**
     * 搜索功能的实现
     */
    sousuo() {
      this.list = this.list.filter((item) => {
        return item.goods_name.includes(this.word);
      });
      if(this.list.length==0){
        alert('123123')
      }
    },
    kz() {
      this.list.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    zk() {
      this.list.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    zz() {
      this.list.sort(function (a, b) {
        return a.id - b.id;
      });
    },
    kk() {
      this.list.sort(function (a, b) {
        return b.id - a.id;
      });
    },
  },
  created() {
    this.getlist();
  },
};
</script>

<style>
table {
  width: 450px;
  text-align: center;
}
th {
  background: rgb(120, 120, 120);
}
.inp1 {
  width: 30px;
}
.fy {
  position: absolute;
  top: 350px;
  left: 300px;
}
img {
  width: 20px;
  height: 20px;
}

</style>