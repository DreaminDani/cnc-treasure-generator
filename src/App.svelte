<script>
  import { Chance } from "chance";
  import { treasureTable } from "./tables/index.js";
  import { gemTableIndex, getGem } from "./tables/gems.js";
  import { extItemsIndex, getExtItem } from "./tables/extraordinaryItems.js";
  import { magicItemsIndex, getMagicItem } from "./tables/magicItems.js";

  const chance = new Chance();

  let selected = 1;
  let generatedTreasure = {};
  let generatedOnce = false;

  const calculateTreasure = () => {
    generatedOnce = true;
    // reset generated treasure
    generatedTreasure = { gold: [], gems: [], extItems: [], magicItems: [] };

    // look at the treasure table for the selected treasure type
    const t = treasureTable[selected - 1];

    const hasGold = chance.bool({ likelihood: t.pctToHaveGold * 100 });
    if (hasGold) {
      let numGold = 0;
      for (let i = 0; i < t.numGold.numDice; i++) {
        numGold +=
          chance.natural({ min: 1, max: t.numGold.dieNum }) *
          t.numGold.multiplier;
      }
      generatedTreasure.gold = `${numGold}gp`;
    }

    const hasGems = chance.bool({ likelihood: t.pctToHaveGems * 100 });
    if (hasGems) {
      const numGems = chance.natural({ min: 1, max: t.numGems.dieNum });
      for (let i = 0; i < numGems; i++) {
        let gemType = getGem(chance.natural({ min: 1, max: gemTableIndex }));
        const generatedGem =
          gemType.options[
            chance.integer({ min: 0, max: gemType.options.length - 1 })
          ];
        let generatedGemValue = gemType.value + t.gemValueAdjustment;
        if (generatedGemValue < 1) {
          generatedGemValue = 1;
        }

        generatedTreasure.gems = [
          ...generatedTreasure.gems,
          `${generatedGem} (${generatedGemValue}gp)`
        ];
      }
    }

    const hasExtItems = chance.bool({ likelihood: t.pctToHaveExtItem * 100 });
    if (hasExtItems) {
      const numExtItems =
        chance.natural({ min: 1, max: t.numExtItems.dieNum }) +
        t.numExtItems.adjustment;
      for (let i = 0; i < numExtItems; i++) {
        let itemType = getExtItem(
          chance.natural({ min: 1, max: extItemsIndex })
        );

        let itemText;
        if (typeof itemType.value === "number") {
          itemText = `${itemType.name} (${itemType.value}gp)`;
        } else {
          itemText = `${itemType.name} (${itemType.value})`;
        }

        generatedTreasure.extItems = [...generatedTreasure.extItems, itemText];
      }
    }

    const hasMagicItems = chance.bool({
      likelihood: t.pctToHaveMagicItems * 100
    });
    if (hasMagicItems) {
      let numExtItems;
      if (typeof t.numMagicItems === "object") {
        numExtItems = chance.natural({ min: 1, max: t.numMagicItems.dieNum });
      } else {
        numExtItems = chance.natural({ min: 1, max: t.numMagicItems });
      }

      for (let i = 0; i < numExtItems; i++) {
        let itemType = getMagicItem(
          chance.natural({ min: 1, max: magicItemsIndex })
        );

        let itemXP;
        if (t.maxXPValueForMagicItem) {
          itemXP =
            itemType.exp < t.maxXPValueForMagicItem
              ? itemType.exp
              : t.maxXPValueForMagicItem;
        } else {
          itemXP = itemType.exp;
        }
        const itemXPtext = typeof itemXP === "string" ? itemXP : `${itemXP}xp`;

        let itemText = `${itemType.name} (`;
        if (itemType.type) {
          itemText += `${itemType.type}, `;
        }

        if (itemType.value && itemType.exp) {
          itemText += `${itemType.value}gp, ${itemXPtext})`;
        } else {
          itemText += ")";
        }

        generatedTreasure.magicItems = [
          ...generatedTreasure.magicItems,
          itemText
        ];
      }
    }
  };
</script>

<style>
  .window {
    max-width: 640px;
    margin: 0 auto;
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    padding-right: 0.5rem;
  }
  .treasure-type-select {
    width: 100%;
    max-width: 360px;
  }
  .treasure-type-select label {
    min-width: max-content;
  }
  .generate-button {
    padding: 8px 16px;
    margin-left: 32px;
  }

  .generated-treasure ul {
    margin-top: 0;
    padding-left: 0.7rem;
  }
  .generated-treasure h2 {
    font-size: 1em;
    margin-bottom: 0;
  }
  .t-gold:before {
    content: "";
    background: url("/img/gold.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 8px;
    height: 8px;
    display: inline-block;
    margin-right: 3px;
  }
  .t-gems:before {
    content: "";
    background: url("/img/gem.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 8px;
    height: 8px;
    display: inline-block;
    margin-right: 3px;
  }
  .t-extItems:before {
    content: "";
    background: url("/img/ext_item.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-left: -1px;
  }
  .t-magicItems:before {
    content: "";
    background: url("/img/magic_item.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-left: -2px;
    margin-right: 1px;
  }

  .footnotes-outer {
    max-width: 640px;
    margin: 8px auto;
  }
  .footnotes-inner {
    margin-top: 12px;
  }
  .footnotes-inner small {
    display: block;
  }

  @media (max-width: 640px) {
    .top-row {
      flex-direction: column;
    }

    .treasure-type-select {
      max-width: unset;
    }

    .generate-button {
      margin-left: 0;
      margin-top: 12px;
      width: 100%;
    }
  }
</style>

<div class="window">
  <header class="title-bar">
    <div class="title-bar-text">Castles & Crusades Treasure Generator</div>
    <div class="title-bar-controls">
      <button
        aria-label="Help"
        onclick="window.open('https://github.com/d3sandoval/cnc-treasure-generator','_blank');" />
      <button aria-label="Close" />
    </div>
  </header>
  <main class="window-body">
    <div class="top-row">
      <div class="field-row treasure-type-select">
        <label for="range21">Treasure Level*:</label>
        <label for="range22">1</label>
        <input
          bind:value={selected}
          id="range22"
          type="range"
          min="1"
          max="18" />
        <label for="range23">18</label>
      </div>
      <button class="generate-button" on:click={calculateTreasure}>
        Generate Treasure Level {selected}
      </button>
    </div>

    {#if generatedOnce}
      <div class="generated-treasure">
        {#if generatedTreasure.gold.length === 0 && generatedTreasure.gems.length === 0 && generatedTreasure.extItems.length === 0 && generatedTreasure.magicItems.length === 0}
          <p>The dice have spoken. No treasure was generated.</p>
        {:else}
          {#if generatedTreasure.gold.length > 0}
            <h2 class="t-gold">Gold</h2>
            {generatedTreasure.gold}
          {/if}
          {#if generatedTreasure.gems.length > 0}
            <h2 class="t-gems">Gems</h2>
            <ul>
              {#each generatedTreasure.gems as gem}
                <li>{gem}</li>
              {/each}
            </ul>
          {/if}
          {#if generatedTreasure.extItems.length > 0}
            <h2 class="t-extItems">Extraordinary Items</h2>
            <ul>
              {#each generatedTreasure.extItems as extItem}
                <li>{extItem}</li>
              {/each}
            </ul>
          {/if}
          {#if generatedTreasure.magicItems.length > 0}
            <h2 class="t-magicItems">Magic Items</h2>
            <ul>
              {#each generatedTreasure.magicItems as magicItem}
                <li>{magicItem}</li>
              {/each}
            </ul>
          {/if}
          <div class="footnotes-inner">
            <small>
              † Denotes that an item's
              <em>type</em>
              is the Castle Keeper’s choice. Value varies.
            </small>
            <small>
              The value or experience for items
              <em>with ranges</em>
              can be found in "Monsters & Treasures"
            </small>
          </div>
        {/if}
      </div>
    {/if}
  </main>

</div>
<p class="footnotes-outer">
  * To determine a treasure level, see the entry for a creature in "Monsters and
  Treasure"
</p>
