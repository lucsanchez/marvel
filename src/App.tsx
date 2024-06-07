import "./App.css";
import { AppRouter } from "./app-router";
import { CharactersProvider } from "./providers/charactersProvider";

function App() {
  return (
    <CharactersProvider>
      <AppRouter />
    </CharactersProvider>
  );
}

export default App;
