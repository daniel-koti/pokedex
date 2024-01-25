import axios from 'axios'

export interface AxiosResponse {
  count: number
  next: string | null
  previous: string | null
  results: Array<{ name: string; url: string }>
}

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})
