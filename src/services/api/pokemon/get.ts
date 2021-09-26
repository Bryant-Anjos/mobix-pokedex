import axios from 'axios'

import api from '@services/api'
import { mapTypeToColor } from '@utils/mapTypeToColor'
import { getGradient } from '@utils/getGradient'
import { getPokemonImage } from '@utils/getPokemonImage'
import { calculatePokemonHeight } from '@utils/calculatePokemonHeight'
import { getPokemonGenders } from '@utils/getPokemonGenders'

export interface IAbout {
  name: string
  value: string | string[]
}

export interface IStats {
  name: string
  value: number
}

export interface IPokemonDetail {
  id: number
  name: string
  types: string[]
  color: string
  image: string
  palete: [string, string, string]
  about: IAbout[]
  stats: IStats[]
}

const get = async (id: number): Promise<IPokemonDetail> => {
  return await api.get(`pokemon/${id}`).then(async ({ data: pokemon }: any) => {
    const { name } = pokemon
    const types = pokemon.types.map(({ type }: any) => type.name)
    const color = mapTypeToColor(types[0])
    const image = getPokemonImage(id)
    const palete = getGradient(color)
    const { data: species } = await axios.get(pokemon.species.url)
    const about: IAbout[] = [
      {
        name: 'Espécie',
        value:
          species.genera.find((item: any) => item.language.name === 'en')
            ?.genus ?? '',
      },
      {
        name: 'Tamanho',
        value: calculatePokemonHeight(pokemon.height),
      },
      {
        name: 'Habilidades',
        value: pokemon.abilities.map((item: any) => {
          return item.is_hidden
            ? `${item.ability.name} (hidden)`
            : item.ability.name
        }),
      },
      {
        name: 'Gênero',
        value: getPokemonGenders(species.gender_rate),
      },
    ]
    const stats: IStats[] = pokemon.stats.map((item: any) => ({
      name: item.stat.name,
      value: item.base_stat,
    }))

    return {
      id,
      name,
      types,
      color,
      image,
      palete,
      about,
      stats,
    } as IPokemonDetail
  })
}

export default get
