import { Route, Routes, BrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";
import { DetailPage } from "./ui/pages/detail";
import { FavoritesPage } from "./ui/pages/favorites";
import { HomePage } from "./ui/pages/home";
import { RootLayout } from "./ui/pages/layout";

const RoutesTree = () => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
      <Route path="/character/:characterId" element={<DetailPage />} />
    </Route>
  </Routes>
);

export function AppRouter() {
  return (
    <BrowserRouter>
      <RoutesTree />
    </BrowserRouter>
  );
}
