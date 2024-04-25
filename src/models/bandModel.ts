import Member from "./memberModel";

interface Band {
  id: number;
  picture: string;
  name: string;
  genre: string;
  description: string;
  members: Member[];
}

export default Band;
