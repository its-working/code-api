<template>
  <div
    :class="{ hidden: !formVisibility, '': formVisibility }"
    class="h-screen w-screen fixed top-0 left-0 bg-[#3535353a] z-50"
  >
    <div class="dark-form-popUp overflow-auto scrollbar-customized max-h-[80vh]">
      <!-- exit btn starts-->
      <div
        @click="hideForm"
        class="exit text-white fixed right-10 top-5 text-4xl font-bold cursor-pointer"
      >
        x
      </div>

      <BasicInfo />
      <ConfigInfo />
    </div>
  </div>
</template>

<script>
import basicInfoForm from "./forms/BasicInfo.vue";
import configInfoForm from "./forms/ApiConfigInfo.vue";
export default {
  name: "APIForm",
  components: {
    BasicInfo: basicInfoForm,
    ConfigInfo: configInfoForm,
  },
  props: {
    formVisibility: Boolean,
  },
  methods: {
    hideForm() {
      this.$emit("formVisibility", false);
    },
  },
};
</script>
