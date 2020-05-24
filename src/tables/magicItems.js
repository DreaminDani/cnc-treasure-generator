import { rolld } from './index.js'

export const magicItemsIndex = 100;

const getMinMaxItem = (magicTypeTable) => {
  const roll = rolld(100);
  for (const item of magicTypeTable) {
    if (roll >= item.min && roll <= item.max) {
      return item;
    }
  }
}

export const getMagicItem = roll => {
  // todo add text explaining treasure level and ranges of gp
  for (const magicType of magicItemsTable) {
    if (roll >= magicType.min && roll <= magicType.max) {
      const itemType = getMinMaxItem(magicType.options);

      let item;
      if (itemType.options) {
        const midItem = getMinMaxItem(itemType.options);
        let generatedItem;
        if (midItem.options) {
          if (typeof midItem.options[0] === "string") {
            generatedItem =
            midItem.options[
              Math.floor(Math.random() * Math.floor(midItem.options.length))
            ];
          } else {
            generatedItem = getMinMaxItem(midItem.options).name;
          }
          item = {...midItem, name: generatedItem}
        } else {
          item = midItem;
        }
      } else {
        item = {...itemType, type: magicType.name}
      }

      if (magicType.bonuses) {
        const bonus = getMinMaxItem(magicType.bonuses)

        if (!item.value) {
          item.value = bonus.value;
        }

        if (!item.exp) {
          item.exp = bonus.exp;
        }

        item.type = bonus.type;
      }

      return item;
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
  },
  {
    percentile: "16-30%",
    name: "Scroll",
    min: 16,
    max: 30,
    options: [
      {
        name: "1 Spell Level",
        value: 300,
        exp: 100,
        min: 1,
        max: 8
      },
      {
        name: "2 Spell Levels",
        value: 400,
        exp: 200,
        min: 9,
        max: 16
      },
      {
        name: "3 Spell Levels",
        value: 500,
        exp: 300,
        min: 17,
        max: 24
      },
      {
        name: "4 Spell Levels",
        value: 600,
        exp: 400,
        min: 25,
        max: 32
      },
      {
        name: "5 Spell Levels",
        value: 700,
        exp: 500,
        min: 33,
        max: 40
      },
      {
        name: "6 Spell Levels",
        value: 800,
        exp: 600,
        min: 41,
        max: 45
      },
      {
        name: "7 Spell Levels",
        value: 900,
        exp: 700,
        min: 46,
        max: 50
      },
      {
        name: "8 Spell Levels",
        value: 1000,
        exp: 800,
        min: 51,
        max: 55
      },
      {
        name: "9 Spell Levels",
        value: 1100,
        exp: 900,
        min: 56,
        max: 60
      },
      {
        name: "10 Spell Levels",
        value: 1200,
        exp: 1000,
        min: 61,
        max: 65
      },
      {
        name: "11 Spell Levels",
        value: 1300,
        exp: 1100,
        min: 66,
        max: 68
      },
      {
        name: "12 Spell Levels",
        value: 1400,
        exp: 1200,
        min: 69,
        max: 71
      },
      {
        name: "13 Spell Levels",
        value: 1500,
        exp: 1300,
        min: 72,
        max: 74
      },
      {
        name: "14 Spell Levels",
        value: 1600,
        exp: 1400,
        min: 75,
        max: 77
      },
      {
        name: "15 Spell Levels",
        value: 1700,
        exp: 1500,
        min: 78,
        max: 80
      },
      {
        name: "Teleport without Error",
        value: 900,
        exp: 700,
        min: 81,
        max: 82
      },
      {
        name: "Symbol",
        value: 1000,
        exp: 800,
        min: 83,
        max: 84
      },
      {
        name: "Trap the Soul",
        value: 1100,
        exp: 900,
        min: 85,
        max: 86
      },
      {
        name: "Time Stop",
        value: 1100,
        exp: 900,
        min: 87,
        max: 88
      },
      {
        name: "True Resurrection",
        value: 1100,
        exp: 900,
        min: 89,
        max: 90
      },
      {
        name: "Mass Heal",
        value: 1000,
        exp: 800,
        min: 91,
        max: 92
      },
      {
        name: "Gate",
        value: 1100,
        exp: 900,
        min: 93,
        max: 94
      },
      {
        name: "Create Greater Undead",
        value: 1000,
        exp: 800,
        min: 95,
        max: 96
      },
      {
        name: "Shape Change",
        value: 1100,
        exp: 900,
        min: 97,
        max: 98
      },
      {
        name: "Clone",
        value: 1100,
        exp: 900,
        min: 99,
        max: 100
      }
    ]
  },
  {
    percentile: "31-45%",
    name: "Weapon",
    min: 31,
    max: 45,
    bonuses: [
      {
        type: "+1",
        min: 1,
        max: 45,
        value: 1000,
        exp: 250
      },
      {
        type: "+2",
        min: 46,
        max: 75,
        value: 4000,
        exp: 750
      },
      {
        type: "+3",
        min: 76,
        max: 90,
        value: 9000,
        exp: 1200
      },
      {
        type: "+4",
        min: 91,
        max: 98,
        value: 16000,
        exp: 1750
      },
      {
        type: "+5",
        min: 99,
        max: 100,
        value: 25000,
        exp: 2500
      } 
    ],
    options: [
      {
        name: "Sword",
        min: 1,
        max: 40,
        options: [
          {
            name: "Bastard Sword",
            min: 1,
            max: 10
          },
          {
            options: ["Broad Sword", "Falchion"],
            min: 11,
            max: 30
          },
          {
            name: ["Short Sword", "Scimitar", "Rapier"],
            min: 41,
            max: 50
          },
          {
            name: "Long Sword",
            min: 51,
            max: 90
          },
          {
            name: "Two Handed Sword",
            min: 91,
            max: 100
          }
        ]
      },
      {
        name: "Spcial Sword",
        min: 41,
        max: 50,
        options: [
          {
            name: "Bane Sword",
            min: 1,
            max: 8,
            value: 13500,
            exp: 4500
          },
          {
            name: "Sword of Dancing",
            min: 9,
            max: 16,
            value: 12500,
            exp: 4100
          },
          {
            name: "Sword of Defending",
            min: 17,
            max: 24,
            value: 24500,
            exp: 8100
          },
          {
            name: "Dragon Slayer",
            min: 25,
            max: 32,
            value: 29000,
            exp: 7250
          },
          {
            name: "Featheredged Sword",
            min: 33,
            max: 36,
            value: 31750,
            exp: 15000
          },
          {
            name: "Flaming Sword",
            min: 37,
            max: 44,
            value: 7750,
            exp: 2000
          },
          {
            name: "Frost Bane",
            min: 45,
            max: 52,
            value: 13725,
            exp: 3000
          },
          {
            name: "Holy Avenger",
            min: 53,
            max: 56,
            value: 55000,
            exp: 27000
          },
          {
            name: "Sword of Life Stealing",
            min: 57,
            max: 60,
            value: 17000,
            exp: 5600
          },
          {
            name: "Luck Blade",
            min: 61,
            max: 68,
            value: 21500,
            exp: 7100
          },
          {
            name: "Nine Lives Stealer",
            min: 69,
            max: 72,
            value: 8500,
            exp: 2800
          },
          {
            name: "Sword of Puncturing",
            min: 73,
            max: 80,
            value: 12000,
            exp: 3000
          },
          {
            name: "Sylvan Sword",
            min: 81,
            max: 88,
            value: 10000,
            exp: 3000
          },
          {
            name: "Vorpal Sword",
            min: 89,
            max: 92,
            value: 38750,
            exp: 19000
          },
          {
            name: "Sword of Wounding",
            min: 93,
            max: 100,
            value: 16000,
            exp: 5300
          }
        ]
      },
      {
        name: "Miscellaneous Weapon",
        min: 51,
        max: 90,
        options: [
          {
            name: "10 Arrow †",
            min: 1,
            max: 2
          },
          {
            name: "Axe, battle",
            min: 3,
            max: 8
          },
          {
            name: "Axe, hand/throwing",
            min: 9,
            max: 12
          },
          {
            name: "Axe, two–handed",
            min: 13,
            max: 16
          },
          {
            name: "Bardiche",
            min: 17,
            max: 20
          },
          {
            name: "10 Bolt †",
            min: 21,
            max: 24
          },
          {
            name: "Bow †",
            min: 25,
            max: 28
          },
          {
            name: "Club",
            min: 29,
            max: 32
          },
          {
            name: "Crossbow †",
            min: 33,
            max: 36
          },
          {
            name: "Crowbill (Lucerne)",
            min: 37,
            max: 40
          },
          {
            name: "Dagger",
            min: 41,
            max: 44
          },
          {
            name: "Dart",
            min: 45,
            max: 48
          },
          {
            name: "Flail †",
            min: 49,
            max: 52
          },
          {
            name: "Halberd",
            min: 53,
            max: 56
          },
          {
            name: "Hammer †",
            min: 57,
            max: 60
          },
          {
            name: "Javelin",
            min: 61,
            max: 64
          },
          {
            name: "Lance †",
            min: 65,
            max: 68
          },
          {
            name: "Mace †",
            min: 69,
            max: 72
          },
          {
            name: "Morningstar",
            min: 73,
            max: 76
          },
          {
            name: "Pole arm †",
            min: 77,
            max: 80
          },
          {
            name: "Sling",
            min: 81,
            max: 84
          },
          {
            name: "Spear †",
            min: 85,
            max: 88
          },
          {
            name: "Staff",
            min: 89,
            max: 92
          },
          {
            name: "Trident",
            min: 93,
            max: 96
          },
          {
            name: "Whip",
            min: 97,
            max: 100
          }
        ]
      },
      {
        name: "Special Weapon",
        min: 91,
        max: 100,
        options: [
          {
            name: "Bane Weapon",
            min: 1,
            max: 8,
            value: 13500,
            exp: 4500
          },
          {
            name: "Dagger of Venom",
            min: 9,
            max: 16,
            value: 4750,
            exp: 1070
          },
          {
            name: "Dwarven Thrower",
            min: 17,
            max: 24,
            value: 4750,
            exp: 1070
          },
          {
            name: "Featheredged Axe",
            min: 25,
            max: 28,
            value: 18000,
            exp: 6000
          },
          {
            name: "Javelin of Lightening",
            min: 29,
            max: 36,
            value: 4500,
            exp: 450
          },
          {
            name: "Mace of Disruption",
            min: 37,
            max: 40,
            value: 25500,
            exp: 8500
          },
          {
            name: "Mace of Smiting",
            min: 41,
            max: 48,
            value: 17500,
            exp: 5800
          },
          {
            name: "Mace of Terror",
            min: 49,
            max: 56,
            value: 8500,
            exp: 2100
          },
          {
            name: "Nine Lives Stealer",
            min: 57,
            max: 60,
            value: 8500,
            exp: 2800
          },
          {
            name: "Oath Bow",
            min: 61,
            max: 64,
            value: 25000,
            exp: 5000
          },
          {
            name: "Slaying Arrow/Bolt",
            min: 65,
            max: 68,
            value: 9500,
            exp: 2300
          },
          {
            name: "Sleep Arrow/Bolt",
            min: 69,
            max: 76,
            value: 1250,
            exp: 350
          },
          {
            name: "Sylvan Weapon",
            min: 77,
            max: 84,
            value: 10000,
            exp: 3000
          },
          {
            name: "Trident of Fish Command",
            min: 85,
            max: 92,
            value: 5000,
            exp: 1200
          },
          {
            name: "Weapon of Wounding",
            min: 93,
            max: 100,
            value: 16000,
            exp: 5300
          }
        ]
      }
    ]
  },
  {
    percentile: "46-60%",
    name: "",
    min: 46,
    max: 60,
    bonuses: [
      {
        type: "+1",
        min: 1,
        max: 45,
        value: 1000,
        exp: 250
      },
      {
        type: "+2",
        min: 46,
        max: 75,
        value: 4000,
        exp: 750
      },
      {
        type: "+3",
        min: 76,
        max: 90,
        value: 9000,
        exp: 1200
      },
      {
        type: "+4",
        min: 91,
        max: 98,
        value: 16000,
        exp: 1750
      },
      {
        type: "+5",
        min: 99,
        max: 100,
        value: 25000,
        exp: 2500
      } 
    ],
    options: [
      {
        name: "Shield",
        min: 1,
        max: 75,
        options: [
          {
            name: "Buckler",
            min: 1,
            max: 40
          },
          {
            name: "Medium Shield",
            min: 41,
            max: 70
          },
          {
            name: "Large Sheild",
            min: 71,
            max: 90
          },
          {
            name: "Pavis",
            min: 91,
            max: 99
          },
          {
            name: "Random Shield",
            min: 100,
            max: 100,
            options: [
              {
                name: "Animated Shield",
                min: 1,
                max: 40
              },
              {
                name: "Bashing Shield",
                min: 41,
                max: 70
              },
              {
                name: "Blinding Shield",
                min: 71,
                max: 90
              },
              {
                name: "Lion's Shield",
                min: 91,
                max: 100
              }
            ]
          },
        ]
      },
      {
        name: "Armor",
        min: 76,
        max: 100,
        options: [
          {
            name: "Padded Armor",
            min: 1,
            max: 13
          },
          {
            name: "Leather Armor",
            min: 14,
            max: 29
          },
          {
            name: "Studded Armor",
            min: 30,
            max: 36
          },
          {
            name: "Ring Armor",
            min: 37,
            max: 46
          },
          {
            name: "Mail Shirt",
            min: 47,
            max: 51
          },
          {
            name: "Hide Armor",
            min: 52,
            max: 61
          },
          {
            name: "Scale Mail",
            min: 62,
            max: 71
          },
          {
            name: "Chainmail",
            min: 72,
            max: 76
          },
          {
            name: "Breastplate",
            min: 77,
            max: 85
          },
          {
            name: "Splint Mail",
            min: 86,
            max: 90
          },
          {
            name: "Banded Mail",
            min: 91,
            max: 95
          },
          {
            name: "Plate Mail",
            min: 96,
            max: 98
          },
          {
            name: "Full Plate",
            min: 99,
            max: 99
          },
          {
            name: "Random Armor",
            min: 100,
            max: 100,
            options: [
              {
                name: "Cold/Fire Resistance Armor",
                min: 1,
                max: 18
              },
              {
                name: "Dwarven Plate",
                min: 19,
                max: 36
              },
              {
                name: "Elven Chain",
                min: 37,
                max: 54
              },
              {
                name: "Plate of Etherealness",
                min: 55,
                max: 64
              },
              {
                name: "Plate Armor of the Deep",
                min: 65,
                max: 82
              },
              {
                name: "Spell Resistance Armor",
                min: 83,
                max: 100
              },
            ]
          }
        ]
      }
    ]
  },
  {
    percentile: "61-80%",
    name: "",
    min: 61,
    max: 80,
    options: [
      {
        min: 1,
        max: 20,
        options: [
          {
            name: "Amulet of Health",
            min: 1,
            max: 4,
            value: "4000–36,000",
            exp: "500xp per bonus"
          },
          {
            name: "Amulet of Mighty Fists",
            min: 5,
            max: 8,
            value: "1,000–25,000",
            exp: "500xp per bonus"
          },
          {
            name: "Amulet of Natural Armor",
            min: 9,
            max: 12,
            value: "1,000–25,000",
            exp: "500xp per bonus"
          },
          {
            name: "Amulet of the Planes",
            min: 13,
            max: 16,
            value: "1,000–25,000",
            exp: "500xp per bonus"
          },
          {
            name: "Bag of Holding",
            min: 17,
            max: 20,
            value: 20250,
            exp: 6750
          },
          {
            name: "Bag of Tricks",
            min: 21,
            max: 24,
            value: "1,000/4,000/16,000",
            exp: "300/1,250/3,000xp"
          },
          {
            name: "Belt of Giant Strength",
            min: 25,
            max: 28,
            value: "10,000–60,000",
            exp: 1000
          },
          {
            name: "Blessed Book",
            min: 29,
            max: 32,
            value: "10,000–60,000",
            exp: "100 exp per spell level found in the book that the Wizard does not already possess"
          },
          {
            name: "Boat, Folding",
            min: 33,
            max: 36,
            value: 17500,
            exp: 1750
          },
          {
            name: "Boots of Elvenkind",
            min: 37,
            max: 40,
            value: 13500,
            exp: 3500
          },
          {
            name: "Boots of Levitation",
            min: 41,
            max: 44,
            value: 11000,
            exp: 2500
          },
          {
            name: "Boots of Speed",
            min: 45,
            max: 48,
            value: 12750,
            exp: 1275
          },
          {
            name: "Boots of Striding and Springing",
            min: 49,
            max: 52,
            value: 9000,
            exp: 900
          },
          {
            name: "Boots of Teleportation",
            min: 53,
            max: 56,
            value: 20250,
            exp: 6750
          },
          {
            name: "Boots of the Winterlands",
            min: 57,
            max: 60,
            value: 9500,
            exp: 950
          },
          {
            name: "Bowl of Commanding Water Elementals",
            min: 61,
            max: 64,
            value: 25500,
            exp: 8500
          },
          {
            name: "Bracers of Armor",
            min: 65,
            max: 68,
            value: "1,000–25,000",
            exp: "500xp per bonus"
          },
          {
            name: "Bracers of Deflection",
            min: 69,
            max: 72,
            value: 13500,
            exp: 4500
          },
          {
            name: "Brazier of Commanding Fire Elementals",
            min: 73,
            max: 76,
            value: 25000,
            exp: 8500
          },
          {
            name: "Brooch of Shielding",
            min: 77,
            max: 80,
            value: 11500,
            exp: 1150
          },
          {
            name: "Broom of Flying",
            min: 81,
            max: 84,
            value: 12750,
            exp: 4250
          },
          {
            name: "Candle of Invocation",
            min: 85,
            max: 88,
            value: 22000,
            exp: 7300
          },
          {
            name: "Cape of the Mountebank",
            min: 89,
            max: 92,
            value: 16000,
            exp: 1600
          },
          {
            name: "Carpet of Flying",
            min: 93,
            max: 96,
            value: 17250,
            exp: 5750
          },
          {
            name: "Censer of Controlling Air Elementals",
            min: 97,
            max: 100,
            value: 25000,
            exp: 8500
          },
        ]
      },
      {
        min: 21,
        max: 40,
        options: [
          {
            name: "Chime of Interruption",
            min: 1,
            max: 4,
            value: 13500,
            exp: 1350
          },
          {
            name: "Chime of Opening",
            min: 5,
            max: 8,
            value: 10500,
            exp: 1050
          },
          {
            name: "Circlet of Persuasion",
            min: 9,
            max: 12,
            value: 11250,
            exp: 1125
          },
          {
            name: "Cloak of Arachnida",
            min: 13,
            max: 16,
            value: 17500,
            exp: 1750
          },
          {
            name: "Cloak of the Bat",
            min: 17,
            max: 20,
            value: 13500,
            exp: 3000
          },
          {
            name: "Cloak of Charisma",
            min: 21,
            max: 24,
            value: "4,000–25,000",
            exp: "500xp per bonus"
          },
          {
            name: "Cloak of Displacement",
            min: 25,
            max: 28,
            value:  17000,
            exp: 1700
          },
          {
            name: "Cloak of Elvenkind",
            min: 29,
            max: 32,
            value:  15500,
            exp: 3000
          },
          {
            name: "Cloak of Etherealness",
            min: 33,
            max: 36,
            value:  11250,
            exp: 2500
          },
          {
            name: "Cloak of the Manta Ray",
            min: 37,
            max: 40,
            value:  11250,
            exp: 2500
          },
          {
            name: "Cloak of Resistance",
            min: 41,
            max: 44,
            value:  "1,000–25,000",
            exp: "500xp per bonus"
          },
          {
            name: "Crystal Ball",
            min: 45,
            max: 48,
            value:  "see text for ",
            exp: 5000
          },
          {
            name: "Cube of Force",
            min: 49,
            max: 52,
            value:  47250,
            exp: 4000
          },
          {
            name: "Cube of Frost Resistance",
            min: 53,
            max: 56,
            value: 12750,
            exp: 1270
          },
          {
            name: "Cubic Gate",
            min: 57,
            max: 60,
            value: 24750,
            exp: 4500
          },
          {
            name: "Decanter of Endless Water",
            min: 61,
            max: 64,
            value: 13500,
            exp: 1350
          },
          {
            name: "Drums of Panic",
            min: 65,
            max: 68,
            value: 4750,
            exp: 475
          },
          {
            name: "Dust of Appearance",
            min: 69,
            max: 72,
            value: 8500,
            exp: 850
          },
          {
            name: "Dust of Disappearance",
            min: 73,
            max: 76,
            value: 5500,
            exp: 550
          },
          {
            name: "Dust of Illusion",
            min: 77,
            max: 80,
            value: 5500,
            exp: 550
          },
          {
            name: "Efficient Quiver",
            min: 81,
            max: 84,
            value: 8500,
            exp: 850
          },
          {
            name: "Efreeti Bottle",
            min: 85,
            max: 88,
            value: 47250,
            exp: 4700
          },
          {
            name: "Elemental Gem",
            min: 89,
            max: 92,
            value: 20250,
            exp: 2000
          },
          {
            name: "Eversmoking Bottle",
            min: 93,
            max: 96,
            value: 4250,
            exp: 425
          },
          {
            name: "Eyes of Doom",
            min: 97,
            max: 100,
            value: "Free round at the House of Sludge, no ",
            exp: 7
          }
        ]
      },
      {
        min: 41,
        max: 60,
        options: [
          {
            name: "Eyes of the Eagle",
            min: 1,
            max: 4,
            value: 4250,
            exp: 425
          },
          {
            name: "Figurines of Wondrous Power",
            min: 5,
            max: 8,
            value: "see text for ",
            exp: "see text for xp"
          },
          {
            name: "Feather Token",
            min: 9,
            max: 12,
            value: 4500,
            exp: 450
          },
          {
            name: "Gauntlets of Ogre Power",
            min: 13,
            max: 16,
            value: 9500,
            exp: 950
          },
          {
            name: "Gem of Brightness",
            min: 17,
            max: 20,
            value: 17750,
            exp: 2000
          },
          {
            name: "Gem of Seeing",
            min: 21,
            max: 24,
            value: 15250,
            exp: 1500
          },
          {
            name: "Gloves of Dexterity",
            min: 25,
            max: 28,
            value: "1,000–25,000",
            exp: "500xp per bonus,"
          },
          {
            name: "Gloves of Swimming and Climbing",
            min: 29,
            max: 32,
            value:  9000,
            exp: 900
          },
          {
            name: "Handy Haversack",
            min: 33,
            max: 36,
            value:  12250,
            exp: 1225
          },
          {
            name: "Harp of Charming",
            min: 37,
            max: 40,
            value:  7750,
            exp: 2000
          },
          {
            name: "Hat of Disguise",
            min: 41,
            max: 44,
            value:  5500,
            exp: 550
          },
          {
            name: "Helm of Brilliance",
            min: 45,
            max: 48,
            value:  34750,
            exp: 3000
          },
          {
            name: "Helm of Comprehend Language & Read Magic",
            min: 49,
            max: 52,
            value:  4250,
            exp: 425
          },
          {
            name: "Helm of Telepathy",
            min: 53,
            max: 56,
            value: 17250,
            exp: 3450
          },
          {
            name: "Helm of Teleportation",
            min: 57,
            max: 60,
            value: 20250,
            exp: 2250
          },
          {
            name: "Helm of Underwater Action",
            min: 61,
            max: 64,
            value: 4500,
            exp: 1125
          },
          {
            name: "Horn of Blasting",
            min: 65,
            max: 68,
            value: 17500,
            exp: 1750
          },
          {
            name: "Horn of Fog",
            min: 69,
            max: 72,
            value: 4250,
            exp: 425
          },
          {
            name: "Horn of Goodness/Evil",
            min: 73,
            max: 76,
            value: 4250,
            exp: 1050
          },
          {
            name: "Horn of the Merfolk",
            min: 77,
            max: 80,
            value: 12500,
            exp: 2500
          },
          {
            name: "Horn of Valhalla",
            min: 81,
            max: 84,
            value: 32000,
            exp: "1,250xp (Doubles with each horn)"
          },
          {
            name: "Horseshoes of Speed",
            min: 85,
            max: 88,
            value: 7750,
            exp: 775
          },
          {
            name: "Horseshoes of the Zephyr",
            min: 89,
            max: 92,
            value: 9750,
            exp: 975
          },
          {
            name: "Instant Fortress",
            min: 93,
            max: 96,
            value: 225000,
            exp: 2250
          },
          {
            name: "Ioun Stones",
            min: 97,
            max: 100,
            value: "See text for",
            exp: "See text for xp"
          }
        ]
      },
      {
        min: 61,
        max: 80,
        options: [
          {
            name: "Iron Bands of Binding",
            min: 1,
            max: 4,
            value: 17500,
            exp: 1750
          },
          {
            name: "Iron Flask",
            min: 5,
            max: 8,
            value: 0,
            exp: 0
          },
          {
            name: "Lyre of Building",
            min: 9,
            max: 12,
            value: 13500,
            exp: 2000
          },
          {
            name: "Mantle of Spell Resistance",
            min: 13,
            max: 16,
            value: 200000,
            exp: 20000
          },
          {
            name: "Manual of Bodily Health",
            min: 17,
            max: 20,
            value: "10,000–60,000",
            exp: "500xp per bonus"
          },
          {
            name: "Manual of Gainful Exercise",
            min: 21,
            max: 24,
            value: "10,000–60,000",
            exp: "500xp per bonus"
          },
          {
            name: "Manual of Quickness of Action",
            min: 25,
            max: 28,
            value: "10,000–60,000",
            exp: "500xp per bonus"
          },
          {
            name: "Mattock of the Titans",
            min: 29,
            max: 32,
            value: 11500,
            exp: 1150
          },
          {
            name: "Maul of the Titans",
            min: 33,
            max: 36,
            value: 13500,
            exp: 1350
          },
          {
            name: "Medallion of Thoughts",
            min: 37,
            max: 40,
            value: 5500,
            exp: 1500
          },
          {
            name: "Mirror of Life Trapping",
            min: 41,
            max: 44,
            value: 39000,
            exp: 2300
          },
          {
            name: "Mirror of Mental Prowess",
            min: 45,
            max: 48,
            value:  37250,
            exp: 3720
          },
          {
            name: "Mirror of Opposition",
            min: 49,
            max: 52,
            value:  25600,
            exp: 2560
          },
          {
            name: "Necklace of Adaptation",
            min: 53,
            max: 56,
            value: 4500,
            exp: 450
          },
          {
            name: "Necklace of Fireballs",
            min: 57,
            max: 60,
            value: "See text for ",
            exp:  "See text for xp"
          },
          {
            name: "Orb of Storms",
            min: 61,
            max: 64,
            value: 49500,
            exp: 2500
          },
          {
            name: "Pearl of Power",
            min: 65,
            max: 68,
            value: "1,000–81,000",
            exp: "1,000 per level of spell"
          },
          {
            name: "Pearl of the Sirens",
            min: 69,
            max: 72,
            value: 13500,
            exp: 1350
          },
          {
            name: "Periapt of Health",
            min: 73,
            max: 76,
            value: 9500,
            exp: 950
          },
          {
            name: "Periapt of Proof Against Poison",
            min: 77,
            max: 80,
            value: 9500,
            exp: 950
          },
          {
            name: "Periapt of Wisdom",
            min: 81,
            max: 84,
            value: "1,000–25,000",
            exp: "500 per bonus"
          },
          {
            name: "Periapt of Wound Closure",
            min: 85,
            max: 88,
            value: 17000,
            exp: 1000
          },
          {
            name: "Phylactery of Faithfulness",
            min: 89,
            max: 92,
            value: 5500,
            exp: 1250
          },
          {
            name: "Phylactery of Undead Turning",
            min: 93,
            max: 96,
            value: 16000,
            exp: 1600
          },
          {
            name: "Pipes of the Sewers",
            min: 97,
            max: 100,
            value: 7500,
            exp: 750
          }
        ]
      },
      {
        min: 81,
        max: 100,
        options: [
          {
            name: "Portable Hole",
            min: 1,
            max: 4,
            value: 29250,
            exp: 2950
          },
          {
            name: "Restorative Ointment",
            min: 5,
            max: 8,
            value: 5500,
            exp: 550
          },
          {
            name: "Ring Gates",
            min: 9,
            max: 12,
            value: "If both rings are found together, if found singly they are valued at collector’s market value... 30,500",
            exp: 3050
          },
          {
            name: "Robe of the Arch-magi",
            min: 13,
            max: 16,
            value: 75000,
            exp: 7500
          },
          {
            name: "Robe of Blending",
            min: 17,
            max: 20,
            value: 23000,
            exp: 2300
          },
          {
            name: "Robe of Eyes",
            min: 21,
            max: 24,
            value: 17500,
            exp: 1750
          },
          {
            name: "Robe of Scintillating Colors",
            min: 25,
            max: 28,
            value: 13500,
            exp: 1350
          },
          {
            name: "Robe of Useful Items",
            min: 29,
            max: 32,
            value: 14000,
            exp: 1400
          },
          {
            name: "Rope of Climbing",
            min: 33,
            max: 36,
            value: 5750,
            exp: 575
          },
          {
            name: "Rope of Entanglement",
            min: 37,
            max: 40,
            value: 7750,
            exp: 775
          },
          {
            name: "Scabbard of Sharpness",
            min: 41,
            max: 44,
            value: 17500,
            exp: 1700
          },
          {
            name: "Scarab of Protection",
            min: 45,
            max: 48,
            value:  34000,
            exp: 1200
          },
          {
            name: "Shrouds of Disintegration",
            min: 49,
            max: 52,
            value: 1650,
            exp: 165
          },
          {
            name: "Slippers of Spider Climbing",
            min: 53,
            max: 56,
            value: 9000,
            exp: 900
          },
          {
            name: "Stone of Alarm",
            min: 57,
            max: 60,
            value: 1400,
            exp: 140
          },
          {
            name: "Stone of Controlling Earth Elementals",
            min: 61,
            max: 64,
            value: "10,000–60,000",
            exp: 8500
          },
          {
            name: "Stone of Good Luck",
            min: 65,
            max: 68,
            value: 4250,
            exp: 425
          },
          {
            name: "Stone Horse",
            min: 69,
            max: 72,
            value: 8500,
            exp: 850
          },
          {
            name: "Strand of Prayer Beads",
            min: 73,
            max: 76,
            value: "See text for ",
            exp: "See text for xp"
          },
          {
            name: "Tome of Clear Thought",
            min: 77,
            max: 80,
            value: "1,000–25,000",
            exp: "500xp per bonus"
          },
          {
            name: "Tome of Leadership and Influence",
            min: 81,
            max: 84,
            value: "1,000–25,000",
            exp: "500 per bonus"
          },
          {
            name: "Tome of Understanding",
            min: 85,
            max: 88,
            value: "1,000–25,000",
            exp: "500 per bonus"
          },
          {
            name: "Well of Many Worlds",
            min: 89,
            max: 92,
            value: 40450,
            exp: 2000
          },
          {
            name: "Wind Fans",
            min: 93,
            max: 96,
            value: 5500,
            exp: 550
          },
          {
            name: "Wings of Flying",
            min: 97,
            max: 100,
            value: 15750,
            exp: 1575
          }
        ]
      }
    ]
  },
  {
    percentile: "81-90%",
    name: "",
    min: 81,
    max: 90,
    options: [
      {
        name: "Ring of Animal Friendship",
        min: 1,
        max: 4,
        value: 1650,
        exp: 330
      },
      {
        name: "Ring of Blinking",
        min: 5,
        max: 8,
        value: 9800,
        exp: 1960
      },
      {
        name: "Ring of Chameleon Power",
        min: 9,
        max: 12,
        value: 5800,
        exp: 1160
      },
      {
        name: "Ring of Climbing",
        min: 13,
        max: 16,
        value: 2800,
        exp: 560
      },
      {
        name: "Ring of Counter Spells",
        min: 17,
        max: 20,
        value: 5050,
        exp: 1010
      },
      {
        name: "Ring of Elemental Command [one of four types]",
        min: 21,
        max: 21,
        value: 45000,
        exp: 9000
      },
      {
        name: "Ring of Energy Resistance",
        min: 22,
        max: 25,
        value: 25000,
        exp: 5000
      },
      {
        name: "Ring of Evasion",
        min: 25,
        max: 29,
        value: 20000,
        exp: 5000
      },
      {
        name: "Ring of Feather Falling",
        min: 30,
        max: 33,
        value: 1550,
        exp: 310
      },
      {
        name: "Ring of Force Shield",
        min: 34,
        max: 37,
        value: 5050,
        exp: 1010
      },
      {
        name: "Ring of Freedom of Movement",
        min: 38,
        max: 41,
        value: 8300,
        exp: 1660
      },
      {
        name: "Ring of Friend Shield",
        min: 42,
        max: 45,
        value: 6050,
        exp: 1210
      },
      {
        name: "Ring of Invisibility",
        min: 46,
        max: 46,
        value: 5800,
        exp: 1160
      },
      {
        name: "Ring of Jumping",
        min: 47,
        max: 50,
        value: 1550,
        exp: 310
      },
      {
        name: "Ring of Mind Shielding",
        min: 51,
        max: 54,
        value: 5800,
        exp: 1160
      },
      {
        name: "Ring of Protection",
        min: 55,
        max: 58,
        value: "2,300-37,300",
        exp: "xp value is 20% of gold piece value."
      },
      {
        name: "Ring of Ram",
        min: 59,
        max: 62,
        value: 5800,
        exp: 1160
      },
      {
        name: "Ring of Regeneration",
        min: 63,
        max: 63,
        value: 24050,
        exp: 4810
      },
      {
        name: "Ring of Shooting Stars",
        min: 64,
        max: 67,
        value: 9300,
        exp: 1860
      },
      {
        name: "Ring of Spell Storing",
        min: 68,
        max: 71,
        value: "5,050-38,000",
        exp: "xp value is 20% of gold piece value"
      },
      {
        name: "Ring of Spell Turning",
        min: 72,
        max: 75,
        value: 41800,
        exp: 8360
      },
      {
        name: "Ring of Sustenance",
        min: 76,
        max: 79,
        value: 2800,
        exp: 560
      },
      {
        name: "Ring of Swimming",
        min: 80,
        max: 83,
        value: 1300,
        exp: 260
      },
      {
        name: "Ring of Telekinesis",
        min: 84,
        max: 87,
        value: 12550,
        exp: 2510
      },
      {
        name: "Ring of Three Wishes",
        min: 88,
        max: 88,
        value: 114750,
        exp: 5000
      },
      {
        name: "Ring of Water Walking",
        min: 89,
        max: 92,
        value: 5800,
        exp: 1160
      },
      {
        name: "Ring of Wizardy",
        min: 93,
        max: 96,
        value: "20,000-100,000",
        exp: "xp value is 20% of gold piece value"
      },
      {
        name: "Ring of X–Ray Vision",
        min: 97,
        max: 100,
        value: 9300,
        exp: 930
      }
    ]
  },
  {
    percentile: "91-97%",
    name: "",
    min: 91,
    max: 97,
    options: [
      {
        name: "Rod of Absorption",
        min: 1,
        max: 4,
        value: 50000,
        exp: 8300
      },
      {
        name: "Rod of Cancellation",
        min: 5,
        max: 5,
        value: 13500,
        exp: 2250
      },
      {
        name: "Rod of Lordly Might",
        min: 6,
        max: 6,
        value: 20500,
        exp: 3400
      },
      {
        name: "Rod of Negation",
        min: 7,
        max: 10,
        value: 9500,
        exp: 1500
      },
      {
        name: "Rod of Python",
        min: 11,
        max: 14,
        value: 8750,
        exp: 1400
      },
      {
        name: "Rod of Rulership",
        min: 15,
        max: 18,
        value: 20000,
        exp: 3200
      },
      {
        name: "Rod of Thunder & Lightening",
        min: 19,
        max: 22,
        value: 29000,
        exp: 4800
      },
      {
        name: "Rod of Withering",
        min: 23,
        max: 26,
        value: 25000,
        exp: 4000
      },
      {
        name: "Rod of Wonder",
        min: 27,
        max: 30,
        value: 13500,
        exp: 2250
      },
      {
        name: "Staff of Abjuration",
        min: 31,
        max: 34,
        value: 54000,
        exp: 9000
      },
      {
        name: "Staff of Conjuration",
        min: 35,
        max: 38,
        value: 47000,
        exp: 7800
      },
      {
        name: "Staff of Evocation",
        min: 39,
        max: 42,
        value: 47000,
        exp: 7800
      },
      {
        name: "Staff of Fire",
        min: 43,
        max: 46,
        value: 23000,
        exp: 3800
      },
      {
        name: "Staff of Frost",
        min: 47,
        max: 50,
        value: 32500,
        exp: 5400
      },
      {
        name: "Staff of Healing",
        min: 51,
        max: 54,
        value: 31000,
        exp: 5100
      },
      {
        name: "Staff of Power",
        min: 55,
        max: 58,
        value: 72000,
        exp: 12000
      },
      {
        name: "Staff of Resurrection",
        min: 59,
        max: 59,
        value: 41000,
        exp: 6800
      },
      {
        name: "Staff of Woodlands",
        min: 60,
        max: 63,
        value: 42000,
        exp: 7000
      },
      {
        name: "Wand of Color Spray",
        min: 64,
        max: 67,
        value: 12250,
        exp: 2000
      },
      {
        name: "Wand of Darkness",
        min: 68,
        max: 71,
        value: 12250,
        exp: 2000
      },
      {
        name: "Wand of Dispel Magic",
        min: 72,
        max: 75,
        value: 16750,
        exp: 2800
      },
      {
        name: "Wand of Illusion",
        min: 76,
        max: 79,
        value: 22000,
        exp: 3600
      },
      {
        name: "Wand of Invisibility",
        min: 80,
        max: 80,
        value: 31000,
        exp: 5000
      },
      {
        name: "Wand of Levitation",
        min: 81,
        max: 84,
        value: 26000,
        exp: 4300
      },
      {
        name: "Wand of Magic Missile",
        min: 85,
        max: 88,
        value: 12250,
        exp: 2000
      },
      {
        name: "Wand of Polymorph",
        min: 89,
        max: 92,
        value: 23000,
        exp: 3800
      },
      {
        name: "Wand of Restoration",
        min: 93,
        max: 96,
        value: 18000,
        exp: 3000
      },
      {
        name: "Wand of Suggestion",
        min: 97,
        max: 100,
        value: 14500,
        exp: 2400
      },
    ]
  },
  {
    percentile: "98-99%",
    name: "Cursed Item",
    min: 98,
    max: 99,
    options: [
      {
        name: "Amulet of Inescapable Location",
        min: 1,
        max: 4
      },
      {
        name: "AArmor of Rage",
        min: 5,
        max: 8
      },
      {
        name: "Bag of Devouring",
        min: 9,
        max: 12
      },
      {
        name: "Boots of Dancing",
        min: 13,
        max: 16
      },
      {
        name: "Bracers of Defenselessness",
        min: 17,
        max: 20
      },
      {
        name: "Flask of Curses",
        min: 21,
        max: 24
      },
      {
        name: "Gauntlets of Fumbling",
        min: 25,
        max: 28
      },
      {
        name: "Helm of Opposite Alignment",
        min: 29,
        max: 32
      },
      {
        name: "Incense of Obsession",
        min: 33,
        max: 36
      },
      {
        name: "Mace of Blood",
        min: 37,
        max: 40
      },
      {
        name: "Medallion of Thought Projection",
        min: 41,
        max: 44
      },
      {
        name: "Necklace of Strangulation",
        min: 45,
        max: 48
      },
      {
        name: "Net of Snaring",
        min: 49,
        max: 52
      },
      {
        name: "Periapt of Foul Rotting",
        min: 53,
        max: 56
      },
      {
        name: "Potion of Poison",
        min: 57,
        max: 60
      },
      {
        name: "Robe of Powerlessness",
        min: 61,
        max: 64
      },
      {
        name: "Robe of Vermin",
        min: 65,
        max: 68
      },
      {
        name: "Ring of Clumsiness",
        min: 69,
        max: 72
      },
      {
        name: "Scarab of Death",
        min: 73,
        max: 76
      },
      {
        name: "Spear, Cursed Backbiter",
        min: 77,
        max: 80
      },
      {
        name: "Stone of Weight",
        min: 81,
        max: 84
      },
      {
        name: "-2 Cursed Sword",
        min: 85,
        max: 88,
        value: 22000,
        exp: 7300
      },
      {
        name: "Sword, Berserking",
        min: 89,
        max: 92
      },
      {
        name: "Vacuous Grimoire",
        min: 93,
        max: 96
      },
      {
        name: "Zane’s Ire",
        min: 97,
        max: 100
      },
    ]
  },
  {
    percentile: "98-99%",
    name: "Artifact",
    min: 100,
    max: 100,
    options: [
      {
        name: "Book of Infinite Spells",
        min: 1,
        max: 5
      },
      {
        name: "Deck of Many Things",
        min: 6,
        max: 13
      },
      {
        name: "Hammer of Thunderbolts",
        min: 14,
        max: 21
      },
      {
        name: "Moaning Diamond",
        min: 22,
        max: 29
      },
      {
        name: "Orbs of Dragonkind",
        min: 30,
        max: 34
      },
      {
        name: "Philosopher’s Stone",
        min: 35,
        max: 42
      },
      {
        name: "Saint’s Mace",
        min: 43,
        max: 50
      },
      {
        name: "Shadowstaff",
        min: 51,
        max: 58
      },
      {
        name: "Shield of the Sun",
        min: 59,
        max: 66
      },
      {
        name: "Sphere of Annihilation",
        min: 67,
        max: 71
      },
      {
        name: "Staff of the Magi",
        min: 72,
        max: 76
      },
      {
        name: "Talisman of Pure Good",
        min: 77,
        max: 84
      },
      {
        name: "Talisman of the Sphere",
        min: 85,
        max: 92
      },
      {
        name: "Talisman of Ultimate Evil",
        min: 93,
        max: 100
      }
    ]
  }
]