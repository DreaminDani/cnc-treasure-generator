export const gemTableIndex = 100;

export const getGem = roll => {
  for (const gemType of gemsTable) {
    if (roll >= gemType.min && roll <= gemType.max) {
      return gemType;
    }
  }
};

export const gemsTable = [
  {
    percentile: "1-10%",
    min: 1,
    max: 10,
    options: ["Amber", "amethyst", "jadeite"],
    value: 5 // append to string like (5gp)
  },
  {
    percentile: "11-20%",
    min: 11,
    max: 20,
    options: ["Precious opal", "banded eye", "malachite"],
    value: 10
  },
  {
    percentile: "21-40%",
    min: 21,
    max: 40,
    options: ["Moonstone", "pearl", "lapis lazuli", "tiger eye"],
    value: 25
  },
  {
    percentile: "41-60%",
    min: 41,
    max: 60,
    options: ["Bloodstone", "white agate", "violet–blue sapphire"],
    value: 50
  },
  {
    percentile: "61-75%",
    min: 61,
    max: 75,
    options: ["Whitish moonstone", "common opal"],
    value: 100
  },
  {
    percentile: "76-85%",
    min: 76,
    max: 85,
    options: ["Green nephrite", "peridot", "amethyst"],
    value: 250
  },
  {
    percentile: "86-90%",
    min: 86,
    max: 90,
    options: ["Violet garnet", "green garnet", "fire opal", "topaz"],
    value: 500
  },
  {
    percentile: "91-94%",
    min: 91,
    max: 94,
    options: ["Emerald", "black opal", "tourmaline"],
    value: 1000
  },
  {
    percentile: "95-98%",
    min: 95,
    max: 98,
    options: ["Star ruby", "jade", "sapphire - other than blue"],
    value: 2500
  },
  {
    percentile: "99-100%",
    min: 99,
    max: 100,
    options: ["Diamond", "blood red ruby", "blue sapphire"],
    value: 5000
  }
];
