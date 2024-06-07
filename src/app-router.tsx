import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { RootLayout } from "./ui/pages/layout";
import { HomePage } from "./ui/pages/home";

const RoutesTree = () => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
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
