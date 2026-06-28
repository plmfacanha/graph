function knightMoves(start, end) {
  let priorityQueue = [start];
  let head = 0;

  while (head < priorityQueue.length) {
    let currPos = priorityQueue[head];
    console.log(
      `You are at x: ${priorityQueue[0][0]} and y: ${priorityQueue[0][1]}`,
    );

    let allPossibleMoves = getPossibleMoves(start, end);

    ++head;
  }
}

knightMoves([3, 3], [4, 3]);
