import { CharacterRepository } from "@/domain/characterRepository";
import { CharacterDTO } from "@/infraestructure/characterDTO";

export async function getCharacterById(
  repository: CharacterRepository,
  id: string
): Promise<CharacterDTO> {
  return repository.getCharacterById(id);
}
