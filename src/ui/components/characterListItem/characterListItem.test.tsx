import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CharacterDTO } from "@/infraestructure/characterDTO"; // Adjust the import path as needed
import { CharacterListItem } from "./characterListItem";

const mockedFn = vi.fn();
vi.mock("./use-character-list-item", () => ({
  useCharacterListItem: vi.fn(() => ({
    handleCharacterClick: mockedFn
  }))
}));

describe("CharacterListItem", () => {
  const character: CharacterDTO = {
    id: "1",
    name: "Test Character",
    image: "test-image-url",
    description: "desc"
  };

  it("renders character information", () => {
    render(<CharacterListItem {...character} />);

    const characterName = screen.getByText(character.name);
    expect(characterName).toBeInTheDocument();

    const characterImage = screen.getByAltText(character.name);
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute("src", character.image);
  });

  it("calls handleCharacterClick when image is clicked", async () => {
    render(<CharacterListItem {...character} />);

    const characterImage = screen.getByAltText(character.name);
    characterImage.click();
    await waitFor(() => {
      expect(mockedFn).toHaveBeenCalled();
    });
  });
});
