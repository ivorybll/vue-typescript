<template>
  <van-swipe-cell v-if="hidden">
    <van-row class="vRow">
      <van-col class="vCol">
        <van-checkbox @change="checkData" v-model="Data.checked"></van-checkbox>
      </van-col>
      <!-- <van-col span="20"> -->
      <van-col class="vCol">
        <van-card
          :desc="Data.desc"
          :num="Data.num"
          :price="Data.doller"
          :thumb="Data.img"
          :title="Data.name"
        >
          <template #tags>
            <van-tag plain type="danger">标签1</van-tag>
            <van-tag plain type="danger">标签2</van-tag>
          </template>
          <template #footer>
            <van-stepper v-model="Data.num" />
          </template>
        </van-card>
      </van-col>
      <!-- </van-col> -->
    </van-row>
    <template #right>
      <van-button @click="del" class="delete-button" square text="删除" type="danger" />
    </template>
  </van-swipe-cell>
</template>

<script lang="ts">
import { Card, Tab, Tabs, Button, Tag, Stepper, Checkbox, Col, Row, SwipeCell } from 'vant'
import { Component, Vue, Prop } from 'vue-property-decorator'
interface obj {
  name: string
  num: number
  doller: number
  img: string | void
}
@Component({
  name: 'shop',
  components: {
    [Card.name]: Card,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Button.name]: Button,
    [Tag.name]: Tag,
    [Stepper.name]: Stepper,
    [Checkbox.name]: Checkbox,
    [Row.name]: Row,
    [Col.name]: Col,
    [SwipeCell.name]: SwipeCell
  }
})
export default class extends Vue {
  @Prop() shopDate: any
  private Data = {}
  private hidden: boolean = true
  private checkData() {
    this.$emit('shopData', this.Data)
  }
  private del() {
    this.$emit('delData', this.Data)
  }
  created() {
    this.Data = this.shopDate
  }
}
</script>

<style lang="less" scoped>
.van-swipe-cell__wrapper {
  // border-bottom: 0.01rem solid #cccccc;
  // .vRow {
  //   border-bottom: 0.01rem solid #cccccc;
  // }
}
.van-card {
  width: 95%;
  text-align: left;
  padding: 0px 0 !important;
  margin: 8px 0 !important;
}

.van-tag--danger.van-tag--plain {
  color: #ee0a24;
  margin-right: 0.3rem;
}

.vRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  // border-top: 0.01rem solid #cccccc;
  .vCol {
    display: flex;
    justify-content: center;
    flex: 1;
    &:last-child {
      flex: 9;
    }
  }
  &:last-child {
    // border-bottom: 0.01rem solid #cccccc;
  }
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>
