export interface CharacterEntityApi {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: Origin,
  location: CharacterLocation,
  image: string,
  episode: string[],
  url: string,
  created: string
}

export interface Origin {
  name: string,
  url: string,
}

export interface CharacterLocation {
  name: string,
  url: string
}