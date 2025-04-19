export interface LoginFormData {
  username: string
  password: string
}

export interface Player {
  name: string
  avatar: string
  event: string
}

export interface LoginResponse {
  status: string
  player: Player
}

export interface LogoutResponse {
  status: string
}
export interface LogoutRequest {
  username: string
}

export interface LoginErrorResponse {
  status: string
  error: string
}
