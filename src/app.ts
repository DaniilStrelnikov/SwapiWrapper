import axios from 'axios'
import { Query, GetQueryProps, Params } from './types';

const swapi = axios.create({
  baseURL: 'https://swapi.dev/api'
});

const Queries: Query = {
    films: 'films',
    people: 'people',
    planets: 'planets',
    species: 'species',
    starships: 'starships',
    vehicles: 'vehicles',
};

const getQuery = async ({query, isWookiee, search, id}: GetQueryProps) => {
  const _query = id ? `${query}/${id}` : query;
  const params: Params = {
    format: isWookiee ? 'wookiee' : undefined,
    search,
  }

  swapi.get(_query, {
   params,
  }).then(data => console.log(data.data))
}

export const Swapi = {
  getPerson: (id?: number, search?: string, isWookiee?: boolean) => getQuery({query: Queries.people, id, isWookiee, search}),
  getFilm: (id?: number, search?: string, isWookiee?: boolean) => getQuery({query: Queries.films, id, search, isWookiee}),
  getPlanet: (id?: number, search?: string, isWookiee?: boolean) => getQuery({query: Queries.planets, id, search, isWookiee}),
  getSpecies: (id?: number, search?: string, isWookiee?: boolean) => getQuery({query: Queries.species, id, search, isWookiee}),
  getStarship: (id?: number, search?: string, isWookiee?: boolean) => getQuery({query: Queries.starships, id, search, isWookiee}),
  getVehicle: (id?: number, search?: string, isWookiee?: boolean) => getQuery({query: Queries.vehicles, id, search, isWookiee}),

  getPeople: (search?: string, isWookiee?: boolean) => getQuery({query: Queries.people, search, isWookiee}),
  getFilms: (search?: string, isWookiee?: boolean) => getQuery({query: Queries.films, search, isWookiee}),
  getPlanets: (search?: string, isWookiee?: boolean) => getQuery({query: Queries.planets, search, isWookiee}),
  getAllSpecies: (search?: string, isWookiee?: boolean) => getQuery({query: Queries.species, search, isWookiee}),
  getStarships: (search?: string, isWookiee?: boolean) => getQuery({query: Queries.starships, search, isWookiee}),
  getVehicles: (search?: string, isWookiee?: boolean) => getQuery({query: Queries.vehicles, search, isWookiee}),
}

Swapi.getFilms()