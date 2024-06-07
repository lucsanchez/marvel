import { CharacterRepository } from "@/domain/characterRepository";

export function createApiCharacaterRepository(): CharacterRepository {
  return {
    getAll,
  };
}

async function getAll() {
  return [];
}
