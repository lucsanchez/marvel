import { CharacterRepository } from "@/domain/characterRepository";
import { CharacterDto } from "@/infraestructure/characterDto";

export async function getAllCharacters(
  repository: CharacterRepository
): Promise<CharacterDto[]> {
  return repository.getAll();
}
