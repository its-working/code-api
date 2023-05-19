<template>
  <div class="px-3 flex flex-row w-full ">
    <div id="filterBox" class="hidden md:flex">
      <Filters @isFilterHidden="handleFilterVisibility"  />
    </div>
    <div class="ApiSection text-black m-3 w-full md:w-3/5 lg:w-4/6 px-4  ">
      <!-- Nav for api -->
      <CreateApi @isFilterHidden="handleFilterVisibility" />
      <!-- all apis -->
      <AllApi />
    </div>
  </div>
</template>

<script>
import FilterComponent from "../components/view/apiHub/filters/Filters.vue";
import ApiCreate from "../components/view/apiHub/createApi/CreateApi.vue";
import AllApi from "../components/view/apiHub/apiView/allApi.vue";

export default {
  name: "ApiHubView",
  components: {
    Filters: FilterComponent,
    CreateApi: ApiCreate,
    AllApi,
  },
  data() {
    return {
      filterHidden: false,
    };
  },
  methods: {
    handleFilterVisibility(isVisible) {
      if (isVisible) {
        this.filterHidden = isVisible;
        document.getElementById("filterBox").classList.add("hidden");
      } else {
        document.getElementById("filterBox").classList.remove("hidden");
      }
    },
  },
};
</script>
