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
    options: ["Amber", "Agate", "Jadeite"],
    value: 5 // append to string like (5gp)
  },
  {
    percentile: "11-20%",
    min: 11,
    max: 20,
    options: ["Common opal", "Banded eye", "Malachite"],
    value: 10
  },
  {
    percentile: "21-40%",
    min: 21,
    max: 40,
    options: ["Moonstone", "Pearl", "Lapis lazuli", "Tiger eye"],
    value: 25
  },
  {
    percentile: "41-60%",
    min: 41,
    max: 60,
    options: ["Bloodstone", "White agate", "Violet–blue sapphire"],
    value: 50
  },
  {
    percentile: "61-75%",
    min: 61,
    max: 75,
    options: ["Whitish moonstone", "Previous opal"],
    value: 100
  },
  {
    percentile: "76-85%",
    min: 76,
    max: 85,
    options: ["Green nephrite", "Peridot", "Amethyst"],
    value: 250
  },
  {
    percentile: "86-90%",
    min: 86,
    max: 90,
    options: ["Violet garnet", "Green garnet", "Fire opal", "Topaz"],
    value: 500
  },
  {
    percentile: "91-94%",
    min: 91,
    max: 94,
    options: ["Emerald", "Black opal", "Tourmaline"],
    value: 1000
  },
  {
    percentile: "95-98%",
    min: 95,
    max: 98,
    options: ["Star ruby", "Jade", "Sapphire - other than blue"],
    value: 2500
  },
  {
    percentile: "99-100%",
    min: 99,
    max: 100,
    options: ["Diamond", "Blood red ruby", "Blue sapphire"],
    value: 5000
  }
];
