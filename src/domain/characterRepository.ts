import { CharacterDto } from "@/infraestructure/characterDto";
import { ComicDto } from "@/infraestructure/comicDto";

export interface CharacterRepository {
  getAll: () => Promise<CharacterDto[]>;
  getFilteredByName: (query: string) => Promise<CharacterDto[]>;
  getComics: (characterId: string) => Promise<ComicDto[]>;
  getCharacterById: (id: string) => Promise<CharacterDto>;
}
