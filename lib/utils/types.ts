interface Place {
  id: string;
  object_type: string;
  name: string;
  parent_place: string | null;
  traps_count: number;
  children?: Place[];
}

export type { Place };