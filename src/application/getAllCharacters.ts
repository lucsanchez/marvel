import { CharacterRepository } from "@/domain/characterRepository";
import { CharacterDTO } from "@/infraestructure/characterDTO";

export async function getAllCharacters(
  repository: CharacterRepository
): Promise<CharacterDTO[]> {
  return repository.getAll();
}
