<template>
  <article class="blog-article">
    <nuxt-link :to="`/post/${article.id}`">
      <h1>{{ article.title }}</h1>
    </nuxt-link>
    <p>{{ getDate }}</p>
    <div v-html="article.bodyShort" />
    <a v-if="!showMore" @click="showMore = true">もっと見る</a>
    <div v-if="showMore" v-html="article.bodyDetail" />
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Article } from '@/types/article'

export default Vue.extend({
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true
    }
  },
  data() {
    return {
      showMore: false
    }
  },
  computed: {
    getDate() {
      return this.article.createDate || this.article.createdAt
    }
  }
})
</script>
