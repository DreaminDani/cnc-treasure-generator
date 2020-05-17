import { rolld } from './index.js'

export const extItemsIndex = 20;

const getMaterialValue = () => {
  const roll = rolld(100);
  for (const material of materialValueTable) {
    if (roll >= material.min && roll <= material.max) {
      return material;
    }
  }
}

export const getExtItem = roll => {
  for (const extType of extItemsTable) {
    if (roll >= extType.min && roll <= extType.max) {
      const item = extType.options[rolld(20) - 1];
      if (typeof item.value === 'function') {
        // item can require a lookup in another table
        const material = item.value();
        return {name: `${material.name} ${item.name}`, value: material.value};
      } else if (typeof item.value === 'object') {
        // or a roll
        let value = 0;
        for (let i = 0; i < item.value.numDice; i++) {
          value += rolld(item.value.dieNum);
        }

        if (item.value.multiplier) {
          value = value * item.value.multiplier;
        }

        return { name: item.name, value: value }
      } else {
        // or have its value assigned
        return item;
      }
    }
  }
};

export const extItemsTable = [
  {
    percentile: "1-4%",
    name: "Expert Weapon",
    min: 1,
    max: 4,
    options: [ // 5% chance of getting any item
      {
        name: "Arrow †",
        value: "1gp"
      },
      {
        name: "Battle Axe",
        value: "100gp"
      },
      {
        name: "Bolt †",
        value: "12sp"
      },
      {
        name: "Bow †",
        value: "Varies"
      },
      {
        name: "Crossbow †",
        value: "Varies"
      },
      {
        name: "Dagger",
        value: "20gp"
      },
      {
        name: "Dart",
        value: "5gp"
      },
      {
        name: "Flail †",
        value: "Varies"
      },
      {
        name: "Halberd",
        value: "100gp"
      },
      {
        name: "Hammer †",
        value: "Varies"
      },
      {
        name: "Hand Axe",
        value: "40gp"
      },
      {
        name: "Javelin",
        value: "10gp"
      },
      {
        name: "Lance †",
        value: "Varies"
      },
      {
        name: "Mace †",
        value: "Varies"
      },
      {
        name: "Morningstar",
        value: "80gp"
      },
      {
        name: "Scimitar",
        value: "150gp"
      },
      {
        name: "Spear †",
        value: "Varies"
      },
      {
        name: "Trident",
        value: "100gp"
      },
      {
        name: "Two-Handed Axe",
        value: "300gp"
      },
    ],
  },
  {
    percentile: "5-8%",
    name: "Jewlery",
    min: 5,
    max: 8,
    options: [
      {
        name: "Ankle Chain",
        value: getMaterialValue
      },
      {
        name: "Arm Band",
        value: getMaterialValue
      },
      {
        name: "Belt",
        value: getMaterialValue
      },
      {
        name: "Bracelet",
        value: getMaterialValue
      },
      {
        name: "Broach",
        value: getMaterialValue
      },
      {
        name: "Buckle",
        value: getMaterialValue
      },
      {
        name: "Buttons x2-4",
        value: getMaterialValue
      },
      {
        name: "Collar",
        value: getMaterialValue
      },
      {
        name: "Choker",
        value: getMaterialValue
      },
      {
        name: "Earrings",
        value: getMaterialValue
      },
      {
        name: "Locket",
        value: getMaterialValue
      },
      {
        name: "Medallion",
        value: getMaterialValue
      },
      {
        name: "Necklace",
        value: getMaterialValue
      },
      {
        name: "Pendent",
        value: getMaterialValue
      },
      {
        name: "Ring",
        value: getMaterialValue
      },
      {
        name: "Stud",
        value: getMaterialValue
      },
      {
        name: "Tiara",
        value: getMaterialValue
      },
      {
        name: "Toe Ring",
        value: getMaterialValue
      },
      {
        name: "Torque",
        value: getMaterialValue
      },
      {
        name: "Waist Chain",
        value: getMaterialValue
      }
    ]
  },
  {
    percentile: "9-12%",
    name: "Worn & Ceremonial Item",
    min: 9,
    max: 12,
    options: [
      {
        name: "Coronet",
        value: getMaterialValue
      },
      {
        name: "Crown",
        value: getMaterialValue
      },
      {
        name: "Orb",
        value: getMaterialValue
      },
      {
        name: "Scepter",
        value: getMaterialValue
      },
      {
        name: "Signet",
        value: getMaterialValue
      },
      {
        name: "Holy symbol",
        value: getMaterialValue
      },
      {
        name: "Holy water",
        value: getMaterialValue
      },
      {
        name: "Idol",
        value: getMaterialValue
      },
      {
        name: "Relic",
        value: getMaterialValue
      },
      {
        name: "Rune stones",
        value: getMaterialValue
      },
      {
        name: "Fur coat",
        value: { numDice: 2, dieNum: 10 }
      },
      {
        name: "Hair shirt",
        value: { numDice: 1, dieNum: 10 }
      },
      {
        name: "Leather jerkin",
        value: { numDice: 2, dieNum: 10 }
      },
      {
        name: "Oilskin cloth",
        value: { numDice: 2, dieNum: 10 }
      },
      {
        name: "Silk garment",
        value: { numDice: 5, dieNum: 10 }
      },
      {
        name: "Gown",
        value: { numDice: 1, dieNum: 10 }
      },
      {
        name: "Hood",
        value: { numDice: 1, dieNum: 4 }
      },
      {
        name: "Mantle",
        value: { numDice: 1, dieNum: 4 }
      },
      {
        name: "Surcoat",
        value: { numDice: 3, dieNum: 10 }
      },
      {
        name: "Tabard",
        value: { numDice: 2, dieNum: 10 }
      }
    ]
  },
  {
    percentile: "13-16%",
    name: "Hand Crafted item",
    min: 13,
    max: 16,
    options: [
      {
        name: "Wooden bird cage",
        value: 20
      },
      {
        name: "Ivory pipe",
        value: 50
      },
      {
        name: "Paper, ink & quill",
        value: 15
      },
      {
        name: "Silver snuff box",
        value: 100
      },
      {
        name: "Mechanical toy",
        value: { numDice: 2, dieNum: 10 }
      },
      {
        name: "China place settings x1-12 - each",
        value: { numDice: 2, dieNum: 6 }
      },
      {
        name: "Crystal vase",
        value: { numDice: 10, dieNum: 10 }
      },
      {
        name: "Pewter goblet",
        value: 2
      },
      {
        name: "Trencher, silver plated",
        value: 4
      },
      {
        name: "Wooden gourd",
        value: 1
      },
      {
        name: "Golden harp",
        value: getMaterialValue
      },
      {
        name: "Hunter's horn",
        value: getMaterialValue
      },
      {
        name: "Lute of Vaughn",
        value: 120
      },
      {
        name: "Elven mandolin",
        value: 100
      },
      {
        name: "Dragonclaw panpipes",
        value: 500
      },
      {
        name: "Animal pelt",
        value: "10 - 1000gp, depending on locale & rarity"
      },
      {
        name: "Decorative egg",
        value: 100
      },
      {
        name: "Statue",
        value: getMaterialValue
      },
      {
        name: "Carved wood",
        value: getMaterialValue
      },
      {
        name: "Miniature figurine",
        value: getMaterialValue
      },
    ]
  },
  {
    percentile: "17-20%",
    name: "Antiquity",
    min: 17,
    max: 20,
    options: [
      {
        name: "Book(s)",
        value: { numDice: 10, dieNum: 10 }
      },
      {
        name: "Chart(s)",
        value: { numDice: 5, dieNum: 10 }
      },
      {
        name: "Map",
        value: { numDice: 5, dieNum: 10 }
      },
      {
        name: "Scroll",
        value: { numDice: 10, dieNum: 10 }
      },
      {
        name: "Stone Tablet",
        value: { numDice: 10, dieNum: 10, multiplier: 10 }
      },
      {
        name: "Banner",
        value: 250
      },
      {
        name: "Painting",
        value: { numDice: 10, dieNum: 10, multiplier: 10 }
      },
      {
        name: "Rug",
        value: { numDice: 10, dieNum: 10 }
      },
      {
        name: "Tapestry",
        value: { numDice: 10, dieNum: 10, multiplier: 100 }
      },
      {
        name: "Trophy",
        value: { numDice: 10, dieNum: 10 }
      },
      {
        name: "Brazier",
        value: getMaterialValue
      },
      {
        name: "Candelabra",
        value: getMaterialValue
      },
      {
        name: "Coffer",
        value: getMaterialValue
      },
      {
        name: "Mirror",
        value: getMaterialValue
      },
      {
        name: "Urn",
        value: getMaterialValue
      },
      {
        name: "Death Mask",
        value: getMaterialValue
      },
      {
        name: "Hour Glass",
        value: getMaterialValue
      },
      {
        name: "Music Box",
        value: getMaterialValue
      },
      {
        name: "Wine",
        value: { numDice: 2, dieNum: 10, multiplier: 10 }
      },
      {
        name: "Troll Knuckles",
        value: getMaterialValue
      },
    ]
  }
]

const materialValueTable = [
  {
    percentile: "1-2%",
    name: "Clay",
    min: 1,
    max: 2,
    value: 10
  },
  {
    percentile: "03-08%",
    name: "Wood",
    min: 3,
    max: 8,
    value: 50
  },
  {
    percentile: "09-11%",
    name: "Wood with silver inlay",
    min: 9,
    max: 11,
    value: 100
  },
  {
    percentile: "12-13%",
    name: "Wood with gold inlay",
    min: 12,
    max: 13,
    value: 250
  },
  {
    percentile: "14%",
    name: "Wood with gemstones",
    min: 14,
    max: 14,
    value: 500
  },
  {
    percentile: "15-19%",
    name: "Stone",
    min: 15,
    max: 19,
    value: 100
  },
  {
    percentile: "20-23%",
    name: "Stone with gemstones",
    min: 20,
    max: 23,
    value: 500
  },
  {
    percentile: "24%",
    name: "Bone with jewels",
    min: 24,
    max: 24,
    value: 1000
  },
  {
    percentile: "25-34%",
    name: "Silver",
    min: 25,
    max: 34,
    value: 250
  },
  {
    percentile: "35-39%",
    name: "Silver with gold",
    min: 35,
    max: 39,
    value: 500
  },
  {
    percentile: "40-44%",
    name: "Silver with platinum",
    min: 40,
    max: 44,
    value: 750
  },
  {
    percentile: "45-50%",
    name: "Silver with gemstones",
    min: 45,
    max: 50,
    value: 1250
  },
  {
    percentile: "51-53%",
    name: "Ivory",
    min: 51,
    max: 53,
    value: 500
  },
  {
    percentile: "54-56%",
    name: "Ivory with silver",
    min: 54,
    max: 56,
    value: 750
  },
  {
    percentile: "57-58%",
    name: "Ivory with gold",
    min: 57,
    max: 58,
    value: 1000
  },
  {
    percentile: "59-60%",
    name: "Ivory with gemstones",
    min: 59,
    max: 60,
    value: 3000
  },
  {
    percentile: "61-63%",
    name: "Jade",
    min: 61,
    max: 63,
    value: 750
  },
  {
    percentile: "64-67%",
    name: "Jade with ivory",
    min: 64,
    max: 67,
    value: 1000
  },
  {
    percentile: "68-70%",
    name: "Jade silver or gold",
    min: 68,
    max: 70,
    value: 1250
  },
  {
    percentile: "71-72%",
    name: "Jade with platinum",
    min: 71,
    max: 72,
    value: 2000
  },
  {
    percentile: "73-74%",
    name: "Jade with gemstones",
    min: 73,
    max: 74,
    value: 2000
  },
  {
    percentile: "75-86%",
    name: "Gold",
    min: 75,
    max: 86,
    value: 1000
  },
  {
    percentile: "87-89%",
    name: "Gold with platinum",
    min: 87,
    max: 89,
    value: 3500
  },
  {
    percentile: "90-93%",
    name: "Gold with gemstones",
    min: 90,
    max: 93,
    value: 7500
  },
  {
    percentile: "94-96%",
    name: "Platinum",
    min: 94,
    max: 96,
    value: 10000
  },
  {
    percentile: "97-98%",
    name: "Platinum with gemstones",
    min: 97,
    max: 98,
    value: 15000
  },
  {
    percentile: "99%",
    name: "Platinum with mithril",
    min: 99,
    max: 99,
    value: 20000
  },
  {
    percentile: "100%",
    name: "Mithril",
    min: 100,
    max: 100,
    value: 50000
  },
]
