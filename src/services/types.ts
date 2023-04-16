type Tokens = {
  access: string
  refresh: string
}
export type ScoreCreateResult = {
  date: Date
  number: number
  tokens?: Tokens
  uuid: string
}
export type ScoreQueryArgs = {
  number: number
}

export type AuthResult = {}
export type AuthJWTCreateQueryArgs = {
  email: string
  password: string
}
export type AuthJWTCreateResult = {
  access: string
  refresh: string
}
export type AuthJWTVerifyUserQueryArgs = {
  token: string
}

export type AuthGetUserQueryArgs = {}
export type AuthGetUserResult = {
  email: string
  first_name: string
  lat_name: string
}

export type AuthUsersCreateQueryArgs = {
  email: string
  password: string
}
