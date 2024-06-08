import { CharacterDTO } from "@/infraestructure/characterDTO";
import { useNavigate } from "react-router-dom";

export const useCharacterListItem = (character: CharacterDTO) => {
  const navigate = useNavigate();

  const handleCharacterClick = () => {
    navigate(`/character/${character.id}`, { state: character });
  };

  return {
    handleCharacterClick
  };
};
