import { NuxtAxiosInstance } from '@nuxtjs/axios'

type options = {
  [key: string]: string | number | null
  draftKey: string | null
  limit: number | null
  offset: number | null
  orders: string | null
  q: string
  fields: string
  ids: string
  filters: string
  depth: number
}

class ApiArticle {
  private $axios: NuxtAxiosInstance
  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
    this.$axios.setBaseURL('https://riins-workspace.microcms.io/api/')
    this.$axios.setHeader('X-API-KEY', process.env.API_KEY)
  }

  async getContent(contentId: string) {
    const res = await this.$axios.get(`/v1/articles/${contentId}`)
    return res.data
  }

  async getContents(options = {} as options) {
    const params = new URLSearchParams()
    Object.keys(options).forEach((key) => {
      params.append(key, options[key] as string)
    })
    const res = await this.$axios.get('/v1/articles/?' + params.toString())
    return res.data.contents
  }
}

export default ApiArticle
