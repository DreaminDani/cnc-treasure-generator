<script>
  import { rolld, treasureTable } from "./tables/index.js";
  import { gemTableIndex, getGem } from "./tables/gems.js";
  import { extItemsIndex, getExtItem } from "./tables/extraordinaryItems.js";
  import { magicItemsIndex, getMagicItem } from "./tables/magicItems.js";

  // export let name;
  let selected;
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
        const itemXP =
          itemType.exp < t.maxXPValueForMagicItem
            ? itemType.exp
            : t.maxXPValueForMagicItem;
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
  main {
    text-align: left;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <label for="treasure-type-select">Choose a treasure type*:</label>
  <select
    bind:value={selected}
    on:change={calculateTreasure}
    name="Treasure Type"
    id="treasure-type-select">
    <option value="">--Please choose an option--</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
  </select>

  <p>* See "Monsters and Treasure" or assume equal to hit die.</p>
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
