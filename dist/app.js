var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const swapi = axios.create({
    baseURL: 'https://swapi.dev/api'
});
const Queries = {
    films: 'films',
    people: 'people',
    planets: 'planets',
    species: 'species',
    starships: 'starships',
    vehicles: 'vehicles',
};
const getQuery = ({ query, isWookiee, search, id }) => __awaiter(void 0, void 0, void 0, function* () {
    const _query = id ? `${query}/${id}` : query;
    const params = {
        format: isWookiee ? 'wookiee' : undefined,
        search,
    };
    swapi.get(_query, {
        params,
    }).then(data => console.log(data.data));
});
export const Swapi = {
    getPerson: (id, search, isWookiee) => getQuery({ query: Queries.people, id, isWookiee, search }),
    getFilm: (id, search, isWookiee) => getQuery({ query: Queries.films, id, search, isWookiee }),
    getPlanet: (id, search, isWookiee) => getQuery({ query: Queries.planets, id, search, isWookiee }),
    getSpecies: (id, search, isWookiee) => getQuery({ query: Queries.species, id, search, isWookiee }),
    getStarship: (id, search, isWookiee) => getQuery({ query: Queries.starships, id, search, isWookiee }),
    getVehicle: (id, search, isWookiee) => getQuery({ query: Queries.vehicles, id, search, isWookiee }),
    getPeople: (search, isWookiee) => getQuery({ query: Queries.people, search, isWookiee }),
    getFilms: (search, isWookiee) => getQuery({ query: Queries.films, search, isWookiee }),
    getPlanets: (search, isWookiee) => getQuery({ query: Queries.planets, search, isWookiee }),
    getAllSpecies: (search, isWookiee) => getQuery({ query: Queries.species, search, isWookiee }),
    getStarships: (search, isWookiee) => getQuery({ query: Queries.starships, search, isWookiee }),
    getVehicles: (search, isWookiee) => getQuery({ query: Queries.vehicles, search, isWookiee }),
};
Swapi.getFilms();
//# sourceMappingURL=app.js.map