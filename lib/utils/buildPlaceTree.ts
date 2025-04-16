import { Place } from "./types";

function buildPlaceTree(places: Place[]): Place[] {
  const placeMap = new Map<string, Place>();
  const roots: Place[] = [];

  places.forEach(place => {
    place.children = [];
    placeMap.set(place.id, place);
  });

  places.forEach(place => {
    if (place.parent_place) {
      const parent = placeMap.get(place.parent_place);
      parent?.children?.push(place);
    } else {
      roots.push(place);
    }
  });

  return roots;
}

export { buildPlaceTree };