<template>
  <div class="sub-wrapper">
    <h5 class="heading">
      Tags
    </h5>
    <div class="tags">
      <div
        v-for="index in 10"
        :key="index"
        class="tag"
      >
        Sorting +
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagsComponent",
};
</script>
