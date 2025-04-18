import { useMutation } from '@tanstack/react-query'
import GamesApiClient from '../api/apiClient'
import { LoginErrorResponse, LoginFormData, LoginResponse } from '../types/Login'
import { AxiosError } from 'axios'

const gamesLoginClient = new GamesApiClient<LoginResponse>('/login')

export const useLoginMutation = () => {
  return useMutation<LoginResponse, AxiosError<LoginErrorResponse>, LoginFormData>({
    mutationFn: ({ username, password }: LoginFormData) => gamesLoginClient.postLogin({ username, password }),
    onError: (error) => {
      const message = error.response?.data?.error || 'An unexpected error occurred'
      throw new Error(message)
    },
  })
}
