<template lang="pug">
  section
    h1 おのれこんびーふぃ！
    p
      textarea(v-model="question" cols="30" rows="10")
    p
      strong {{result}}
    social-sharing.twitter-share.button.common-button(v-bind:title="result" hashtags="おのれこんびーふぃ" inline-template)
      network(network="twitter")
        button Tweet
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"

@Component
export default class extends Vue {
  @State people

  question: string = 'このアプリは何なんだ'

  get result() {
    return `おのれこんびーふぃ！ ${this.question}！！ 答えるぽよ！！！`
  }
}
</script>
<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>