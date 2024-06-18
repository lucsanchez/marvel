import { CharacterRepository } from "@/domain/characterRepository";
import { ComicDto } from "@/infraestructure/comicDto";

export async function getComics(
  repository: CharacterRepository,
  characterId: string
): Promise<ComicDto[]> {
  return repository.getComics(characterId);
}
