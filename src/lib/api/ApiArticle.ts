import { NuxtAxiosInstance } from '@nuxtjs/axios'
import type { Article } from '@/types/article'

type options = {
  [key: string]: string | number | undefined
  draftKey?: string
  limit?: number
  offset?: number
  orders?: string
  q?: string
  fields?: string
  ids?: string
  filters?: string
  depth?: number
}

class ApiArticle {
  private $axios: NuxtAxiosInstance
  constructor($axios: NuxtAxiosInstance) {
    $axios.setBaseURL('https://riins-workspace.microcms.io/api/')
    $axios.setHeader('X-API-KEY', process.env.API_KEY)
    this.$axios = $axios
  }

  async getContent(contentId: string): Promise<Article> {
    const res = await this.$axios.get(`/v1/articles/${contentId}`)
    return res.data
  }

  async getContents(options = {} as options): Promise<Article[]> {
    const params = new URLSearchParams()
    Object.keys(options).forEach((key) => {
      params.append(key, options[key] as string)
    })
    const res = await this.$axios.get('/v1/articles/?' + params.toString())
    return res.data.contents
  }
}

export default ApiArticle
