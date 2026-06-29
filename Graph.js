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

function knightMoves(start, end) {
  let queue = [start];
  let head = 0;
  let currPos = queue[head];

  while (head < queue.length) {
    let allPossibleMoves = getPossibleMoves(currPos);
    queue.push(allPossibleMoves);
  }
}

knightMoves([3, 3], [4, 3]);
