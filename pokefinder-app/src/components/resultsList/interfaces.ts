export interface IPokemon {
  name: string;
  sprites?: {
    front_default?: string;
    other?: {
      dream_world?: {
        front_default?: string;
      };
    };
  };
  stats?: Stat[];
  base_experience?: number;
}

interface Stat {
  base_stat?: number;
  effort?: number;
  stat?: {
    name: string;
    url: string;
  };
}

export interface IPokemonData {
  name: string;
  url: string;
}

export interface IAPIData {
  count: number;
  results: Array<IPokemonData>;
}
