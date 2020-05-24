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
  },
  {
    type: 2,
    pctToHaveGold: 0.55,
    numGold: { numDice: 4, dieNum: 4, multiplier: 10 },
    pctToHaveGems: 0.2,
    numGems: { dieNum: 4, adjustment: 1 },
    gemValueAdjustment: -8,
    pctToHaveExtItem: 0.2,
    numExtItems: { dieNum: 2, adjustment: 1 },
    pctToHaveMagicItems: 0.1,
    numMagicItems: 1,
    maxXPValueForMagicItem: 200
  },
  {
    type: 3,
    pctToHaveGold: 0.6,
    numGold: { numDice: 6, dieNum: 4, multiplier: 10 },
    pctToHaveGems: 0.3,
    numGems: { dieNum: 4, adjustment: 2 },
    gemValueAdjustment: -6,
    pctToHaveExtItem: 0.3,
    numExtItems: { dieNum: 2, adjustment: 2 },
    pctToHaveMagicItems: 0.15,
    numMagicItems: 1,
    maxXPValueForMagicItem: 300
  },
  {
    type: 4,
    pctToHaveGold: 0.65,
    numGold: { numDice: 8, dieNum: 4, multiplier: 10 },
    pctToHaveGems: 0.4,
    numGems: { dieNum: 4, adjustment: 3 },
    gemValueAdjustment: -4,
    pctToHaveExtItem: 0.4,
    numExtItems: { dieNum: 2, adjustment: 3 },
    pctToHaveMagicItems: 0.2,
    numMagicItems: 1,
    maxXPValueForMagicItem: 500
  },
  {
    type: 5,
    pctToHaveGold: 0.7,
    numGold: { numDice: 2, dieNum: 6, multiplier: 50 },
    pctToHaveGems: 0.5,
    numGems: { dieNum: 6, adjustment: 2 },
    gemValueAdjustment: -2,
    pctToHaveExtItem: 0.5,
    numExtItems: { dieNum: 4, adjustment: 2 },
    pctToHaveMagicItems: 0.3,
    numMagicItems: { dieNum: 2 },
    maxXPValueForMagicItem: 800
  },
  {
    type: 6,
    pctToHaveGold: 0.75,
    numGold: { numDice: 4, dieNum: 6, multiplier: 50 },
    pctToHaveGems: 0.6,
    numGems: { dieNum: 6, adjustment: 3 },
    gemValueAdjustment: 0,
    pctToHaveExtItem: 0.6,
    numExtItems: { dieNum: 4, adjustment: 3 },
    pctToHaveMagicItems: 0.4,
    numMagicItems: { dieNum: 2 },
    maxXPValueForMagicItem: 1300
  },
  {
    type: 7,
    pctToHaveGold: 0.8,
    numGold: { numDice: 6, dieNum: 6, multiplier: 50 },
    pctToHaveGems: 0.7,
    numGems: { dieNum: 6, adjustment: 4 },
    gemValueAdjustment: 0,
    pctToHaveExtItem: 0.7,
    numExtItems: { dieNum: 4, adjustment: 4 },
    pctToHaveMagicItems: 0.5,
    numMagicItems: { dieNum: 2 },
    maxXPValueForMagicItem: 2100
  },
];