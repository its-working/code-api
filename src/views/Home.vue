<template>
 <section class="container mx-auto pt-32 md:pt-16 p-5 bg-dark-900">
  <div class="flex flex-col md:flex-row">
    <div class="md:w-1/2 flex justify-center items-center flex-col text-center">
      <h1 class="text-4xl text-white font-bold mb-6">Empower Your Code with Custom APIs</h1>
      <p class="text-gray-300 mb-8 px-0 md:px-8 text-center">
        Build tailored APIs effortlessly. Transform your code into powerful and versatile solutions. Join the community of competitive programmers and developers. Empower your code with CodeAPI.
      </p>
      <a href="#" class="btn text-3xl">Get Started</a>
    </div>
    <div class="md:w-1/2 mt-8 md:mt-0">
      <img class="h-full" :src="require('/src/images/banner.png')" alt="Banner Image">
    </div>
  </div>
</section>

<section class="features section">
    <h2 class="text-2xl">Features and Benefits</h2>
    <!-- Add your feature list here -->
  </section>

  <section class="testimonials section">
    <h2 class="text-2xl">What Our Users Say</h2>
    <!-- Add testimonials or customer reviews here -->
  </section>

  <section class="api-examples section">
    <h2 class="text-2xl">API Examples</h2>
    <!-- Add your API examples or use cases here -->
  </section>

  <section class="community section">
    <h2 class="text-2xl">Join the CodeAPI Community</h2>
    <!-- Add information about the community features, collaboration, and sharing options here -->
  </section>

</template>

<script>
export default {
  name: "homeView",
};
</script>
