import { Character } from "./charater";

export interface CharacterRepository {
  getAll: () => Promise<Character[]>;
}
