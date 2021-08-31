import PokemonState from "./interfaces";

const initialState: PokemonState = {
  pokemon: "",
};

const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "QUERY_POKEMON":
      return { ...state, pokemon: action.payload };
    default:
      return state;
  }
};

export default pokemonReducer;
