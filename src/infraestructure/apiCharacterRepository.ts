import { CharacterRepository } from "@/domain/characterRepository";
import { Character } from "@/domain/charater";
import { Comic } from "@/domain/comic";

const { VITE_ENDPOINT_API_KEY: PUBLIC_KEY } = import.meta.env;

export function createApiCharacaterRepository(): CharacterRepository {
  return {
    getAll,
    getFilteredByName,
    getComics,
    getCharacterById
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

async function getCharacterById(id: string) {
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${PUBLIC_KEY}`
  );
  const json = await response.json();
  const character = json.data.results[0];

  return {
    id: character.id,
    description: character.description,
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    name: character.name
  };
}

async function getComics(characterId: string) {
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?orderBy=onsaleDate&limit=20&apikey=${PUBLIC_KEY}`
  );
  const json = await response.json();
  return json.data.results.map((comic: Comic) => ({
    id: comic.id,
    title: comic.title,
    image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    onSaleDate: comic.dates.find((date) => date.type === "onsaleDate")?.date
  }));
}
