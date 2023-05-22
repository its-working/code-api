<template>
  <div class="mx-3 w-full">
    <h6 class="form-label">Add a Tag:</h6>
    <input type="text" class="form-input" placeholder="eg: Sorting + Enter" v-model="newTag" @keydown.enter="addTag">
    <Tag :tags="selectedTags" />
  </div>
</template>

<script>
import ShowTag from './Tag.vue';

let tagIdCounter = 1;

export default {
  name: "TagInput",
  components: {
    'Tag': ShowTag
  },
  data() {
    return {
      selectedTags: [],
      newTag: ''
    };
  },
  methods: {
    addTag() {
      if (this.newTag.trim() !== '') {
        const newTagObj = {
          id: tagIdCounter++,
          name: this.newTag.trim()
        };
        this.selectedTags.push(newTagObj);
        this.newTag = '';
      }
    }
  }
};
</script>
