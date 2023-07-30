export interface PokemonData {
  name: string;
  url: string;
}

export interface ComponentStructure {
  render: () => void;
  remove: () => void;
}
