import { Position } from '../types/position';
import { isValidCoord } from './is-valid-coord';

export function isValidPosition({ x, y }: Position) {
  return isValidCoord(x) && isValidCoord(y);
}
