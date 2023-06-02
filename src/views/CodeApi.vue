<template>
  <div class="container mx-auto pt-24 flex flex-col md:flex-row justify-between">
    <div class="editor flex justify-center my-4 w-full">
      <Codemirror
        v-model:value="codeTemplate"
        :options="cmOptions"
        border
        placeholder="test placeholder"
        :height="300"
        @beforeChange="beforeChange"
      />
    </div>
    <div
      class="RunConsole p-2 w-full bg-slate-950 md:ms-4 my-4 rounded"
      style="min-height: 200px"
    >
      <h6 class="text-center font-bold underline underline-offset-8">Test Cases</h6>
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
      this.returnType = data.apiResponse;
      this.apiLanguage = data.apiLanguage;
    }
  },

  computed: {
    codeTemplate() {
      const syntax = codeSyntaxJson[this.apiLanguage];
      if (syntax) {
        const parameters = this.parameterNames.map((name) => `${name}`).join(", ");
        const modifiedReturnType = dataTypeJson[this.apiLanguage][this.returnType];

        return syntax.Syntax.replace("${returnType}", modifiedReturnType).replace(
          "${parameters}",
          parameters
        );
      } else {
        return "ERROR"; // Default error message for unsupported languages
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
};
</script>
