import Enquirer from 'enquirer';
import { getHorseMinAmountStepsToTarget } from './src/functions/get-horse-min-amount-steps-to-target/get-horse-min-amount-steps-to-target';
import { isValidCoord } from './src/utils/is-valid-coord';

const basePromptOptions = {
  type: 'numeral',
  validate: (value: any) => isValidCoord(value)
};

Enquirer.prompt<{
  targetPositionX: number;
  targetPositionY: number;
  horsePositionX: number;
  horsePositionY: number;
}>([
  {
    name: 'horsePositionX',
    message: 'Enter horse position X [1;8]',
    ...basePromptOptions
  },
  {
    name: 'horsePositionY',
    message: 'Enter horse position Y [1;8]',
    ...basePromptOptions
  },
  {
    name: 'targetPositionX',
    message: 'Enter target position X [1;8]',
    ...basePromptOptions
  },
  {
    name: 'targetPositionY',
    message: 'Enter target position Y [1;8]',
    ...basePromptOptions
  }
]).then(
  ({ targetPositionX, targetPositionY, horsePositionY, horsePositionX }) => {
    const minSteps = getHorseMinAmountStepsToTarget({
      targetPosition: {
        x: targetPositionX,
        y: targetPositionY
      },
      horsePosition: {
        x: horsePositionX,
        y: horsePositionY
      }
    });

    console.log(`Min amount horse steps: ${minSteps}`);
  }
);
