import {
  getHorseMinAmountStepsToTarget,
  GetHorseMinAmountStepsToTargetOptions
} from './get-horse-min-amount-steps-to-target';

const cases: {
  options: GetHorseMinAmountStepsToTargetOptions;
  expectedResult: number;
}[] = [
  {
    options: {
      horsePosition: {
        x: 7,
        y: 6
      },
      targetPosition: {
        x: 4,
        y: 5
      }
    },
    expectedResult: 2
  },
  {
    options: {
      horsePosition: {
        x: 8,
        y: 1
      },
      targetPosition: {
        x: 6,
        y: 2
      }
    },
    expectedResult: 1
  },
  {
    options: {
      horsePosition: {
        x: 8,
        y: 1
      },
      targetPosition: {
        x: 7,
        y: 2
      }
    },
    expectedResult: 4
  },
  {
    options: {
      horsePosition: {
        x: 8,
        y: 1
      },
      targetPosition: {
        x: 5,
        y: 3
      }
    },
    expectedResult: 3
  },
  {
    options: {
      horsePosition: {
        x: 8,
        y: 1
      },
      targetPosition: {
        x: 8,
        y: 2
      }
    },
    expectedResult: 3
  },
  {
    options: {
      horsePosition: {
        x: 5,
        y: 4
      },
      targetPosition: {
        x: 5,
        y: 5
      }
    },
    expectedResult: 3
  },
  {
    options: {
      horsePosition: {
        x: 5,
        y: 4
      },
      targetPosition: {
        x: 4,
        y: 7
      }
    },
    expectedResult: 2
  },
  {
    options: {
      horsePosition: {
        x: 7,
        y: 2
      },
      targetPosition: {
        x: 1,
        y: 8
      }
    },
    expectedResult: 4
  },
  {
    options: {
      horsePosition: {
        x: 5,
        y: 1
      },
      targetPosition: {
        x: 1,
        y: 8
      }
    },
    expectedResult: 5
  },
  {
    options: {
      horsePosition: {
        x: 8,
        y: 1
      },
      targetPosition: {
        x: 1,
        y: 8
      }
    },
    expectedResult: 6
  }
];

describe('getHorseMinAmountStepsToTarget', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('correctly find horse min amount steps to target', () => {
    cases.forEach(({ options, expectedResult }, index) => {
      console.log(`Test #${index}`);

      const result = getHorseMinAmountStepsToTarget(options);

      expect(result).toEqual(expectedResult);
    });
  });
});
