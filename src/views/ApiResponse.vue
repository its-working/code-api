<template>
    <section class="container mx-auto pt-28 p-5">
      {{ output }}
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
        output: ''
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
          this.output = error;
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
            this.output = response.data.replace(/<br\s*\/?>/gi, '\n');
          })
          .catch((error) => {
            this.output = error;
          });
    },

    },
    mounted() {
      this.getApiInfo();
    },
  };
  </script>
  