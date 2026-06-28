function getPossibleMoves(currPos) {
  let [x, y] = currPos;
  console.log(`You are at x: ${x} and y: ${y}`);

  let moves = [];

  if (x === 0 && y === 0) {
  }
}

function knightMoves(start, end) {
  let queue = [start];
  let head = 0;

  while (head < queue.length) {
    let currPos = queue[head];

    let allPossibleMoves = getPossibleMoves(currPos);
    queue.push(allPossibleMoves);
    ++head;
  }
}

knightMoves([0, 0], [3, 3]);
