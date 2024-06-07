import { CharacterRepository } from "@/domain/characterRepository";
import { Character } from "@/domain/charater";

export async function getAllCharacters(
  repository: CharacterRepository
): Promise<Character[]> {
  return repository.getAll();
}
