interface Place {
  id: string;
  name: string;
  traps: number;
  floors?: Floor[];
  rooms?: Room[];
  subrooms?: Subroom[];
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

function findHighActivityPaths(places: Place[], trapThreshold: number): string[] {
  const paths: string[] = [];

  function traversePlace(place: Place, currentPath: string[] = []) {
    const newPath = [...currentPath, place.name];
    
    if (place.traps >= trapThreshold) {
      paths.push(newPath.join(', '));
    }

    if (place.floors) {
      place.floors.forEach(floor => {
        traversePlace(floor, newPath);
      });
    }

    if (place.rooms) {
      place.rooms.forEach(room => {
        traversePlace(room, newPath);
      });
    }

    if (place.subrooms) {
      place.subrooms.forEach(subroom => {
        traversePlace(subroom, newPath);
      });
    }
  }

  places.forEach(place => {
    traversePlace(place);
  });

  return paths;
}

export { findHighActivityPaths };
export type { Place, Floor, Room, Subroom }; 