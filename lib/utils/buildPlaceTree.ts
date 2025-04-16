import { PlaceWithChildren } from "./types";

/*
* Create a reusable function to build the tree from the Places flat data structure
* This can be used for the ui step too (Question One)
*/

function buildPlaceTree(places: PlaceWithChildren[]): PlaceWithChildren[] {
  // use Map (getter, setters etc)
  const placeMap = new Map<string, PlaceWithChildren>();
  const tree: PlaceWithChildren[] = [];

  // 1. Initialize map and empty children arrays to build the tree
  places.forEach(place => {
    place.children = [];
    placeMap.set(place.id, place);
  });

  // 2. Loop again to link children to parents
  places.forEach(place => {
    // check if the place has a parent
    if (place.parent_place) {
      // get the parent from the map
      const parent = placeMap.get(place.parent_place);
      // add the place to the parent's children
      parent?.children?.push(place);
    } else {
      // if the place has no parent, add it to the tree
      tree.push(place);
    }
  });

  console.log("tree", tree);
  return tree;
}

export { buildPlaceTree };