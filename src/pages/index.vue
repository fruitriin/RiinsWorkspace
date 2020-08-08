<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <BlogArticle :article="item" />

      <pre>{{ item }}</pre>
    </div>
  </div>
</template>

<script>
import BlogArticle from '@/components/BlogArticle'
import ApiArticle from '@/lib/api/ApiArticle'

export default {
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
      items: [],
    }
  },
}
</script>
