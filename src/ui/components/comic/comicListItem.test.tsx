import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ComicListItem } from "./comicListItem";

describe("ComicListItem", () => {
  const comic = {
    id: "1",
    title: "Test Comic",
    image: "test-image-url",
    onSaleDate: "2022-07-01T00:00:00-0400"
  };

  it.only("renders comic information with valid onSaleDate", () => {
    render(<ComicListItem {...comic} />);

    const comicTitle = screen.getByText(comic.title);
    expect(comicTitle).toBeInTheDocument();

    const comicImage = screen.getByAltText(comic.title);
    expect(comicImage).toBeInTheDocument();
    expect(comicImage).toHaveAttribute("src", comic.image);

    const onSaleDate = screen.getByText("2022");
    expect(onSaleDate).toBeInTheDocument();
  });

  it("renders comic information with empty onSaleDate if date is invalid", () => {
    const invalidDateComic = {
      ...comic,
      onSaleDate: "Invalid Date"
    };

    render(<ComicListItem {...invalidDateComic} />);

    const comicTitle = screen.getByText(comic.title);
    expect(comicTitle).toBeInTheDocument();

    const comicImage = screen.getByAltText(comic.title);
    expect(comicImage).toBeInTheDocument();
    expect(comicImage).toHaveAttribute("src", comic.image);

    const onSaleDate = screen.queryByText("");
    expect(onSaleDate).toBeInTheDocument();
  });
});
