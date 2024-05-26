<template>
  <div>
<select v-if="clericRobes" class="form-select" aria-label="Default select example" v-model="selectedTier">
  <option v-for="robe in clericRobes" :value="robe.tier">{{robe.tier}}</option>
</select>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Tier</th>
      <th scope="col">City</th>
      <th scope="col">Price</th>
      <th scope="col">Cloth City</th>
      <th scope="col">Cloth Cost</th>
      <th scope="col">MIN PROFIT</th>
      <th scope="col">MIN PROFIT %%%</th>
    </tr>
  </thead>
  <tbody>
    <tr v-if="clericRobe && clothPrices && cloth">
          <th>Cleric Robe</th>
          <th>{{ clericRobe.tier }}</th>
          <th>{{ clericRobe.min_city }}</th>
          <th>{{ clericRobe.sell_price_min }}</th>
          <th>{{ clericRobe.max_city }}</th>
          <th>{{ clericRobe.sell_price_max }}</th>
          <th>{{ cloth.sell_price_min * 16 }}</th>
          <th>{{ cloth.city }}</th>
          <th>{{ (clericRobe.sell_price_min - (cloth.sell_price_min * 16)) }}</th>
          <th>{{ Math.round((clericRobe.sell_price_min - (cloth.sell_price_min * 16))/(cloth.sell_price_min * 16) * 100) }}</th>
        </tr>
        <tr v-if="mageRobe && clothPrices && cloth">
          <th>Mage Robe</th>
          <th>{{ mageRobe.tier }}</th>
          <th>{{ mageRobe.min_city }}</th>
          <th>{{ mageRobe.sell_price_min }}</th>
          <th>{{ mageRobe.max_city }}</th>
          <th>{{ mageRobe.sell_price_max }}</th>
          <th>{{ cloth.sell_price_min * 16 }}</th>
          <th>{{ cloth.city }}</th>
          <th>{{ (mageRobe.sell_price_min - (cloth.sell_price_min * 16)) }}</th>
          <th>{{ Math.round((mageRobe.sell_price_min - (cloth.sell_price_min * 16))/(cloth.sell_price_min * 16) * 100) }}</th>
        </tr>
        <tr v-if="scholarRobe && clothPrices && cloth">
          <th>Scholar Robe</th>
          <th>{{ scholarRobe.tier }}</th>
          <th>{{ scholarRobe.min_city }}</th>
          <th>{{ scholarRobe.sell_price_min }}</th>
          <th>{{ scholarRobe.max_city }}</th>
          <th>{{ scholarRobe.sell_price_max }}</th>
          <th>{{ cloth.sell_price_min * 16 }}</th>
          <th>{{ cloth.city }}</th>
          <th>{{ (scholarRobe.sell_price_min - (cloth.sell_price_min * 16)) }}</th>
          <th>{{ Math.round((scholarRobe.sell_price_min - (cloth.sell_price_min * 16))/(cloth.sell_price_min * 16) * 100) }}</th>
        </tr>
        <tr v-if="cultistRobe && clothPrices && cloth">
          <th>Cultist Robe</th>
          <th>{{ cultistRobe.tier }}</th>
          <th>{{ cultistRobe.min_city }}</th>
          <th>{{ cultistRobe.sell_price_min }}</th>
          <th>{{ cultistRobe.max_city }}</th>
          <th>{{ cultistRobe.sell_price_max }}</th>
          <th>{{ cloth.sell_price_min * 16 }}</th>
          <th>{{ cloth.city }}</th>
          <th>{{ (cultistRobe.sell_price_min - (cloth.sell_price_min * 16)) }}</th>
          <th>{{ Math.round((cultistRobe.sell_price_min - (cloth.sell_price_min * 16))/(cloth.sell_price_min * 16) * 100) }}</th>
        </tr>
        <tr v-if="druidRobe && clothPrices && cloth">
          <th>Druid Robe</th>
          <th>{{ druidRobe.tier }}</th>
          <th>{{ druidRobe.min_city }}</th>
          <th>{{ druidRobe.sell_price_min }}</th>
          <th>{{ druidRobe.max_city }}</th>
          <th>{{ druidRobe.sell_price_max }}</th>
          <th>{{ cloth.sell_price_min * 16 }}</th>
          <th>{{ cloth.city }}</th>
          <th>{{ (druidRobe.sell_price_min - (cloth.sell_price_min * 16)) }}</th>
          <th>{{ Math.round((druidRobe.sell_price_min - (cloth.sell_price_min * 16))/(cloth.sell_price_min * 16) * 100) }}</th>
        </tr>
        <tr v-if="feyscaleRobe && clothPrices && cloth">
          <th>Feyscale Robe</th>
          <th>{{ feyscaleRobe.tier }}</th>
          <th>{{ feyscaleRobe.min_city }}</th>
          <th>{{ feyscaleRobe.sell_price_min }}</th>
          <th>{{ feyscaleRobe.max_city }}</th>
          <th>{{ feyscaleRobe.sell_price_max }}</th>
          <th>{{ cloth.sell_price_min * 16 }}</th>
          <th>{{ cloth.city }}</th>
          <th>{{ (feyscaleRobe.sell_price_min - (cloth.sell_price_min * 16)) }}</th>
          <th>{{ Math.round((feyscaleRobe.sell_price_min - (cloth.sell_price_min * 16))/(cloth.sell_price_min * 16) * 100) }}</th>
        </tr>
        <tr v-if="fiendRobe && clothPrices && cloth">
          <th>Fiend Robe</th>
          <th>{{ fiendRobe.tier }}</th>
          <th>{{ fiendRobe.min_city }}</th>
          <th>{{ fiendRobe.sell_price_min }}</th>
          <th>{{ fiendRobe.max_city }}</th>
          <th>{{ fiendRobe.sell_price_max }}</th>
          <th>{{ cloth.sell_price_min * 16 }}</th>
          <th>{{ cloth.city }}</th>
          <th>{{ (fiendRobe.sell_price_min - (cloth.sell_price_min * 16)) }}</th>
          <th>{{ Math.round((fiendRobe.sell_price_min - (cloth.sell_price_min * 16))/(cloth.sell_price_min * 16) * 100) }}</th>
        </tr>
        <tr v-if="robeOfPurity && clothPrices && cloth">
          <th>Robe Of Purity</th>
          <th>{{ robeOfPurity.tier }}</th>
          <th>{{ robeOfPurity.min_city }}</th>
          <th>{{ robeOfPurity.sell_price_min }}</th>
          <th>{{ robeOfPurity.max_city }}</th>
          <th>{{ robeOfPurity.sell_price_max }}</th>
          <th>{{ cloth.sell_price_min * 16 }}</th>
          <th>{{ cloth.city }}</th>
          <th>{{ (robeOfPurity.sell_price_min - (cloth.sell_price_min * 16)) }}</th>
          <th>{{ Math.round((robeOfPurity.sell_price_min - (cloth.sell_price_min * 16))/(cloth.sell_price_min * 16) * 100) }}</th>
        </tr>
        <tr v-if="royalRobe && clothPrices && cloth">
          <th>Royal Robe</th>
          <th>{{ royalRobe.tier }}</th>
          <th>{{ royalRobe.min_city }}</th>
          <th>{{ royalRobe.sell_price_min }}</th>
          <th>{{ royalRobe.max_city }}</th>
          <th>{{ royalRobe.sell_price_max }}</th>
          <th>{{ cloth.sell_price_min * 16 }}</th>
          <th>{{ cloth.city }}</th>
          <th>{{ (royalRobe.sell_price_min - (cloth.sell_price_min * 16)) }}</th>
          <th>{{ Math.round((royalRobe.sell_price_min - (cloth.sell_price_min * 16))/(cloth.sell_price_min * 16) * 100) }}</th>
        </tr>
  </tbody>
</table>
</div>
</template>

 <script>

 import { cloth } from '@/constants';
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

        cloth: null,
      }
    },

    props: ["clothPrices"],

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
        this.cloth = this.clothPrices.find(cloth => cloth.tier === tier);
      },
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
      this.cultistRobes = await getCultistRobePrices();
      this.druidRobes = await getDruidRobePrices();
      this.feyscaleRobes = await getFeyscaleRobePrices();
      this.fiendRobes = await getFiendRobePrices();
      this.robesOfPurity = await getRobeOfPurityPrices();
      this.royalRobes = await getRoyalRobePrices();
      this.selectRobeByTier(this.selectedTier)
    }
  }
  </script>
  