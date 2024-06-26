import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getComics } from "@/application/characters/getComics";
import { CharactersContext } from "@/context/charactersContext";
import { createApiCharacaterRepository } from "@/infraestructure/apiCharacterRepository";
import { CharacterDto } from "@/infraestructure/characterDto";
import { ComicDto } from "@/infraestructure/comicDto";

const repo = createApiCharacaterRepository();
export const useDetail = () => {
  const [character, setCharacter] = useState<CharacterDto>();
  const [data, setData] = useState<ComicDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const { characterId } = useParams();
  const { getCharacter } = useContext(CharactersContext);

  const location = useLocation();
  const characterFromState = location.state;

  useEffect(() => {
    async function fetchCharacter() {
      const response = await getCharacter(characterId!);
      setCharacter(response);
    }
    if (characterFromState) {
      setCharacter(characterFromState);
    } else {
      fetchCharacter();
    }
  }, [characterId]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getComics(repo, characterId!);

      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    character,
    data,
    loading,
    error
  };
};
