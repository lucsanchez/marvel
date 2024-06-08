import { FavoritesContext } from "@/context/favoritesContext";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { CharacterListItem } from "@/ui/components/characterListItem/characterListItem";
import { Searchbar } from "@/ui/components/searchbar/searchbar";
import { useContext } from "react";
import styles from "./favorites.module.scss";

export const FavoritesPage = () => {
  const { filteredFavorites } = useContext(FavoritesContext);

  return (
    <div className={styles.main_container}>
      <Searchbar />
      {filteredFavorites.length > 0 ? (
        <div className={styles.fav_list}>
          {filteredFavorites.map((character: CharacterDTO) => (
            <CharacterListItem key={character.id} {...character} />
          ))}
        </div>
      ) : (
        <div>No Favorites found</div>
      )}
    </div>
  );
};
