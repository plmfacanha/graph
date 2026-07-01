function getPossibleMoves(currPos) {
  let [x, y] = currPos;

  let moves = [
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 2, y + 1],
    [x + 2, y - 1],
  ];

  const filteredMoves = moves.filter(
    ([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7,
  );

  return filteredMoves;
}

// ? Here are some core ideas to keep in mind:
// * Represent positions as coordinates: Each square can be written as [x, y], where both values range from 0 to 7.
// * Use a queue: Like in tree BFS, you’ll use a queue to keep track of the next positions to explore.
// * Track visited positions: Unlike trees, graphs can revisit the same position through different paths — so be sure to track visited positions to avoid loops or unnecessary repeats.

function knightMoves(start, end) {
  let index = 0;
  let queue = [start];

  let currPos = queue[index];
  let visited = [];

  while (index < queue.length) {
    let possibleMoves = getPossibleMoves(currPos);
  }
}

knightMoves([0, 0], [3, 3]);
