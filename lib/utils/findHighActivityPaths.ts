import { buildPlaceTree } from "./buildPlaceTree";
import { PlaceWithChildren } from "./types";

// ************************************************************************
// Question 2:
// Complete the function to find paths to locations with high trap activity
// ************************************************************************

/**
 * Finds paths to locations with trap counts above the given threshold
 * @param places - Array of place objects
 * @param trapThreshold - Minimum number of traps to consider a place as high activity
 * @returns An array of string paths to high activity locations
 * 
 * Example usage:
 * const highActivityPaths = findHighActivityPaths(places, 3);
 * console.log(highActivityPaths);
 * Expected output:
 * [
 *   "Family House, First Floor, Kitchen",
 *   "Family House, Second Floor, Main Bedroom, Main Bedroom Bathroom"
 * ]
 */


function findHighActivityPaths(places: PlaceWithChildren[], trapThreshold: number): string[] {
  // convert the flat structure into a tree
  const tree = buildPlaceTree(places);
  const paths: string[] = [];

  // recusive fn to find the children
  function loop(place: PlaceWithChildren, path: string[] = []) {
    const newPath = [...path, place.name];
    if (place.traps_count >= trapThreshold) {
      paths.push(newPath.join(', '));
    }
    // loop again if the place has children
    place.children?.forEach(child => loop(child, newPath));
  }

  tree.forEach(place => loop(place));

  return paths;
}

export { findHighActivityPaths };