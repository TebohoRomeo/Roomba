// Author : Teboho Romeo lekhalo

let moves = 10;
let dirtyTile = 250;
let charge = 1000;

// counters
let points = 0;
let totalMoves = 0;
let dirtyTileCount = 0;

// The array is based on the diagram
// Movement of the start from botttom left
let tiles = [
  ['clean', 'clean', 'clean', 'clean', 'clean', 'clean', 'dirty', 'clean'], // starting from left to right
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'clean'], // starting right to left
  ['clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'clean', 'dirty'], // starting from left to right
  ['clean', 'clean', 'clean', 'clean', 'dirty', 'clean', 'clean', 'dirty'], //  starting right to left
  ['clean', 'dirty', 'clean', 'clean', 'clean', 'dirty', 'clean', 'dirty'], // starting from left to right
  ['clean', 'clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean'], //  starting right to left
  ['dirty', 'clean', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean'], // starting from left to right
  ['clean', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'clean'], //  starting right to left
  // starting from the right
];

for (let i in tiles) {
  // Number of rows
  console.log(`row ${i}`);
  for (let j in tiles[i]) {
    // Roomba should earn 250 for cleaning a tile
    if (tiles[i][j] == 'dirty') {
      points += dirtyTile;
    }
    // Roomba should loose 10 point if a tile is clean 'logically'
    if (tiles[i][j] == 'clean') {
      points -= moves;
    }

    // Finding number of dirty tiles
    if (tiles[i][j] == 'dirty') {
      dirtyTileCount++;
    }
    //Roomba should loose a charge after every move
    if (tiles[i][j]) {
      totalMoves++;
      charge--;
    }
  }
}

// Results
console.log(`Total number of cleaned dirty tiles : ${dirtyTileCount}`);

console.log(`Total charges left : ${charge}`);
console.log(`Total point available : ${points}`);
console.log(`Total moves : ${totalMoves}`);
