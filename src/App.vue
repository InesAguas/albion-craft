<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" @click="activeTab='robes'">
            <a class="nav-link">Robes</a>
          </li>
          <li class="nav-item" @click="activeTab='holy_staff'">
            <a class="nav-link">Holy Staff</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container mt-3">
    <RobesTable v-if="activeTab === 'robes'" />
  </div>
</div>
</template>


<script>
import RobesTable from "./components/RobesTable.vue";
import { getClothLowestPrices, getPlanksLowestPrices } from "./constants"

export default {
  name: 'App',
  data() {
    return {
      clothPrices: [],
      planksPrices: [],
      activeTab: "robes",
    }
  },
  components: {
    RobesTable
  },
  methods: {
  },
  mounted() {
    //this.clothPrices = getClothLowestPrices();
    //this.planksPrices = getPlanksLowestPrices();
  }
}
</script>
