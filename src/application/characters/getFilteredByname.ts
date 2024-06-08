import { CharacterRepository } from "@/domain/characterRepository";
import { CharacterDTO } from "@/infraestructure/characterDTO";

export async function getFilteredCharactersByName(
  repository: CharacterRepository,
  query: string
): Promise<CharacterDTO[]> {
  return repository.getFilteredByName(query);
}
