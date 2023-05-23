<template>
  <div class="container mx-auto p-5">
    <div class="text-center my-6">
      <h3 class="form-heading">Create Your <span class="magic">API Magic!</span></h3>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="form-label" for="grid-password">API Name</label>
        <input class="form-input" type="text" v-model.trim="apiName" placeholder="Give Your API a Unique Spell Name" />
        <p class="form-error" v-if="!isValidApiName">Please enter a valid API name.</p>
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="form-label" for="grid-password">API Description</label>
        <textarea rows="10" class="form-textarea" v-model.trim="apiDescription" placeholder="Describe the Enchanting Purpose and Functionality"></textarea>
        <p class="form-error" v-if="!isValidApiDescription">Please enter a valid API description.</p>
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <TagInput @apiTags="apiTags = $event" />
      <p class="form-error" v-if="!isValidApiTags">Please enter at least one API tag.</p>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="flex justify-end w-full px-3">
        <button @click="submitForm" class="form-btn">Step 2</button>
      </div>
    </div>
  </div>
</template>

<script>
import TagInput from "/src/components/subComponents/tags/Tags.vue";

export default {
  name: "BasicInfoForm",
  components: {
    TagInput
  },
  data() {
    return {
      apiName: "",
      apiDescription: "",
      apiTags: [],
      isValidApiName: true,
      isValidApiDescription: true,
      isValidApiTags: true,
      isFormValid: true
    };
  },
  methods: {
    validateForm() {
      this.isValidApiName = this.apiName !== "";
      this.isValidApiDescription = this.apiDescription !== "";
      this.isValidApiTags = this.apiTags.length >= 1;
      this.isFormValid = this.isValidApiName && this.isValidApiDescription && this.isValidApiTags;
    },
    submitForm() {
      this.validateForm();
      if (this.isFormValid) {
        this.$emit("update-form", {
          formName: "basicInfo",
          form1Validated: true,
          formData: {
            apiName: this.apiName,
            apiDescription: this.apiDescription,
            apiTags: this.apiTags
          }
        });
      }
    }
  }
};
</script>
