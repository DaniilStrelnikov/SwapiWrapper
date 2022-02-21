export type Query = {
    films: string,
    people: string,
    planets: string,
    species: string,
    starships: string,
    vehicles: string,
};

export type GetQueryProps = {
  query: string;
  isWookiee?: boolean;
  search?: string;
  id?: number;
}
  
export type Params = {
  format?: string;
  search?: string;
  id?: number;
}