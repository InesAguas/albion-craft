// constants.js

// constants.js

export const cloth = [
  { id: "T4_CLOTH", name: "Cloth 4.0", tier: 4.0 },
  { id: "T5_CLOTH", name: "Cloth 5.0", tier: 5.0 },
  { id: "T6_CLOTH", name: "Cloth 6.0", tier: 6.0 },
  { id: "T7_CLOTH", name: "Cloth 7.0", tier: 7.0 },
  { id: "T8_CLOTH", name: "Cloth 8.0", tier: 8.0 },
  { id: "T4_CLOTH_LEVEL1@1", name: "Cloth 4.1", tier: 4.1 },
  { id: "T5_CLOTH_LEVEL1@1", name: "Cloth 5.1", tier: 5.1 },
  { id: "T6_CLOTH_LEVEL1@1", name: "Cloth 6.1", tier: 6.1 },
  { id: "T7_CLOTH_LEVEL1@1", name: "Cloth 7.1", tier: 7.1 },
  { id: "T8_CLOTH_LEVEL1@1", name: "Cloth 8.1", tier: 8.1 },
  { id: "T4_CLOTH_LEVEL2@2", name: "Cloth 4.2", tier: 4.2 },
  { id: "T5_CLOTH_LEVEL2@2", name: "Cloth 5.2", tier: 5.2 },
  { id: "T6_CLOTH_LEVEL2@2", name: "Cloth 6.2", tier: 6.2 },
  { id: "T7_CLOTH_LEVEL2@2", name: "Cloth 7.2", tier: 7.2 },
  { id: "T8_CLOTH_LEVEL2@2", name: "Cloth 8.2", tier: 8.2 },
  { id: "T4_CLOTH_LEVEL3@3", name: "Cloth 4.3", tier: 4.3 },
  { id: "T5_CLOTH_LEVEL3@3", name: "Cloth 5.3", tier: 5.3 },
  { id: "T6_CLOTH_LEVEL3@3", name: "Cloth 6.3", tier: 6.3 },
  { id: "T7_CLOTH_LEVEL3@3", name: "Cloth 7.3", tier: 7.3 },
  { id: "T8_CLOTH_LEVEL3@3", name: "Cloth 8.3", tier: 8.3 },
  { id: "T4_CLOTH_LEVEL4@4", name: "Cloth 4.4", tier: 4.4 },
  { id: "T5_CLOTH_LEVEL4@4", name: "Cloth 5.4", tier: 5.4 },
  { id: "T6_CLOTH_LEVEL4@4", name: "Cloth 6.4", tier: 6.4 },
  { id: "T7_CLOTH_LEVEL4@4", name: "Cloth 7.4", tier: 7.4 },
  { id: "T8_CLOTH_LEVEL4@4", name: "Cloth 8.4", tier: 8.4 }
];



export const planks = [
    { id: "T4_PLANKS", name: "Planks 4.0", tier: 4 },
    { id: "T5_PLANKS", name: "Planks 5.0", tier: 5 },
    { id: "T6_PLANKS", name: "Planks 6.0", tier: 6 },
    { id: "T7_PLANKS", name: "Planks 7.0", tier: 7 },
    { id: "T8_PLANKS", name: "Planks 8.0", tier: 8 },
    { id: "T4_PLANKS_LEVEL1@1", name: "Planks 4.1", tier: 4.1 },
    { id: "T5_PLANKS_LEVEL1@1", name: "Planks 5.1", tier: 5.1 },
    { id: "T6_PLANKS_LEVEL1@1", name: "Planks 6.1", tier: 6.1 },
    { id: "T7_PLANKS_LEVEL1@1", name: "Planks 7.1", tier: 7.1 },
    { id: "T8_PLANKS_LEVEL1@1", name: "Planks 8.1", tier: 8.1 },
    { id: "T4_PLANKS_LEVEL2@2", name: "Planks 4.2", tier: 4.2 },
    { id: "T5_PLANKS_LEVEL2@2", name: "Planks 5.2", tier: 5.2 },
    { id: "T6_PLANKS_LEVEL2@2", name: "Planks 6.2", tier: 6.2 },
    { id: "T7_PLANKS_LEVEL2@2", name: "Planks 7.2", tier: 7.2 },
    { id: "T8_PLANKS_LEVEL2@2", name: "Planks 8.2", tier: 8.2 },
    { id: "T4_PLANKS_LEVEL3@3", name: "Planks 4.3", tier: 4.3 },
    { id: "T5_PLANKS_LEVEL3@3", name: "Planks 5.3", tier: 5.3 },
    { id: "T6_PLANKS_LEVEL3@3", name: "Planks 6.3", tier: 6.3 },
    { id: "T7_PLANKS_LEVEL3@3", name: "Planks 7.3", tier: 7.3 },
    { id: "T8_PLANKS_LEVEL3@3", name: "Planks 8.3", tier: 8.3 },
    { id: "T4_PLANKS_LEVEL4@4", name: "Planks 4.4", tier: 4.4 },
    { id: "T5_PLANKS_LEVEL4@4", name: "Planks 5.4", tier: 5.4 },
    { id: "T6_PLANKS_LEVEL4@4", name: "Planks 6.4", tier: 6.4 },
    { id: "T7_PLANKS_LEVEL4@4", name: "Planks 7.4", tier: 7.4 },
    { id: "T8_PLANKS_LEVEL4@4", name: "Planks 8.4", tier: 8.4 }
  ];
   
  
  export const locations = ["lymhurst", "thetford", "fort sterling", "caerleon", "martlock", "bridgewatch"];
  
  export const qualities = ["1", "2", "3", "4", "5"];


  export async function getClothLowestPrices() {
    const itemNames = cloth.map(item => item.id).join(',');
    const url = `https://europe.albion-online-data.com/api/v2/stats/prices/${itemNames}.json?locations=${locations.join(',')}&qualities=${qualities.join(',')}`;
    const groupedItems = {};
    const lowestPrices = [];

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const items = await response.json();

      items.forEach(item => {
        if (!groupedItems[item.item_id]) {
          groupedItems[item.item_id] = [];
        }
        groupedItems[item.item_id].push(item);
      });

      for (const itemId in groupedItems) {
        const filteredItems = groupedItems[itemId].filter(item => item.sell_price_min > 0);

        if (filteredItems.length > 0) {
          let lowestSellPriceItem = filteredItems[0];

          filteredItems.forEach(item => {
            if (item.sell_price_min < lowestSellPriceItem.sell_price_min) {
              lowestSellPriceItem = item;
            }
          });

          const clothItem = cloth.find(item => item.id === lowestSellPriceItem.item_id);

          lowestPrices.push({
            item_id: lowestSellPriceItem.item_id,
            tier: clothItem.tier,
            city: lowestSellPriceItem.city,
            sell_price_min: lowestSellPriceItem.sell_price_min
          });
        }
      }
      console.log(lowestPrices);
      return lowestPrices;
    } catch (error) {
      console.error('Error fetching cloth prices:', error);
      throw error;
    }
}



  export async function getPlanksLowestPrices() {
    const itemNames = planksItems.join(',');
    const url = `https://europe.albion-online-data.com/api/v2/stats/prices/${itemNames}.json?locations=${locations.join(',')}&qualities=${qualities.join(',')}`;
    const groupedItems = {};
    const lowestPrices = [];

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const items = await response.json();

      items.forEach(item => {
        if (!groupedItems[item.item_id]) {
          groupedItems[item.item_id] = [];
        }
        groupedItems[item.item_id].push(item);
      });

      for (const itemId in groupedItems) {
        const filteredItems = groupedItems[itemId].filter(item => item.sell_price_min > 0);

        if (filteredItems.length > 0) {
          let lowestSellPriceItem = filteredItems[0];

          filteredItems.forEach(item => {
            if (item.sell_price_min < lowestSellPriceItem.sell_price_min) {
              lowestSellPriceItem = item;
            }
          });

          lowestPrices.push({
            item_id: lowestSellPriceItem.item_id,
            city: lowestSellPriceItem.city,
            sell_price_min: lowestSellPriceItem.sell_price_min
          });
        }
      }
      console.log(lowestPrices);
      return lowestPrices;
    } catch (error) {
      console.error('Error fetching planks prices:', error);
      throw error;
    }
  }
  