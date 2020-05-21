import { rolld } from './index.js'

export const magicItemsIndex = 100;

const getMinMaxItem = (magicTypeTable) => {
  const roll = 15 //rolld(100);
  for (const item of magicTypeTable) {
    if (roll >= item.min && roll <= item.max) {
      return item;
    }
  }
}

export const getMagicItem = roll => {
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
    name: "Armor & Shields",
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
    name: "Miscellaneous Magic",
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
          // 01-04 Chime of Interruption 13,500 1,350
          // 05-08 Chime of Opening 10,500 1,050
          // 09-12 Circlet of Persuasion 11,250 1,125
          // 13-16 Cloak of Arachnida 17,500 1,750
          // 17-20 Cloak of the Bat 13,500 3,000
          // 21-24 Cloak of Charisma 4,000–25,000* 500 per bonus
          // 25-28 Cloak of Displacement 17,000 1,700
          // 29-32 Cloak of Elvenkind 15,500 3,000
          // 33-36 Cloak of Etherealness 11,250 2,500
          // 37-40 Cloak of the Manta Ray 9,000 2,500
          // 41-44 Cloak of Resistance 1,000–25,000* 500 per bonus
          // 45-48 Crystal Ball see text 5,000
          // 49-52 Cube of Force 47,250 4,000
          // 53-56 Cube of Frost Resistance 12,750 1,270
          // 57-60 Cubic Gate 24,750 4,500
          // 61-64 Decanter of Endless Water 13,500 1,350
          // 65-68 Drums of Panic 4,750 475
          // 69-72 Dust of Appearance 8,500 850
          // 73-76 Dust of Disappearance 5,500 550
          // 77-80 Dust of Illusion 5,500 550
          // 81-84 Efficient Quiver 8,500 850
          // 85-88 Efreeti Bottle 47,250 4,700
          // 89-92 Elemental Gem 20,250 2,000
          // 93-96 Eversmoking Bottle 4,250 425
          // 97-00 Eyes of Doom ** 007
        ]
      },
      {
        min: 41,
        max: 60,
        options: [
          // 01-04 Eyes of the Eagle 4,250 425
          // 05-08 Figurines of Wondrous Power See text See text
          // 09-12 Feather Token 4,500 450
          // 13-16 Gauntlets of Ogre Power 9,500 950
          // 17-20 Gem of Brightness 17,750 2,000
          // 21-24 Gem of Seeing 15,250 1,500
          // 25-28 Gloves of Dexterity 1,000–25,000* 500 per
          // bonus
          // 29-32 Gloves of Swimming and
          // Climbing 9,000 900
          // 33-36 Handy Haversack 12,250 1,225
          // 37-40 Harp of Charming 7,750 2,000
          // 41-44 Hat of Disguise 5,500 550
          // 45-48 Helm of Brilliance 34,750 3,000
          // 49-52 Helm of Comprehend
          // Language & Read Magic 4,250 425
          // 53-56 Helm of Telepathy 17,250 3,450
          // 57-60 Helm of Teleportation 20,250 2,250
          // 61-64 Helm of Underwater Action 4,500 1,125
          // 65-68 Horn of Blasting 17,500 1,750
          // 69-72 Horn of Fog 4,250 425
          // 73-76 Horn of Goodness/Evil 4,250 1,050
          // 77-80 Horn of the Merfolk 12,500 2,500
          // 81-84 Horn of Valhalla 32,000 1.250**
          // 85-88 Horseshoes of Speed 7,750 775
          // 89-92 Horseshoes of the Zephyr 9,750 975
          // 93-96 Instant Fortress 22,5000 2,250
          // 97-00 Ioun Stones See text See text
        ]
      },
      {
        min: 61,
        max: 80,
        options: [
          // 01-04 Iron Bands of Binding 17,500 1,750
          // 05-08 Iron Flask – –
          // 09-12 Lyre of Building 13,500 2,000
          // 13-16 Mantle of Spell Resistance 200,000 20,000
          // 17-20 Manual of Bodily Health 10,000–60,000 500 per bonus
          // 21-24 Manual of Gainful Exercise 10,000–60,000 500 per bonus
          // 25-28 Manual of Quickness of Action 10,000–60,000 500 per bonus
          // 29-32 Mattock of the Titans 11,500 1,150
          // 33-36 Maul of the Titans 13,500 1,350
          // 37-40 Medallion of Thoughts 5,500 1,500
          // 41-44 Mirror of Life Trapping 39,000 2,300
          // 45-48 Mirror of Mental Prowess 37,250 3,720
          // 49-52 Mirror of Opposition 25,600 2,560
          // 53-56 Necklace of Adaptation 4,500 450
          // 57-60 Necklace of Fireballs See text See text
          // 61-64 Orb of Storms 49,500 2,500
          // 65-68 Pearl of Power 1,000–81,000* **
          // 69-72 Pearl of the Sirens 13,500 1,350
          // 73-76 Periapt of Health 9,500 950
          // 77-80 Periapt of Proof Against
          // Poison 9,500 950
          // 81-84 Periapt of Wisdom 1,000–25,000* 500 per bonus
          // 85-88 Periapt of Wound Closure 17,000 1,000
          // 89-92 Phylactery of Faithfulness 5,500 1,250
          // 93-96 Phylactery of Undead
          // Turning 16,000 1,600
          // 97-00 Pipes of the Sewers 7,500 750
        ]
      },
      {
        min: 81,
        max: 100,
        options: [
          // 01-04 Portable Hole 29,250 2,950
          // 05-08 Restorative Ointment 5,500 550
          // 09-12 Ring Gates 30,500* 3,050
          // 13-16 Robe of the Arch-magi 75,000 7,500
          // 17-20 Robe of Blending 23,000 2,300
          // 21-24 Robe of Eyes 17,500 1,750
          // 25-28 Robe of Scintillating Colors 13,500 1,350
          // 29-32 Robe of Useful Items 14,000 1,400
          // 33-36 Rope of Climbing 5,750 575
          // 37-40 Rope of Entanglement 7,750 775
          // 41-44 Scabbard of Sharpness 17,500 1,700
          // 45-48 Scarab of Protection 34,000 1,200
          // 49-52 Shrouds of Disintegration 1,650 165
          // 53-56 Slippers of Spider Climbing 9,000 900
          // 57-60 Stone of Alarm 1,400 140
          // 61-64 Stone of Controlling Earth
          // Elementals 10,000–60,000 8,500
          // 65-68 Stone of Good Luck 4,250 425
          // 69-72 Stone Horse 8,500 850
          // 73-76 Strand of Prayer Beads See text See text
          // 77-80 Tome of Clear Thought 1,000–
          // 25,000**
          // 500 per
          // bonus
          // 81-84 Tome of Leadership and
          // Influence
          // 1,000–
          // 25,000**
          // 500 per
          // bonus
          // 85-88 Tome of Understanding 1,000–
          // 25,000**
          // 500 per
          // bonus
          // 89-92 Well of Many Worlds 40,450 2,000
          // 93-96 Wind Fans 5,500 550
          // 97-00 Wings of Flying 15,750 1,575
        ]
      }
    ]
  }
]