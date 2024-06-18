import { CharacterRepository } from "@/domain/characterRepository";
import { CharacterDto } from "@/infraestructure/characterDto";

export async function getCharacterById(
  repository: CharacterRepository,
  id: string
): Promise<CharacterDto> {
  return repository.getCharacterById(id);
}
