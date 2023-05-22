<template>
      <div class="container mx-auto p-5">
        <div class="text-center my-6">
          <h3 class="form-heading">API <span class="magic">Wizard's Chamber</span></h3>
        </div>
  
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="form-label" for="grid-password"> Select Programming Language </label>
            <select class="form-input">
                <option >C</option>
                <option>C++</option>
                <option>PHP</option>
                <option>Python</option>
            </select>
          </div>
        </div>
  
        <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="form-label" for="grid-password"> Parameters </label>
          <input
            class="form-input"
            type="number"
            placeholder="Number of parameters in your API "
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="form-label" for="grid-password"> Expected Form Response </label>
            <select class="form-input">
                <option >XML</option>
                <option>JSON</option>
                <option>Integer</option>
                <option>String</option>
            </select>
          </div>
        </div>
        
      <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="form-label" for="grid-password"> Expected Form Response </label>
            <select class="form-input">
                <option >GET</option>
                <option>POST</option>
                <option>PUT</option>
            </select>
          </div>
        </div>
 
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="flex justify-end w-full px-3">
            <button class="form-btn" type="submit">Submit</button>
          </div>
        </div>
        
      </div>
  </template>
  
  <script>
  
  export default {
    name: "configInfoForm",

  };
  </script>
  