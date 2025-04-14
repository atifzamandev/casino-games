import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'
import { queryConfig } from '../utils/queryConfig'
import { Games } from '../types/games'
import GamesApiClient from '../api/apiClient'

const gamesClient = new GamesApiClient<Games>('/games')

const useGames = (): UseQueryResult<Games, Error> => {
  return useQuery<Games, Error>({
    queryKey: ['games'],
    queryFn: () => gamesClient.getAll({} as AxiosRequestConfig),
    ...queryConfig,
  })
}

export default useGames
