import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";

import { DetailPage } from "./ui/pages/detail";
import { FavoritesPage } from "./ui/pages/favorites";
import { HomePage } from "./ui/pages/home";
import { RootLayout } from "./ui/pages/layout";

vi.mock("./ui/pages/home", () => ({
  HomePage: vi.fn(() => <div>HomePage</div>)
}));

vi.mock("./ui/pages/favorites", () => ({
  FavoritesPage: vi.fn(() => <div>Favorites</div>)
}));

vi.mock("./ui/pages/detail", () => ({
  DetailPage: vi.fn(() => <div>Detail</div>)
}));

describe("AppRouter", () => {
  const renderWithRouter = (initialEntries: string[]) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/character/:characterId" element={<DetailPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  };

  it("renders HomePage at root route", () => {
    renderWithRouter(["/"]);
    expect(screen.getByText("HomePage")).toBeInTheDocument();
  });

  it("renders FavoritesPage at /favorites route", () => {
    renderWithRouter(["/favorites"]);
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });

  it("renders DetailPage at /character/:characterId route", () => {
    renderWithRouter(["/character/1"]);
    expect(screen.getByText("Detail")).toBeInTheDocument();
  });
});
