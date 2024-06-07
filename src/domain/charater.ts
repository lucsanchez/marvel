type Thumbnail = {
  extension: "jpg" | "jpeg" | "png";
  path: string;
};

export interface Character {
  name: string;
  description: string;
  id: string;
  resourceURI: string;
  thumbnail: Thumbnail;
}
