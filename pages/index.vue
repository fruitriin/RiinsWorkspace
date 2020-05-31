<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <p>{{ item.id }}</p>
      <p>{{ item.tags }}</p>
      <p v-html="item.body" />

      <pre>{{ item }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      'https://riins-workspace.microcms.io/api/v1/articles',
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return {
      items: data.contents
    }
  },
  data() {
    return {
      items: []
    }
  }
}
</script>
