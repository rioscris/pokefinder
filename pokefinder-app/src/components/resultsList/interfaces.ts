export interface IPokemon {
  name: string;
}

export interface IPokemonData {
  name: string;
  url: string;
}

export interface IAPIData {
  count: number;
  results: Array<IPokemonData>;
}
