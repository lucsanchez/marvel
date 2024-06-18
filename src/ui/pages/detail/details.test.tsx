import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { DetailPage } from "./index";
import * as useDetailHook from "./use-detail";
import { BrowserRouter } from "react-router-dom";

describe("DetailPage Component", () => {
  const mockCharacter = {
    id: "1",
    name: "Spider-Man",
    image: "/path/to/spider-man.jpg",
    description: "Friendly neighborhood Spider-Man"
  };
  const mockData = [
    { id: "1", title: "Comic 1", image: "image", onSaleDate: "2021" },
    { id: "2", title: "Comic 2", image: "image 2", onSaleDate: "2002" }
  ];
  const mockLoading = false;
  const useDetailsSpy = vi.spyOn(useDetailHook, "useDetail");

  beforeEach(() => {
    useDetailsSpy.mockReturnValue({
      data: mockData,
      character: mockCharacter,
      loading: mockLoading,
      error: undefined
    });
  });

  it("renders character details when character is found", () => {
    render(
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    );

    const characterName = screen.getByText(mockCharacter.name);
    const characterDescription = screen.getByText(mockCharacter.description);
    const characterImage = screen.getByAltText(mockCharacter.name);

    expect(characterName).toBeInTheDocument();
    expect(characterDescription).toBeInTheDocument();
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute("src", mockCharacter.image);
  });

  it('renders "Not found character" when character is not found', () => {
    useDetailsSpy.mockReturnValue({
      data: mockData,
      character: undefined,
      loading: mockLoading,
      error: undefined
    });

    render(
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    );

    const notFoundText = screen.getByText("Not found character");
    expect(notFoundText).toBeInTheDocument();
  });

  it("renders loading state when loading is true", () => {
    useDetailsSpy.mockReturnValue({
      data: [],
      character: undefined,
      loading: true,
      error: undefined
    });

    render(
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    );

    const loadingText = screen.getByText("loading");
    expect(loadingText).toBeInTheDocument();
  });

  it("renders the comic list when not loading", () => {
    render(
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    );

    const comicList = screen.getByText("Comic 1");
    expect(comicList).toBeInTheDocument();
  });
});
