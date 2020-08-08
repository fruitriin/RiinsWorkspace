<template>
  <div>
    <BlogArticle :article="item" />
  </div>
</template>

<script lang="ts">
import BlogArticle from '@/components/BlogArticle'
import ApiArticle from '~/lib/api/ApiArticle'
export default {
  components: {
    BlogArticle,
  },
  async asyncData({ $axios, params }) {
    const api = new ApiArticle($axios)
    return {
      item: await api.getContent(params.id),
    }
  },
  data() {
    return {
      item: null,
    }
  },
}
</script>
