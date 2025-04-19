import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import GamesApiClient from '../api/apiClient'
import { LoginErrorResponse, LogoutRequest, LogoutResponse } from '../types/Login'

const gamesLoginClient = new GamesApiClient<LogoutResponse>('/logout')

export const useLoginOutMutation = () => {
  return useMutation<LogoutResponse, AxiosError<LoginErrorResponse>, LogoutRequest>({
    mutationFn: ({ username }) => gamesLoginClient.postLogout({ username }),
    onError: (error) => {
      const message = error.response?.data?.error || 'An unexpected error occurred'
      throw new Error(message)
    },
  })
}
