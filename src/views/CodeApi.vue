<template>
  <div
    class="container mx-auto pt-24 flex flex-col justify-between px-2 md:px-5 lg:px-10"
  >
    <!-- About API -->
    <div
      class="font-semibold flex flex-col justify-between md:flex-row p-3 m-3 border-2 border-slate-800 rounded-md overflow-x-auto"
    >
      <div class="ApiName p-2 md:p-5 lg:p-10 text-2xl flex flex-row w-1/3">
        <h5 style="white-space: nowrap">Api Name:&nbsp;</h5>
        <label class="magic font-bold" style="white-space: nowrap">{{ apiName }}</label>
      </div>
      <div class="ApiDescription p-2 md:p-5 lg:p-10 w-2/3 flex flex-col">
        <h7>About API:</h7>
        {{ apiDescription }}
      </div>
    </div>
    <div class="wrapper">
      <div class="editor flex justify-center my-4 w-full mx-auto">
        <Codemirror
          v-model:value="codeSyntax"
          :options="cmOptions"
          border
          placeholder="test placeholder"
          :height="300"
          @beforeChange="beforeChange"
        />
      </div>

      <!-- URL IF GET REQUEST -->
      <div
        class="font-bold text-center p-3 m-3 border-2 border-slate-800 rounded-md overflow-x-auto"
      >
        URL: https://api.example.com/mergeSortAPI?arg1=[1,3,2]&arg2=[4,6,5]&arg3=1
      </div>

      <div
        class="RunConsole p-2 w-full bg-slate-950 my-4 rounded mx-auto overflow-x-auto"
        style="min-height: 200px"
      >
        <h6 class="text-center font-bold underline underline-offset-8">Test Cases</h6>
      </div>
    </div>
  </div>
</template>

<script>
import Codemirror from "codemirror-editor-vue3";

// placeholder
import "codemirror/addon/display/placeholder.js";

// language
import "codemirror/mode/javascript/javascript.js";
// placeholder
import "codemirror/addon/display/placeholder.js";
// theme
import "codemirror/theme/dracula.css";
//Syntax json
import dataTypeJson from "/src/data/dataType.json";
import codeSyntaxJson from "/src/data/codeSyntax.json";

export default {
  name: "codeApi",
  components: { Codemirror },
  data() {
    return {
      value: localStorage.getItem("ApiDetails"),
      parametersCount: 0,
      parameterNames: [],
      apiName: "",
      apiDescription: "",
      codeSyntax: "",
      returnType: "",
      apiLanguage: "",
      dataTypeJson: dataTypeJson,
      codeSyntaxJson: codeSyntaxJson,
    };
  },
  created() {
    const data = JSON.parse(this.value);
    if (data) {
      this.parametersCount = data.apiParameters;
      this.parameterNames = data.apiParametersName;
      this.apiParametersType = data.apiParametersType;
      this.returnType = data.apiResponse;
      this.apiLanguage = data.apiLanguage;
      this.apiName = data.apiName;
      this.apiDescription = data.apiDescription;
    }
  },
  methods: {
    storeSyntax(syntax) {
      this.codeSyntax = syntax;
      return syntax;
    },
  },
  computed: {
    codeTemplate() {
      const syntax = codeSyntaxJson[this.apiLanguage];
      if (syntax) {
        let parameters = this.parameterNames.map((name) => `${name}`).join(", ");

        if (this.apiLanguage === "PHP") {
          parameters = this.parameterNames.map((name) => `$${name}`).join(", ");
        } else if (this.apiLanguage === "C" || this.apiLanguage === "C++") {
          parameters = this.parameterNames
            .map((name, i) => `${this.apiParametersType[i]} ${name}`)
            .join(", ");
        }

        const modifiedReturnType = dataTypeJson[this.apiLanguage][this.returnType];

        // Update the codeSyntax data property
        return this.storeSyntax(
          syntax.Syntax.replace("${returnType}", modifiedReturnType).replace(
            "${parameters}",
            parameters
          )
        );
      } else {
        return this.storeSyntax("ERROR");
      }
    },
  },
  setup() {
    return {
      cmOptions: {
        mode: "text/javascript", // Language mode
        theme: "dracula", // Theme
      },
    };
  },
  mounted() {
    this.codeTemplate;
  },
};
</script>
