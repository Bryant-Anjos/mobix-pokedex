import api from './api'
import { mapTypeToColor } from '@utils/mapTypeToColor'
import { getGradient } from '@utils/getGradient'
import { getPokemonImage } from '@utils/getPokemonImage'

export interface IPokemonDetail {
  id: number
  name: string
  types: string[]
  color: string
  image: string
  palete: [string, string, string]
}

const get = async (id: number): Promise<IPokemonDetail> => {
  return await api.get(`pokemon/${id}`).then(async ({ data: pokemon }: any) => {
    const { name } = pokemon
    const types = pokemon.types.map(({ type }: any) => type.name)
    const color = mapTypeToColor(types[0])
    const image = getPokemonImage(id)
    const palete = getGradient(color)

    return {
      id,
      name,
      types,
      color,
      image,
      palete,
    } as IPokemonDetail
  })
}

export default get
