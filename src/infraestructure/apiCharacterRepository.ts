import { CharacterRepository } from "@/domain/characterRepository";
import { Character } from "@/domain/charater";

const PUBLIC_KEY = "a29c155518726fb1f6707e66fdea8481";

export function createApiCharacaterRepository(): CharacterRepository {
  return {
    getAll,
    getFilteredByName
  };
}

async function getAll() {
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?&orderBy=name&limit=50&apikey=${PUBLIC_KEY}`
  );
  const json = await response.json();
  return json.data.results.map((character: Character) => ({
    id: character.id,
    description: character.description,
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    name: character.name
  }));
}

async function getFilteredByName(query: string) {
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&orderBy=name&limit=50&apikey=${PUBLIC_KEY}`
  );
  const json = await response.json();
  return json.data.results.map((character: Character) => ({
    id: character.id,
    description: character.description,
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    name: character.name
  }));
}
