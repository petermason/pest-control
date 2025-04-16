import { buildPlaceTree } from "./buildPlaceTree";
import { Place } from "./types";

function findHighActivityPaths(places: Place[], trapThreshold: number): string[] {
  const roots = buildPlaceTree(places);
  const paths: string[] = [];

  function traverse(place: Place, path: string[] = []) {
    const newPath = [...path, place.name];
    if (place.traps_count >= trapThreshold) {
      paths.push(newPath.join(', '));
    }
    place.children?.forEach(child => traverse(child, newPath));
  }

  roots.forEach(root => traverse(root));

  return paths;
}

export { findHighActivityPaths };