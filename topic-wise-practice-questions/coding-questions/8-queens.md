## Question

For 8 queens coding problem
Input is ["(x,y)", "(x,y)" ...],
the numbers are from 1 to 8 for x and y

Given the positions of 8 queens. Return true if none of the queens are attacking else return the first queen's position that is attacking

## Solution

```typescript
function isAttacking(
  queen1: [number, number],
  queen2: [number, number]
): boolean {
  const [x1, y1] = queen1;
  const [x2, y2] = queen2;
  return x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2);
}

function isSafeQueenPositions(
  queenPositions: string[]
): [number, number] | true {
  const positions: [number, number][] = queenPositions.map((pos) => {
    const [x, y] = pos.slice(1, -1).split(",").map(Number);
    return [x, y];
  });

  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      if (isAttacking(positions[i], positions[j])) {
        return positions[i];
      }
    }
  }
  return true;
}

const queenPositions: string[] = [
  "(1,1)",
  "(2,5)",
  "(3,8)",
  "(4,6)",
  "(5,3)",
  "(6,7)",
  "(7,2)",
  "(8,4)",
];
const result = isSafeQueenPositions(queenPositions);
if (result === true) {
  console.log("No queens are attacking.");
} else {
  console.log(`The queen at position ${result} is attacking.`);
}
```
