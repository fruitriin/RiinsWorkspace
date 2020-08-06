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

export default {
  components: {
    BlogArticle,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      'https://riins-workspace.microcms.io/api/v1/articles',
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )
    return {
      items: data.contents,
    }
  },
  data() {
    return {
      items: [],
    }
  },
  async mounted() {
    await this.$axios.get(
      'https://riins-workspace.microcms.io/api/v1/articles',
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )
    console.log('hoge')
  },
}
</script>
