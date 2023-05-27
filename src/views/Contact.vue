<template>
  <div class="container mx-auto pt-24">
    <div class="max-w-lg w-full p-8 bg-slate-900 text-white rounded shadow mx-auto">
      <h1 class="text-4xl font-bold mb-10 text-center magic">Contact Us</h1>
      <form>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-medium text-gray-300" for="name"
            >Name</label
          >
          <input
            class="form-input-dark"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-medium text-gray-300" for="email"
            >Email</label
          >
          <input
            class="form-input-dark"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-medium text-gray-300" for="message"
            >Message</label
          >
          <textarea
            class="form-input-dark"
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="flex justify-center">
        <button
          class="form-btn"
          type="submit"
        >
          <span class="relative"> Submit </span>
        </button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactView",
  components: {},
};
</script>
