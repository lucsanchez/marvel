import { CharacterRepository } from "@/domain/characterRepository";
import { CharacterDto } from "@/infraestructure/characterDto";

export async function getFilteredCharactersByName(
  repository: CharacterRepository,
  query: string
): Promise<CharacterDto[]> {
  return repository.getFilteredByName(query);
}
