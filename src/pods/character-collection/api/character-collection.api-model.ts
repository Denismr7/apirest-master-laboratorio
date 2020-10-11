export interface CharacterEntityApi {
  id: number,
  name: string,
  country: string,
  comment: string,
  gender: string
}

export interface ApiResponse {
  api: {
    characters: CharacterEntityApi[]
  }
}

export interface Origin {
  name: string,
  url: string,
}

export interface CharacterLocation {
  name: string,
  url: string
}