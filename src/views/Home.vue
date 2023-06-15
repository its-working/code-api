<template>
  <section class="container mx-auto pt-32 md:pt-16 p-5 bg-dark-900">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 flex justify-center items-center flex-col text-center">
        <h1 class="text-4xl text-white font-bold mb-6">Empower Your Code with Custom APIs</h1>
        <p class="text-gray-300 mb-8 px-0 md:px-8 text-center">
          Build tailored APIs effortlessly. Transform your code into powerful and versatile solutions. Join the community
          of competitive programmers and developers. Empower your code with CodeAPI.
        </p>
        <a href="#" class="btn text-3xl">Get Started</a>
      </div>
      <div class="md:w-1/2 mt-8 md:mt-0">
        <img class="h-full" :src="require('/src/images/banner.png')" alt="Banner Image">
      </div>
    </div>
  </section>

  <!-- Features and Benefits Section -->
  <section class="features container section mx-auto py-12">
    <div class="container mx-auto px-4 flex items-center flex-col">
      <h2 class="mb-4 text-3xl border-b-2">Features and Benefits</h2>
      <ul class="list-disc list-inside text-xl">
        <li>Powerful API building capabilities</li>
        <li>Support for multiple programming languages</li>
        <li>Easy parameter definition and customization</li>
        <li>Secure authentication and authorization</li>
        <li>Efficient data storage and retrieval</li>
        <li>Extensive collection of publicly shared APIs</li>
        <li>Collaboration and productivity tools for developers</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "homeView",
};
</script>
