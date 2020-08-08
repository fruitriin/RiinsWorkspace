<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <BlogArticle :article="item" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BlogArticle from '@/components/BlogArticle.vue'
import ApiArticle from '@/lib/api/ApiArticle'
import { Article } from '@/types/article'

export default Vue.extend({
  components: {
    BlogArticle,
  },
  async asyncData({ $axios }) {
    const api = new ApiArticle($axios)
    return {
      items: await api.getContents(),
    }
  },
  data() {
    return {
      items: [] as Article[],
    }
  },
})
</script>
