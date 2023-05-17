<template>
  <div class="px-3 flex flex-row w-full">
    <Filters />
    <div class="ApiSection text-black m-3 w-4/5">
      <CreateApi />
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
};
</script>
