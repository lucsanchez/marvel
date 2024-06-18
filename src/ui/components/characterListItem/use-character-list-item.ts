import { useNavigate } from "react-router-dom";

import { CharacterDto } from "@/infraestructure/characterDto";

export const useCharacterListItem = (character: CharacterDto) => {
  const navigate = useNavigate();

  const handleCharacterClick = () => {
    navigate(`/character/${character.id}`, { state: character });
  };

  return {
    handleCharacterClick
  };
};
