function getPossibleMoves(start, end) {}

function knightMoves(start, end) {
  let priorityQueue = [start];
  let head = 0;

  while (head < priorityQueue.length) {
    let currPos = priorityQueue[head];
    console.log(`You are at x: ${currPos[0]} and y: ${currPos[1]}`);

    let allPossibleMoves = getPossibleMoves(start, end);

    ++head;
  }
}

knightMoves([0, 0], [3, 3]);
