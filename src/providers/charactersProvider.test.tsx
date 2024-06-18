import { render, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CharactersProvider } from "./charactersProvider";
import { CharactersContext } from "@/context/charactersContext";
import React from "react";

const mockCharacters = [
  {
    id: "1",
    name: "Iron Man",
    description: "A wealthy industrialist and genius inventor.",
    image: "/path/to/ironman.jpg"
  },
  {
    id: "2",
    name: "Thor",
    description: "The Norse god of thunder.",
    image: "/path/to/thor.jpg"
  }
];

vi.mock("@/application/characters/getAll", () => ({
  getAllCharacters: vi.fn(() => mockCharacters)
}));
vi.mock("@/application/characters/getFilteredByname", () => ({
  getFilteredCharactersByName: vi.fn(() => mockCharacters)
}));
vi.mock("@/application/characters/getCharacterById", () => ({
  getCharacterById: vi.fn(() => mockCharacters[0])
}));

describe("CharactersProvider Component", () => {
  it("provides characters context values", async () => {
    let contextValue: any;
    const TestComponent = () => {
      contextValue = React.useContext(CharactersContext);
      return <div>Test</div>;
    };

    render(
      <CharactersProvider>
        <TestComponent />
      </CharactersProvider>
    );

    await waitFor(() =>
      expect(contextValue.filteredCharacters).toEqual(mockCharacters)
    );
    expect(contextValue.loading).toBe(false);
  });

  it("filters characters by name", async () => {
    let contextValue: any;
    const TestComponent = () => {
      contextValue = React.useContext(CharactersContext);
      return <div>Test</div>;
    };

    render(
      <CharactersProvider>
        <TestComponent />
      </CharactersProvider>
    );

    await waitFor(() =>
      expect(contextValue.filteredCharacters).toEqual(mockCharacters)
    );

    await contextValue.onFilterCharacters("Iron");
    await waitFor(() =>
      expect(contextValue.filteredCharacters).toEqual(mockCharacters)
    );
  });

  it("resets the filter", async () => {
    let contextValue: any;
    const TestComponent = () => {
      contextValue = React.useContext(CharactersContext);
      return <div>Test</div>;
    };

    render(
      <CharactersProvider>
        <TestComponent />
      </CharactersProvider>
    );

    await waitFor(() =>
      expect(contextValue.filteredCharacters).toEqual(mockCharacters)
    );

    contextValue.resetFilter();
    await waitFor(() =>
      expect(contextValue.filteredCharacters).toEqual(mockCharacters)
    );
  });

  it("gets a character by ID", async () => {
    let contextValue: any;
    const TestComponent = () => {
      contextValue = React.useContext(CharactersContext);
      return <div>Test</div>;
    };

    render(
      <CharactersProvider>
        <TestComponent />
      </CharactersProvider>
    );

    const character = await contextValue.getCharacter(1);
    expect(character).toEqual(mockCharacters[0]);
  });
});
