interface Place {
  id: string;
  object_type: string;
  name: string;
  parent_place: string | null; // id
  traps_count: number;
}

interface Building {
  id: string;
  name: string;
  traps: number;
  floors: Floor[];
}

interface Floor {
  id: string;
  name: string;
  traps: number;
  rooms: Room[];
}

interface Room {
  id: string;
  name: string;
  traps: number;
  subrooms?: Subroom[];
}

interface Subroom {
  id: string;
  name: string;
  traps: number;
}

export {
  Place
}