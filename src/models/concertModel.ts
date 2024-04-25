import Band from "./bandModel";

interface Concert {
  id: number;
  name: string;
  date: Date;
  location: string;
  description: string;
  bands: Band[];
}

export default Concert;
