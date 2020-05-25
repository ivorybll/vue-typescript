<template>
  <div class="home">
    <div @click="send()">{{ num }}</div>
    <!-- {{num}} -->
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'

@Component({
  name: 'Home'
})
export default class extends Vue {
  @Prop() num: any
  send() {
    this.$emit('nums', this.num)
  }
  @Watch('num')
  getnum(newVal, oldVal) {
    this.$emit('nums', newVal)
  }
}
</script>
<style lang="stylus"></style>
