import { Thumbnail } from "./charater";

type ComicDate = {
  type: "onsaleDate" | "focDate" | "unlimitedDate";
  date: string;
};

export interface Comic {
  id: string;
  title: string;
  thumbnail: Thumbnail;
  dates: ComicDate[];
}
