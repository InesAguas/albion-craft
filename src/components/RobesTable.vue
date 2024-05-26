<template>
  <div>
<select class="form-select" aria-label="Default select example" v-model="selectedTier">
  <option v-for="robe in clericRobes" :value="robe.tier">{{robe.tier}}</option>
</select>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Tier</th>
      <th scope="col">Min City</th>
      <th scope="col">Min Price</th>
      <th scope="col">Max City</th>
      <th scope="col">Max Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-if="clericRobe">
          <th>Cleric Robe</th>
          <th>{{ clericRobe.tier }}</th>
          <th>{{ clericRobe.min_city }}</th>
          <th>{{ clericRobe.sell_price_min }}</th>
          <th>{{ clericRobe.max_city }}</th>
          <th>{{ clericRobe.sell_price_max }}</th>
        </tr>
        <tr v-if="mageRobe">
          <th>Mage Robe</th>
          <th>{{ mageRobe.tier }}</th>
          <th>{{ mageRobe.min_city }}</th>
          <th>{{ mageRobe.sell_price_min }}</th>
          <th>{{ mageRobe.max_city }}</th>
          <th>{{ mageRobe.sell_price_max }}</th>
        </tr>
        <tr v-if="scholarRobe">
          <th>Scholar Robe</th>
          <th>{{ scholarRobe.tier }}</th>
          <th>{{ scholarRobe.min_city }}</th>
          <th>{{ scholarRobe.sell_price_min }}</th>
          <th>{{ scholarRobe.max_city }}</th>
          <th>{{ scholarRobe.sell_price_max }}</th>
        </tr>
        <tr v-if="cultistRobe">
          <th>Cultist Robe</th>
          <th>{{ cultistRobe.tier }}</th>
          <th>{{ cultistRobe.min_city }}</th>
          <th>{{ cultistRobe.sell_price_min }}</th>
          <th>{{ cultistRobe.max_city }}</th>
          <th>{{ cultistRobe.sell_price_max }}</th>
        </tr>
        <tr v-if="druidRobe">
          <th>Druid Robe</th>
          <th>{{ druidRobe.tier }}</th>
          <th>{{ druidRobe.min_city }}</th>
          <th>{{ druidRobe.sell_price_min }}</th>
          <th>{{ druidRobe.max_city }}</th>
          <th>{{ druidRobe.sell_price_max }}</th>
        </tr>
        <tr v-if="feyscaleRobe">
          <th>Feyscale Robe</th>
          <th>{{ feyscaleRobe.tier }}</th>
          <th>{{ feyscaleRobe.min_city }}</th>
          <th>{{ feyscaleRobe.sell_price_min }}</th>
          <th>{{ feyscaleRobe.max_city }}</th>
          <th>{{ feyscaleRobe.sell_price_max }}</th>
        </tr>
        <tr v-if="fiendRobe">
          <th>Fiend Robe</th>
          <th>{{ fiendRobe.tier }}</th>
          <th>{{ fiendRobe.min_city }}</th>
          <th>{{ fiendRobe.sell_price_min }}</th>
          <th>{{ fiendRobe.max_city }}</th>
          <th>{{ fiendRobe.sell_price_max }}</th>
        </tr>
        <tr v-if="robeOfPurity">
          <th>Robe Of Purity</th>
          <th>{{ robeOfPurity.tier }}</th>
          <th>{{ robeOfPurity.min_city }}</th>
          <th>{{ robeOfPurity.sell_price_min }}</th>
          <th>{{ robeOfPurity.max_city }}</th>
          <th>{{ robeOfPurity.sell_price_max }}</th>
        </tr>
        <tr v-if="royalRobe">
          <th>Royal Robe</th>
          <th>{{ royalRobe.tier }}</th>
          <th>{{ royalRobe.min_city }}</th>
          <th>{{ royalRobe.sell_price_min }}</th>
          <th>{{ royalRobe.max_city }}</th>
          <th>{{ royalRobe.sell_price_max }}</th>
        </tr>
  </tbody>
</table>
</div>
</template>

 <script>

 import { getClericRobePrices, getMageRobePrices, getScholarRobePrices, getCultistRobePrices, getDruidRobePrices, getFeyscaleRobePrices, getFiendRobePrices, getRobeOfPurityPrices, getRoyalRobePrices } from '@/robes';

  export default {
    name: 'RobesTable',
    data() {
      return {
        clericRobes: [],
        mageRobes: [],
        scholarRobes: [],
        cultistRobes: [],
        druidRobes: [],
        feyscaleRobes: [],
        fiendRobes: [],
        robesOfPurity: [],
        royalRobes: [],

        selectedTier: 4,
        clericRobe: null,
        mageRobe: null,
        scholarRobe: null,
        cultistRobe: null,
        druidRobe: null,
        feyscaleRobe: null,
        fiendRobe: null,
        robeOfPurity: null,
        royalRobe: null,
      }
    },
    
    components: {
    },
    methods: {
      selectRobeByTier(tier) {
        this.clericRobe = this.clericRobes.find(robe => robe.tier === tier);
        this.mageRobe = this.mageRobes.find(robe => robe.tier === tier);
        this.scholarRobe = this.scholarRobes.find(robe => robe.tier === tier);
        this.cultistRobe = this.cultistRobes.find(robe => robe.tier === tier);
        this.druidRobe = this.druidRobes.find(robe => robe.tier === tier);
        this.feyscaleRobe = this.feyscaleRobes.find(robe => robe.tier === tier);
        this.fiendRobe = this.fiendRobes.find(robe => robe.tier === tier);
        this.robeOfPurity = this.robesOfPurity.find(robe => robe.tier === tier);
        this.royalRobe = this.royalRobes.find(robe => robe.tier === tier);
      }
    },
    watch: {
    selectedTier(newValue) {
      this.selectRobeByTier(newValue);
    }
    },
    async mounted() {
      this.clericRobes = await getClericRobePrices();
      this.mageRobes = await getMageRobePrices();
      this.scholarRobes = await getScholarRobePrices();
      this.clericRobes = await getCultistRobePrices();
      this.druidRobes = await getDruidRobePrices();
      this.feyscaleRobes = await getFeyscaleRobePrices();
      this.fiendRobes = await getFiendRobePrices();
      this.robesOfPurity = await getRobeOfPurityPrices();
      this.royalRobes = await getRoyalRobePrices();
      this.selectRobeByTier(this.selectedTier)
    }
  }
  </script>
  