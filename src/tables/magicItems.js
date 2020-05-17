import { rolld } from './index.js'

export const magicItemsIndex = 15;

const getMinMaxItem = (magicTypeTable) => {
  const roll = rolld(100);
  for (const item of magicTypeTable) {
    if (roll >= item.min && roll <= item.max) {
      return item;
    }
  }
}

export const getMagicItem = roll => {
  for (const magicType of magicItemsTable) {
    if (roll >= magicType.min && roll <= magicType.max) {
      const item = getMinMaxItem(magicType.options);
      const itemType = {...item, type: magicType.name}
      return itemType;
    }
  }
};

export const magicItemsTable = [
  {
    percentile: "1-15%",
    name: "Potion",
    min: 1,
    max: 15,
    options: [
      {
        name: "Aid",
        value: 400,
        exp: 200,
        min: 1,
        max: 3
      },
      {
        name: "Bless (oil)",
        value: 300,
        exp: 100,
        min: 4,
        max: 6
      },
      {
        name: "Blur",
        value: 400,
        exp: 200,
        min: 7,
        max: 9
      },
      {
        name: "Clairaudience/Clairvoyance",
        value: 500,
        exp: 300,
        min: 10,
        max: 12
      },
      {
        name: "Cure Light Wounds",
        value: 300,
        exp: 100,
        min: 13,
        max: 15
      },
      {
        name: "Cure Serious Wounds",
        value: 500,
        exp: 300,
        min: 16,
        max: 18
      },
      {
        name: "Cure Critical Wounds",
        value: 700,
        exp: 500,
        min: 19,
        max: 21
      },
      {
        name: "Delay Poison",
        value: 400,
        exp: 200,
        min: 22,
        max: 24
      },
      {
        name: "Endure Elements",
        value: 300,
        exp: 100,
        min: 25,
        max: 27
      },
      {
        name: "Fly",
        value: 500,
        exp: 300,
        min: 28,
        max: 30
      },
      {
        name: "Gaseous Form",
        value: 500,
        exp: 300,
        min: 31,
        max: 33
      },
      {
        name: "Giant Strength",
        value: 500,
        exp: 300,
        min: 34,
        max: 36
      },
      {
        name: "Haste",
        value: 500,
        exp: 300,
        min: 37,
        max: 39
      },
      {
        name: "Heal",
        value: 800,
        exp: 600,
        min: 40,
        max: 42
      },
      {
        name: "Invisibility (potion or oil)",
        value: 400,
        exp: 200,
        min: 43,
        max: 45
      },
      {
        name: "Levitation (potion or oil)",
        value: 400,
        exp: 200,
        min: 46,
        max: 48
      },
      {
        name: "Longevity",
        value: 12000,
        exp: 1500,
        min: 49,
        max: 51
      },
      {
        name: "Neutralize Poison",
        value: 600,
        exp: 400,
        min: 52,
        max: 54
      },
      {
        name: "Nondetection",
        value: 500,
        exp: 300,
        min: 55,
        max: 57
      },
      {
        name: "Pass without Trace",
        value: 300,
        exp: 100,
        min: 58,
        max: 60
      },
      {
        name: "Protection from Alignment",
        value: 300,
        exp: 100,
        min: 61,
        max: 63
      },
      {
        name: "Protection from Arrows",
        value: 500,
        exp: 300,
        min: 64,
        max: 66
      },
      {
        name: "Remove Blindness/deafness",
        value: 500,
        exp: 300,
        min: 67,
        max: 69
      },
      {
        name: "Remove Curse",
        value: 500,
        exp: 300,
        min: 70,
        max: 72
      },
      {
        name: "Remove Disease",
        value: 500,
        exp: 300,
        min: 73,
        max: 75
      },
      {
        name: "Remove Paralysis",
        value: 400,
        exp: 200,
        min: 76,
        max: 78
      },
      {
        name: "Restoration",
        value: 700,
        exp: 400,
        min: 79,
        max: 81
      },
      {
        name: "Sanctuary",
        value: 300,
        exp: 100,
        min: 82,
        max: 84
      },
      {
        name: "Shield of Faith +2",
        value: 300,
        exp: 100,
        min: 85,
        max: 87
      },
      {
        name: "Spider Climb",
        value: 300,
        exp: 100,
        min: 88,
        max: 90
      },
      {
        name: "Tongues",
        value: 500,
        exp: 300,
        min: 91,
        max: 93
      },
      {
        name: "Water Breathing",
        value: 500,
        exp: 300,
        min: 94,
        max: 96
      },
      {
        name: "Water Walk",
        value: 900,
        exp: 700,
        min: 97,
        max: 99
      },
      {
        name: "Trap the Soul",
        value: 900,
        exp: 700,
        min: 100,
        max: 100
      },
    ],
  }
]