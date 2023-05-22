<template>
        <div class="sub-wrapper">
          <div class="tags mx-auto">
            <div v-for="tag in tags" :key="tag.id" class="tag flex-center flex-row">
                <label>{{tag.name}}</label> 
                <button @click="removeTag(tag.id)" class="ms-1 text-xl rounded-full h-6 w-6 hover:bg-[#0000002a] flex-center"><p class="-mt-1 font-bold text-red-500">x</p></button>
                </div>
          </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "ShowTag",
    props:{
        tags: String
    },
    methods:{
      removeTag(id){
        this.$emit('removedTagId', id);
      }
    }
  };
  </script>
  