<template>
  <section class="container mx-auto pt-28 p-5">
  </section>
</template>
  
<script>
import { databases } from "/src/appwrite/appwriteConfig.js";
import axios from "axios";
import codeJson from "/src/data/code.json";

export default {
  name: "SendApiResponse",
  data() {
    return {
      codeSyntax: "",
      parmName: [],
      codeJson: codeJson,
      apiLanguage: '',
    }
  },
  methods: {
    async getApiInfo() {
      const id = this.$route.query.id;
      try {
        const document = await databases.getDocument(
          process.env.VUE_APP_APPWRITE_DATABASE_ID,
          process.env.VUE_APP_APICODE_COLLECTION_ID,
          id
        );

        this.codeSyntax = document.code;
        this.parmName = document.apiParametersName;
        this.apiLanguage = document.language;

        this.executeCode();
      } catch (error) {
        this.sendJsonResponseError();
      }
    },
    setCode() {
      let code = this.codeSyntax;
      let replacedParameters = this.parmName.map(item => isNaN(item) ? this.$route.query[item] : "'" + this.$route.query[item] + "'").join(', ');

      this.code = this.codeJson[this.apiLanguage].Syntax.replace(/\$\{function\}/g, code).replace(/\$\{Parameters\}/g, replacedParameters);
    },
    executeCode() {
      // Make an HTTP POST request to the PHP backend endpoint
      this.setCode();
      const formData = new FormData();
      formData.append("code", this.code);
      formData.append("language", this.apiLanguage);

      axios
        .post("https://codeApiBackend.aslamtourandtravel.xyz/execute.php", formData)
        .then((response) => {
          // Handle the response and update the output variable
          this.sendJsonResponse(response.data);
        })
        .catch((error) => {
          console.log(error);
          this.sendJsonResponseError();
        });
    },
    sendJsonResponse(response) {
      this.$el.innerHTML = response;
      this.$el.setAttribute("Content-Type", "application/json");
    },
    sendJsonResponseError() {
      this.$el.innerHTML = "Error occurred while fetching data.";
      this.$el.setAttribute("Content-Type", "application/json");
      this.$el.setAttribute("status", "500");
    },
  },
  mounted() {
    this.getApiInfo();
  },
};
</script>
  