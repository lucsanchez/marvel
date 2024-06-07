import { CharacterDTO } from "@/infraestructure/characterDTO";

export interface CharacterRepository {
  getAll: () => Promise<CharacterDTO[]>;
}
