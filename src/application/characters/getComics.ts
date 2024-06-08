import { CharacterRepository } from "@/domain/characterRepository";
import { ComicDTO } from "@/infraestructure/comicDTO";

export async function getComics(
  repository: CharacterRepository,
  characterId: string
): Promise<ComicDTO[]> {
  return repository.getComics(characterId);
}
