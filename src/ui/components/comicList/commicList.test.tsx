import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ComicList } from "./comicList";
import { ComicDTO } from "@/infraestructure/comicDTO";

describe("ComicList Component", () => {
  it("should render the heading", () => {
    render(<ComicList comics={[]} />);
    expect(screen.getByText("Comics")).toBeInTheDocument();
  });

  it('should render "No Comics" when no comics are passed', () => {
    render(<ComicList comics={[]} />);
    expect(screen.getByText("No Comics")).toBeInTheDocument();
  });

  it("should render a list of comics", () => {
    const comics: ComicDTO[] = [
      { id: "1", title: "Comic 1", image: "Description 1", onSaleDate: "2023" },
      { id: "2", title: "Comic 2", image: "Description 2", onSaleDate: "2022" }
    ];

    render(<ComicList comics={comics} />);

    // Check if the ComicListItem components are rendered
    comics.forEach((comic) => {
      expect(screen.getByText(comic.title)).toBeInTheDocument();
    });
  });
});
