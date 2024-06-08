import "./App.css";
import { AppRouter } from "./app-router";
import { CharactersProvider } from "./providers/charactersProvider";
import { FavoritesProvider } from "./providers/favoritesProvider";

function App() {
  return (
    <CharactersProvider>
      <FavoritesProvider>
        <AppRouter />
      </FavoritesProvider>
    </CharactersProvider>
  );
}

export default App;
