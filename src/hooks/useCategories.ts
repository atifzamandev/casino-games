import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { queryConfig } from '../utils/queryConfig'
import GamesApiClient from '../api/apiClient'
import { AxiosRequestConfig } from 'axios'
import { GameCategories } from '../types/Games'

const gameCategoriesClient = new GamesApiClient<GameCategories>('/categories')

const useCategories = (): UseQueryResult<GameCategories, Error> => {
  const query = useQuery<GameCategories, Error>({
    queryKey: ['gameCategories'],
    queryFn: () => gameCategoriesClient.getAll({} as AxiosRequestConfig),
    ...queryConfig,
  })
  return query
}

export default useCategories
