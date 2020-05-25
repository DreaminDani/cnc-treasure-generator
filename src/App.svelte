<script>
  import { rolld, treasureTable } from "./tables/index.js";
  import { gemTableIndex, getGem } from "./tables/gems.js";
  import { extItemsIndex, getExtItem } from "./tables/extraordinaryItems.js";
  import { magicItemsIndex, getMagicItem } from "./tables/magicItems.js";

  // export let name;
  let selected = 1;
  let generatedTreasure = "";

  const calculateTreasure = () => {
    // reset generated treasure
    generatedTreasure = "";

    // look at the treasure table for the selected treasure type
    const t = treasureTable[selected - 1];

    const hasGold = Math.random() < t.pctToHaveGold;
    if (hasGold) {
      let numGold = 0;
      for (let i = 0; i < t.numGold.numDice; i++) {
        numGold += rolld(t.numGold.dieNum) * t.numGold.multiplier;
      }
      generatedTreasure +=
        generatedTreasure.length > 0 ? `; ${numGold}gp` : `${numGold}gp`;
    }

    const hasGems = Math.random() < t.pctToHaveGems;
    if (hasGems) {
      const numGems = rolld(t.numGems.dieNum);
      for (let i = 0; i < numGems; i++) {
        let gemType = getGem(rolld(gemTableIndex));
        const generatedGem =
          gemType.options[
            Math.floor(Math.random() * Math.floor(gemType.options.length))
          ];
        const generatedGemValue = gemType.value + t.gemValueAdjustment;

        generatedTreasure +=
          generatedTreasure.length > 0
            ? `; ${generatedGem} (${generatedGemValue}gp)`
            : `${generatedGem} (${generatedGemValue}gp)`;
      }
    }

    const hasExtItems = Math.random() < t.pctToHaveExtItem;
    if (hasExtItems) {
      const numExtItems =
        rolld(t.numExtItems.dieNum) + t.numExtItems.adjustment;
      for (let i = 0; i < numExtItems; i++) {
        let itemType = getExtItem(rolld(extItemsIndex));

        let itemText;
        if (typeof itemType.value === "number") {
          itemText = `${itemType.name} (${itemType.value}gp)`;
        } else {
          itemText = `${itemType.name} (${itemType.value})`;
        }

        generatedTreasure +=
          generatedTreasure.length > 0 ? `; ${itemText}` : itemText;
      }
    }

    const hasMagicItems = Math.random() < t.pctToHaveMagicItems;
    if (hasMagicItems) {
      let numExtItems;
      if (typeof t.numMagicItems === "object") {
        numExtItems = rolld(t.numMagicItems.dieNum);
      } else {
        numExtItems = rolld(t.numMagicItems);
      }

      for (let i = 0; i < numExtItems; i++) {
        let itemType = getMagicItem(rolld(magicItemsIndex));

        console.log(itemType);
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

        generatedTreasure +=
          generatedTreasure.length > 0 ? `; ${itemText}` : itemText;
      }
    }
  };
</script>

<style>
  .window {
    max-width: 640px;
    margin: 0 auto;
  }

  .footnotes-outer {
    max-width: 640px;
    margin: 8px auto;
  }

  .top-row {
    display: flex;
  }

  .treasure-type-select {
    width: 100%;
    max-width: 300px;
  }

  .generate-button {
    margin-left: 32px;
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
      <button aria-label="Close" />
    </div>
  </header>
  <main class="window-body">
    <div class="top-row">
      <div class="field-row treasure-type-select">
        <label for="range21">Choose a treasure type*</label>
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

    {#if selected}
      {#if generatedTreasure.length > 0}
        <p>{generatedTreasure}</p>
        <small>
          † Denotes item type is the Castle Keeper’s Choice. Value varies.
        </small>
      {/if}

      {#if generatedTreasure.length <= 0}
        <p>Sorry bud</p>
      {/if}
    {/if}
  </main>

</div>
<p class="footnotes-outer">
  * To determine a treasure level, see the entry for a creature in "Monsters and
  Treasure" or assume equal to hit die.
</p>
