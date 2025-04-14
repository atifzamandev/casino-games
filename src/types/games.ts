export interface GameCategory {
  id: number
  name: string
}

export type GameCategories = GameCategory[]

export enum CategoryId {
  ALL = 0,
  VIDEO_SLOTS = 1,
  SLOT_MACHINES = 2,
}

export interface Game {
  name: string
  description: string
  code: string
  icon: string
  categoryIds: CategoryId[]
}

export type Games = Game[]
