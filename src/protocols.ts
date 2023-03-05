export type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: number,
    url: string
  },
  location: {
    name: string,
    url: string
  }
  image: string,
  episode: string[],
  url: string,
  created: string
}

export type Characters = Character[];