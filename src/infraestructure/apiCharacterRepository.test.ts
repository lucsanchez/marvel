import { describe, it, expect, beforeEach, vi } from "vitest";
import { createApiCharacaterRepository } from "./apiCharacterRepository";

global.fetch = vi.fn();

describe("ApiRepository", () => {
  let repository: any;

  beforeEach(() => {
    repository = createApiCharacaterRepository();
  });

  it("getAll fetches characters from API", async () => {
    const mockResponse = {
      data: {
        results: [
          {
            id: "1",
            name: "Iron Man",
            description: "Genius, billionaire, playboy, philanthropist.",
            thumbnail: {
              path: "https://example.com/ironman",
              extension: "jpg"
            }
          },
          {
            id: "2",
            name: "Thor",
            description: "The Norse god of thunder.",
            thumbnail: {
              path: "https://example.com/thor",
              extension: "jpg"
            }
          }
        ]
      }
    };

    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse)
    });

    const characters = await repository.getAll();

    expect(characters).toEqual([
      {
        id: "1",
        name: "Iron Man",
        description: "Genius, billionaire, playboy, philanthropist.",
        image: "https://example.com/ironman.jpg"
      },
      {
        id: "2",
        name: "Thor",
        description: "The Norse god of thunder.",
        image: "https://example.com/thor.jpg"
      }
    ]);
  });

  it("getFilteredByName fetches characters filtered by name from API", async () => {
    const query = "Iron";

    const mockResponse = {
      data: {
        results: [
          {
            id: "1",
            name: "Iron Man",
            description: "Genius, billionaire, playboy, philanthropist.",
            thumbnail: {
              path: "https://example.com/ironman",
              extension: "jpg"
            }
          }
        ]
      }
    };

    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse)
    });

    const characters = await repository.getFilteredByName(query);

    expect(characters).toEqual([
      {
        id: "1",
        name: "Iron Man",
        description: "Genius, billionaire, playboy, philanthropist.",
        image: "https://example.com/ironman.jpg"
      }
    ]);
  });

  it("getCharacterById fetches character by ID from API", async () => {
    const characterId = "1";

    const mockResponse = {
      data: {
        results: [
          {
            id: "1",
            name: "Iron Man",
            description: "Genius, billionaire, playboy, philanthropist.",
            thumbnail: {
              path: "https://example.com/ironman",
              extension: "jpg"
            }
          }
        ]
      }
    };

    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse)
    });

    const character = await repository.getCharacterById(characterId);

    expect(character).toEqual({
      id: "1",
      name: "Iron Man",
      description: "Genius, billionaire, playboy, philanthropist.",
      image: "https://example.com/ironman.jpg"
    });
  });

  it("getComics fetches comics for a character from API", async () => {
    const characterId = "1";

    const mockResponse = {
      data: {
        results: [
          {
            id: "12345",
            title: "Iron Man: Extremis",
            thumbnail: {
              path: "https://example.com/ironman-extremis",
              extension: "jpg"
            },
            dates: [{ type: "onsaleDate", date: "2023-01-01T00:00:00Z" }]
          },
          {
            id: "67890",
            title: "Iron Man: Armor Wars",
            thumbnail: {
              path: "https://example.com/ironman-armorwars",
              extension: "jpg"
            },
            dates: [{ type: "onsaleDate", date: "2023-02-01T00:00:00Z" }]
          }
        ]
      }
    };

    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse)
    });

    const comics = await repository.getComics(characterId);

    expect(comics).toEqual([
      {
        id: "12345",
        title: "Iron Man: Extremis",
        image: "https://example.com/ironman-extremis.jpg",
        onSaleDate: "2023-01-01T00:00:00Z"
      },
      {
        id: "67890",
        title: "Iron Man: Armor Wars",
        image: "https://example.com/ironman-armorwars.jpg",
        onSaleDate: "2023-02-01T00:00:00Z"
      }
    ]);
  });
});
