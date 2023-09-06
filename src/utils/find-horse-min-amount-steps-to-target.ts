import isEqual from 'lodash/isEqual';
import flattenDeep from 'lodash/flattenDeep';
import { Position } from '../types/position';
import { getPossiblePositionAfterHorseStep } from './get-possible-position-after-horse-step';

export interface FindHorseMinAmountStepsToTargetOptions {
  possibleHorsePositions: Position[];
  targetPosition: Position;
  round?: number;
}

export function findHorseMinAmountStepsToTarget({
  possibleHorsePositions,
  targetPosition,
  round = 0
}: FindHorseMinAmountStepsToTargetOptions): number {
  if (
    possibleHorsePositions.some((possibleHorsePosition) =>
      isEqual(targetPosition, possibleHorsePosition)
    )
  ) {
    return round;
  }

  const newPossibleHorsePositions: Position[][] = [];

  possibleHorsePositions.forEach((possibleHorsePosition) => {
    const newPositions = getPossiblePositionAfterHorseStep(
      possibleHorsePosition
    );

    newPossibleHorsePositions.push(newPositions);
  });

  return findHorseMinAmountStepsToTarget({
    round: round + 1,
    possibleHorsePositions: flattenDeep(newPossibleHorsePositions),
    targetPosition
  });
}
