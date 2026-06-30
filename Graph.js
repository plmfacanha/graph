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
  let head = 0;
  let queue = [start];
  let currPos = queue[head];
  let path = false;
  let visited = [currPos];

  while (head < queue.length) {
    if (!visited.includes(currPos)) {
      if (currPos === end) {
        path = true;
        return;
      }
      let allPossibleMoves = getPossibleMoves(currPos);
      allPossibleMoves.forEach((move) => {
        queue.push(move);
      });
      currPos = queue[++head];
      visited.push(currPos);
    }
  }

  if (path) {
    console.log(
      `You've made it in ${head}. Shortest path was ${visited.forEach(
        (path) => {
          path;
        },
      )}`,
    );
  }
}

knightMoves([3, 3], [4, 3]);
