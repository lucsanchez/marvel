import { CharacterDTO } from "@/infraestructure/characterDTO";

export interface CharacterRepository {
  getAll: () => Promise<CharacterDTO[]>;
  getFilteredByName: (query: string) => Promise<CharacterDTO[]>;
}
