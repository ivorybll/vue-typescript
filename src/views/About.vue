<template>
  <div @click="clickdemo()">{{ num }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'About'
})
export default class extends Vue {
  private num = 345
  private clickdemo() {
    console.log(this.num)
  }
  created() {
    this.clickdemo()
  }
}
</script>

<style scoped></style>
