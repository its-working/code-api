<template>
  <section class="container mx-auto pt-28 p-5">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto py-5">
        <h2 class="text-4xl font-bold text-center mb-8 magic">About CodeAPI</h2>
        <p class="text-xl text-center mb-12">
          CodeAPI is a revolutionary platform designed to empower programmers and
          developers to create and share custom APIs effortlessly. Our mission is to
          provide a seamless experience for turning algorithms and code into powerful,
          versatile solutions that can be integrated into any project.
        </p>

        <div class="flex flex-col space-y-8 ">
          <div class="text-center py-3">
            <h3 class="title">Why Choose CodeAPI?</h3>
            <p class="text-lg">With CodeAPI, you get:</p>
          </div>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li class="flex items-start space-x-4">
              <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M17.707 5.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L7 14.586l9.293-9.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="text-lg">
                Efficiency: Create APIs quickly and effortlessly with our pre-built
                function library and customizable parameters.
              </p>
            </li>
            <li class="flex items-start space-x-4">
              <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M17.707 5.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L7 14.586l9.293-9.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="text-lg">
                Versatility: Build APIs in your preferred programming language with
                support for multiple languages.
              </p>
            </li>
            <li class="flex items-start space-x-4">
              <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M17.707 5.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L7 14.586l9.293-9.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="text-lg">
                Collaboration: Join a thriving community to share, learn, and collaborate
                with like-minded programmers and developers.
              </p>
            </li>
            <li class="flex items-start space-x-4">
              <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M17.707 5.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L7 14.586l9.293-9.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="text-lg">
                Performance: Access the best solutions for your projects with rigorously
                tested and ranked APIs.
              </p>
            </li>
          </ul>

          <div class="text-center py-8">
            <h3 class="title">Our Vision</h3>
            <p class="text-lg">
              At CodeAPI, we envision a world where developers can easily harness the
              power of custom APIs to enhance their projects, streamline workflows, and
              accelerate innovation. We strive to provide a user-friendly platform that
              empowers individuals and fosters a sense of community and collaboration.
            </p>
          </div>

          <div class="text-center py-8 flex justify-between flex-col">
            <h3 class="title">Get Started Today</h3>
            <p class="text-lg">
              Join the CodeAPI community today and start building your own custom APIs.
            </p>
            <a
              href="#cta"
              class="btn w-fit mx-auto mt-6"
              >Sign Up Now</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
};
</script>
