import { findHighActivityPaths, Place } from './find-paths';

const houseData: Place = {
  id: "house-001",
  name: "Family House",
  traps: 0,
  floors: [
    {
      id: "floor-001",
      name: "First Floor",
      traps: 0,
      rooms: [
        {
          id: "kitchen-001",
          name: "Kitchen",
          traps: 4,
          subrooms: [
            {
              id: "pantry-001",
              name: "Pantry",
              traps: 2
            }
          ]
        },
        {
          id: "living-room-001",
          name: "Living Room",
          traps: 0
        },
        {
          id: "bathroom-001",
          name: "First Floor Bathroom",
          traps: 1
        }
      ]
    },
    {
      id: "floor-002",
      name: "Second Floor",
      traps: 0,
      rooms: [
        {
          id: "guest-bedroom-001",
          name: "Guest Bedroom",
          traps: 0
        },
        {
          id: "main-bedroom-001",
          name: "Main Bedroom",
          traps: 0,
          subrooms: [
            {
              id: "bathroom-003",
              name: "Main Bedroom Bathroom",
              traps: 3
            }
          ]
        },
        {
          id: "bathroom-002",
          name: "Second Floor Bathroom",
          traps: 2
        }
      ]
    }
  ]
};

// Test cases
const testCases = [
  {
    threshold: 3,
    expected: [
      "Family House, First Floor, Kitchen",
      "Family House, Second Floor, Main Bedroom, Main Bedroom Bathroom"
    ],
    description: "should find locations with 3 or more traps"
  },
  {
    threshold: 4,
    expected: [
      "Family House, First Floor, Kitchen"
    ],
    description: "should find locations with 4 or more traps"
  },
  {
    threshold: 5,
    expected: [],
    description: "should return empty array when no locations meet threshold"
  }
];

// Run tests
testCases.forEach(({ threshold, expected, description }) => {
  const result = findHighActivityPaths([houseData], threshold);
  console.log(`\nTest: ${description}`);
  console.log(`Threshold: ${threshold}`);
  console.log('Expected:', expected);
  console.log('Actual:', result);
  console.log('Test passed:', JSON.stringify(result) === JSON.stringify(expected));
}); 