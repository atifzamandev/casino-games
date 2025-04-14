import axios, { AxiosRequestConfig } from 'axios'

const gamesApiInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:3001',
})

class GamesApiClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = async (config: AxiosRequestConfig): Promise<T> => {
    const response = await gamesApiInstance.get<T>(this.endpoint, config)
    return response.data
  }
}

export default GamesApiClient
