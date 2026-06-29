function getPossibleMoves(currPos, endPos) {
  let [x, y] = currPos;
  let [j, k] = endPos;

  if (x > 0 && y > 0 && x <= 7 && y <= 7) {
  }
}

function knightMoves(start, end) {
  let queue = [start];
  let head = 0;
  let currPos = queue[head];

  while (head < queue.length) {
    let allPossibleMoves = getPossibleMoves(currPos, end);
    queue.push(allPossibleMoves);
  }
}

knightMoves([3, 3], [4, 3]);
