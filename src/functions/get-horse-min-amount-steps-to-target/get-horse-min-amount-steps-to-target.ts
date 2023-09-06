import { Position } from '../../types/position';
import { findHorseMinAmountStepsToTarget } from '../../utils/find-horse-min-amount-steps-to-target';

export interface GetHorseMinAmountStepsToTargetOptions {
  horsePosition: Position;
  targetPosition: Position;
}

export function getHorseMinAmountStepsToTarget({
  horsePosition,
  targetPosition
}: GetHorseMinAmountStepsToTargetOptions): number {
  return findHorseMinAmountStepsToTarget({
    possibleHorsePositions: [horsePosition],
    targetPosition
  });
}
