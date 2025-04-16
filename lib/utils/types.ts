interface Place {
  id: string;
  object_type: string;
  name: string;
  parent_place: string | null;
  traps_count: number;
}
// extend the base type to allow for children
interface PlaceWithChildren extends Place {
  children?: Place[];
}

export type { Place, PlaceWithChildren };