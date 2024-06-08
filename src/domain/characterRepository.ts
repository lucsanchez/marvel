import { CharacterDTO } from "@/infraestructure/characterDTO";

export interface CharacterRepository {
  getAll: () => Promise<CharacterDTO[]>;
  getFilteredByName: (query: string) => Promise<CharacterDTO[]>;
  getComics: (characterId: string) => Promise<any[]>;
  getCharacterById: (id: string) => Promise<CharacterDTO>;
}
