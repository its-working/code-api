<template>
    <div class="container mx-auto p-5">
      <div class="text-center my-6">
        <h3 class="form-heading">Create Your <span class="magic">API Magic!</span></h3>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="form-label" for="grid-password"> API Name </label>
          <input
            class="form-input"
            type="text"
            placeholder="Give Your API a Unique Spell Name"
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="form-label" for="grid-password"> API Description </label>
          <textarea
            rows="10"
            class="form-textarea"
            placeholder="Describe the Enchanting Purpose and Functionality"
          ></textarea>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <TagInput />
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="flex justify-end w-full px-3">
          <button class="form-btn" type="submit">Next Step</button>
        </div>
      </div>
    </div>
</template>

<script>
import TagInput from "/src/components/subComponents/tags/Tags.vue";

export default {
  name: "BasicInfoForm",
  components: {
    TagInput: TagInput,
  },
};
</script>
