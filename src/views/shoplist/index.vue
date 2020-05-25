<template>
  <div class="shoplist">
    <template v-if="hidden">
      <shop
        :key="index"
        :shop-date="item"
        @delData="delData"
        @shopData="shopData"
        v-for="(item, index) in shopDate"
      ></shop>
    </template>
    <!-- <div class="bottom">总价：{{ total }}</div> -->
    <van-submit-bar :price="total*100" button-text="提交订单">
      <van-checkbox @click="checkchange()" v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script lang="ts">
import shop from '@/components/shop.vue'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Checkbox, CheckboxGroup, Col, Row, SubmitBar } from 'vant'
interface NumberArray {
  // [index: number]: {
  name: string
  num: number
  checked: boolean
  doller: number
  img: string | void
  desc: string
  flag: boolean
  // }
}

@Component({
  name: 'shopList',
  components: {
    shop,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Col.name]: Col,
    [Row.name]: Row,
    [SubmitBar.name]: SubmitBar
  }
})
export default class extends Vue {
  private total: number = 0
  private hidden: boolean = true
  private checked: boolean = false
  private shopDate: NumberArray[] = [
    {
      name: 'Ipad',
      desc: '贵',
      num: 1,
      checked: false,
      doller: 1800,
      img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
      flag: true
    },
    {
      name: 'Iphone',
      desc: '贵',
      num: 1,
      checked: false,
      doller: 2500.0,
      img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
      flag: true
    },
    {
      name: 'Imac',
      desc: '贵',
      num: 1,
      checked: false,
      doller: 6400.0,
      img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
      flag: true
    }
  ]
  private checkchange() {
    // console.log(this.checked)
    this.shopDate.map((item: any) => {
      return (item.checked = this.checked)
    })
    // console.log(this.shopDate)
  }
  private shopData(data: any) {
    // console.log(data)
    var index = this.shopDate.findIndex((item: any) => {
      return item == data
    })
    this.shopDate[index] = data
  }
  @Watch('shopDate', { deep: true })
  private shopDateChange(newVal: any) {
    // console.log(newVal)
    var shoparr = newVal.filter((item: any) => {
      if (item.checked) {
        return item
      }
    })
    var tolal: number = 0
    for (var i = 0; i < shoparr.length; i++) {
      tolal += shoparr[i].doller * shoparr[i].num
    }
    this.total = tolal
    // shoparr.foreach(function(item) {
    //   console.log
    //   // console.log(shoparr)
    //   // total += item.doller * item.num
    // })
    // console.log(total)
    // console.log(shoparr)
    if (shoparr.length === newVal.length && shoparr.length !== 0) {
      this.checked = true
    } else {
      this.checked = false
    }
  }
  private delData(data: any) {
    // console.log(Array.prototype)
    var ind = this.shopDate.findIndex((res: any) => {
      return res == data
    })
    console.log(ind)
    this.hidden = false
    this.shopDate.splice(ind, 1)
    this.$nextTick(() => {
      this.hidden = true
    })
    console.log(this.shopDate)
    // this.shopDate.remove(data)
  }
  created() {
    // console.log(this.checked)
  }

  // interface obj{
  //   name:string;
  //   num:number;
  //   doller:number;
  // }
  // private shopDate = [{}]
}
</script>

<style lang="less" scoped>
.vrow {
  margin: 8px 0;
}
.vCol {
  display: flex;
  justify-content: center;
  line-height: 2;
}
</style>
