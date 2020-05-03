// e.g. rolld(4) rolls a d4
export function rolld(dieNumber) {
  return Math.floor(Math.random() * (dieNumber - 1 + 1) + 1);
}

export const treasureTable = [
  {
    type: 1,
    pctToHaveGold: 0.5,
    numGold: { numDice: 2, dieNum: 4, multiplier: 10 },
    pctToHaveGems: 0.1,
    numGems: { dieNum: 4, adjustment: 0 },
    gemValueAdjustment: -10,
    pctToHaveExtItem: 0.1,
    numExtItems: { dieNum: 2, adjustment: 0 },
    pctToHaveMagicItems: 0.05,
    numMagicItems: 1,
    maxXPValueForMagicItem: 100
  }
];