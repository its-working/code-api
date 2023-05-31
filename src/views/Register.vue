<template>
  <section class="container mx-auto pt-32">
    <div class="flex justify-center items-center">
      <div
        class="bg-slate-950 border border-slate-800 text-white rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <h2 class="text-3xl font-bold mb-6 magic text-center my-4">Register</h2>

        <Alert
          v-if="errorMessage !== ''"
          :message="errorMessage"
          @hideAlert="errorMessage = ''"
        />

        <form v-on:submit="formSubmit" action="#" method="POST">
          <div class="mb-4 space-y-3">
            <label for="name" class="text-lg font-bold">Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              :name="name"
              class="form-input"
              required
            />
          </div>
          <div class="mb-4 space-y-3">
            <label for="email" class="text-lg font-bold">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              :name="email"
              class="form-input"
              required
            />
          </div>
          <div class="mb-6 space-y-3">
            <label for="password" class="text-lg font-bold">Password</label>
            <input
              type="password"
              id="password"
              v-model.trim="password"
              :name="password"
              class="form-input"
              required
            />
          </div>
          <div class="mb-6 space-y-3">
            <label for="confirm-password" class="text-lg font-bold"
              >Confirm Password</label
            >
            <input
              type="password"
              id="confirm-password"
              v-model.trim="cPassword"
              :name="cPassword"
              class="form-input"
              required
            />
            <p class="form-error" v-if="password != '' && !ValidatePass">
              {{ validateMessage }}
            </p>
          </div>
          <div class="flex justify-center my-5 mt-12">
            <button type="submit" class="btn">Register</button>
          </div>
        </form>
        <p class="text-sm mt-10 text-center">
          Have a account?
          <a
            href="/login"
            class="text-blue-500 underline underline-offset-4 font-semibold"
            >Login</a
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { account } from "/src/appwrite/appwriteConfig.js";
import { v4 as uuidv4 } from "uuid";
import alertView from "/src/components/subComponents/alert.vue";
export default {
  name: "RegisterView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      cPassword: "",
      validateMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async formSubmit(e) {
      e.preventDefault();

      try {
        await account.create(uuidv4(), this.email, this.password, this.name);
        // User registration successful, navigate to Login page
        this.$router.push({ name: "login" });
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
    updateValidateMessage(isSamePass, isInRange) {
      if (!isSamePass) {
        this.validateMessage = "Password does not match";
      } else if (!isInRange) {
        this.validateMessage = "Password must be between 8 and 32 characters";
      } else {
        this.validateMessage = "";
      }
    },
  },
  computed: {
    isSamePass() {
      return this.password === this.cPassword;
    },

    isInRange() {
      return this.password.length >= 8 && this.password.length <= 32;
    },

    ValidatePass() {
      const isSamePass = this.isSamePass;
      const isInRange = this.isInRange;

      this.updateValidateMessage(isSamePass, isInRange); // Update the validateMessage

      return isSamePass && isInRange;
    },
  },
  components: {
    Alert: alertView,
  },
};
</script>
