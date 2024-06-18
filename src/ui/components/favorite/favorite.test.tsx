import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Favorite } from "./favorite";
import * as favoritesHook from "./use-favorite";

// Mock the icons to simplify the tests
vi.mock("../icons/defaultHeartIcon", () => ({
  DefaultHeartIcon: () => <div>DefaultHeartIcon</div>
}));
vi.mock("../icons/smallFIlledHearIcon", () => ({
  SmallFilledHeartIcon: () => <div>SmallFilledHeartIcon</div>
}));

const character = {
  id: "1",
  name: "Character 1",
  description: "Description 1",
  image: "URL"
};

describe("Favorite Component", () => {
  const useFavoritySpy = vi.spyOn(favoritesHook, "useFavorite");

  it("should render the unfavorite button when the character is not favorited", () => {
    useFavoritySpy.mockReturnValue({
      isFavorited: false,
      handleOnAddFavorite: vi.fn(),
      handleOnRemoveFavorite: vi.fn()
    });

    render(<Favorite character={character} />);

    expect(
      screen.getByLabelText(`unfavorite ${character.name}`)
    ).toBeInTheDocument();
    expect(screen.getByText("DefaultHeartIcon")).toBeInTheDocument();
  });

  it("should render the favorite button when the character is favorited", () => {
    useFavoritySpy.mockReturnValue({
      isFavorited: true,
      handleOnAddFavorite: vi.fn(),
      handleOnRemoveFavorite: vi.fn()
    });

    render(<Favorite character={character} />);

    expect(
      screen.getByLabelText(`favorite ${character.name}`)
    ).toBeInTheDocument();
    expect(screen.getByText("SmallFilledHeartIcon")).toBeInTheDocument();
  });

  it("should call handleOnAddFavorite when the unfavorite button is clicked", () => {
    const handleOnAddFavorite = vi.fn();
    useFavoritySpy.mockReturnValue({
      isFavorited: false,
      handleOnAddFavorite,
      handleOnRemoveFavorite: vi.fn()
    });

    render(<Favorite character={character} />);

    fireEvent.click(screen.getByLabelText(`unfavorite ${character.name}`));

    expect(handleOnAddFavorite).toHaveBeenCalled();
  });

  it("should call handleOnRemoveFavorite when the favorite button is clicked", () => {
    const handleOnRemoveFavorite = vi.fn();
    useFavoritySpy.mockReturnValue({
      isFavorited: true,
      handleOnAddFavorite: vi.fn(),
      handleOnRemoveFavorite
    });

    render(<Favorite character={character} />);

    fireEvent.click(screen.getByLabelText(`favorite ${character.name}`));

    expect(handleOnRemoveFavorite).toHaveBeenCalled();
  });
});
