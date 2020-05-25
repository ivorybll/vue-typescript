<template>
  <div class="home">
    <div @click="add()">{{ num }}</div>
    <!-- {{num}} -->
    <HelloWorld :num="num" @nums="nums" />
    <div>{{ num1 || num }}</div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  name: 'Home',
  components: {
    HelloWorld
  }
})
export default class extends Vue {
  private num = 3
  private add() {
    this.num += 1
  }
  private num1 = 0
  private nums(res: any) {
    console.log(res)
    this.num1 = res
  }
}

// export default {
//   name: "Home",
//   components: {
//     HelloWorld
//   }
// };
</script>
<style lang="stylus"></style>
