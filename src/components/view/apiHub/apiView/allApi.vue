<template>
  <div v-if="isApiInfoVisible"
    class="modal top-0 left-0 bg-slate-800 z-30 bg-opacity-40 position fixed h-[calc(100vh-70px)] mt-[70px] w-screen max-w-screen  flex justify-center">
    <div
      class="apiInfo bg-slate-950 min-w-[400px] text-slate-200 max-w-[100vw-20px] p-3 my-3 max-h-full overflow-y-auto customized-scrollbar rounded-md text-center space-y-3">

      <div @click="ToggleApiInfo(false)" class="exit absolute text-4xl cursor-pointer">
        <ion-icon name="close-outline"></ion-icon>
      </div>

      <div class="item">
        <h5 class="font-bold border-b-2 w-fit mx-auto my-2">API Name</h5>
        <p class="text-sm magic font-bold">{{ data.apiName }}</p>
      </div>

      <div class="item">
        <h5 class="font-bold border-b-2 w-fit mx-auto my-2">About API</h5>
        <p class="text-sm">{{ data.Description }}</p>
      </div>

      <div class="item">
        <h5 class="font-bold border-b-2 w-fit mx-auto my-2">Language</h5>
        <p class="text-sm">{{ data.language }}</p>
      </div>

      <div class="item">
        <h5 class="font-bold border-b-2 w-fit mx-auto my-2">Parameters:</h5>
        <p class="text-sm">{{ data.apiParametersName }}</p>
      </div>

      <div class="item">
        <h5 class="font-bold border-b-2 w-fit mx-auto my-2">API URL:</h5>
        <div class="url bg-slate-800 p-2 overflow-y-auto rounded-lg my-3 max-w-[90%] mx-auto scrollbar-customized"
          style="white-space: nowrap">
          {{ URL }}
        </div>
        <button @click="copyToClipboard" class="btn">Copy URL</button>
      </div>
    </div>
  </div>
  <div class="cards mt-2 mx-auto flex items-center">
    <ApiView v-for="(api, index) in Array.from(apiData)" :key="index" :isApiInfoVisible="isApiInfoVisible" :data="api"
      @ToggleApiInfo="ToggleApiInfo" />
  </div>
</template>
  
<script>
import ApiView from './apiView.vue'
import { databases } from "/src/appwrite/appwriteConfig.js";

export default {
  name: "AllApi",
  data() {
    return {
      apiData: [],
      isApiInfoVisible: false,
      data: [],
      apiUserName: '',
      URL: ''
    };
  },
  components: {
    ApiView,
  },
  methods: {
    copyToClipboard() {
      const textarea = document.createElement('textarea');
      textarea.value = this.URL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    },
    domain() {
      return window.location.hostname;
    },
    getUrlParm() {
      return this.data.apiParametersName.map((name) => {
        return name + "=";
      })
        .join("&");
    },

    async getAllData() {
      try {
        // Fetch documents where user_id matches the current user ID
        const response = await databases.listDocuments(
          process.env.VUE_APP_APPWRITE_DATABASE_ID,
          process.env.VUE_APP_APICODE_COLLECTION_ID
        );
        this.apiData = response.documents;
      } catch (error) {
        console.log(error);
      }
    },
    ToggleApiInfo(event, currData) {
      this.isApiInfoVisible = event;
      this.data = currData;
      if (currData && currData != '') {
        this.URL = "https://" + this.domain() + "/apiResponse?id=" + this.data.$id + "&" + this.getUrlParm()
      }
    }
  },
  mounted() {
    this.getAllData();
  },
};
</script>
  