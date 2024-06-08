import { getComics } from "@/application/characters/getComics";
import { createApiCharacaterRepository } from "@/infraestructure/apiCharacterRepository";
import { ComicDTO } from "@/infraestructure/comicDTO";
import { useEffect, useState } from "react";

import { useLocation, useParams } from "react-router-dom";

const repo = createApiCharacaterRepository();
export const useDetail = () => {
  const { characterId } = useParams();

  const location = useLocation();
  const character = location.state;
  const [data, setData] = useState<ComicDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

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
