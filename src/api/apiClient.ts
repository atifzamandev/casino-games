import axios, { AxiosRequestConfig } from 'axios'
import { LoginFormData } from '../types/Login'

const gamesApiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:3001',
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

  postLogin = async ({ username, password }: LoginFormData): Promise<T> => {
    const loginInfo = { username, password }

    const response = await gamesApiInstance.post<T>(this.endpoint, loginInfo)
    return response.data
  }
}

export default GamesApiClient
