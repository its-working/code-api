<template>
  <div class="mx-3 w-full">
    <h6 class="form-label">Add a Tag:</h6>
    <input type="text" class="form-input" placeholder="eg: Name + Enter" v-model.trim="newTag" @keydown.enter="addTag">
    <Tag :tags="selectedTags" @removedTagId="removeTag"/>
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
      if (this.newTag !== '') {
        const newTagObj = {
          id: tagIdCounter++,
          name: this.newTag
        };
        this.selectedTags.push(newTagObj);
        this.newTag = '';
        this.$emit('apiTags', this.selectedTags)
      }
    },
    removeTag(id){
      this.selectedTags = this.selectedTags.filter(tag => tag.id !== id);
    }
  }
};
</script>
