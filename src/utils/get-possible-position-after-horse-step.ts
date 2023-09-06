import { Position } from '../types/position';
import { isValidPosition } from './is-valid-position';

export function getPossiblePositionAfterHorseStep({
  x,
  y
}: Position): Position[] {
  const possiblePositions: Position[] = [];

  possiblePositions.push({ x: x + 2, y: y + 1 });
  possiblePositions.push({ x: x + 2, y: y - 1 });
  possiblePositions.push({ x: x - 2, y: y + 1 });
  possiblePositions.push({ x: x - 2, y: y - 1 });
  possiblePositions.push({ x: x + 1, y: y + 2 });
  possiblePositions.push({ x: x - 1, y: y + 2 });
  possiblePositions.push({ x: x + 1, y: y - 2 });
  possiblePositions.push({ x: x - 1, y: y - 2 });

  return possiblePositions.filter(isValidPosition);
}
