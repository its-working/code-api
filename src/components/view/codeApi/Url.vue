<template>w
  <h4 class="mb-4 text-xl">Test Your API:</h4>
  <div v-for="x in parametersCount" :key="x" class="testCase flex flex-row items-center w-3/4 md:w-2/4 lg:w-2/5 mx-auto">
    <label style="white-space: nowrap">Parameter Value: {{ x }}</label>
    <input @change="sendParm" type="text" v-model="testCase[x - 1]" class="ms-3 form-input" required />
  </div>
  <div class="url bg-slate-800 p-2 overflow-y-auto rounded-lg my-3 max-w-[90%] mx-auto scrollbar-customized"
    style="white-space: nowrap">
    URL: https://{{ domain }}/apiResponse?id={{ unqid }}&name={{ apiName }}&{{ getUrlParm() }}
  </div>
</template>
  
<script>

export default {
  name: "UrlComponent",
  data() {
    return {
      testCase: [],
      apiName: '',
      parameterNames: []
    };
  },
  props: {
    parametersCount: {
      type: Number,
      required: true,
    },
    unqid: String
  },
  methods: {
    getUrlParm() {
      return this.parameterNames.map((name, i) => {
        const value = this.testCase[i] === undefined ? "" : this.testCase[i];
        return `${name}=${value}`;
      })
        .join("&");
    },
    sendParm() {
      this.$emit('apiParms', this.testCase);
    }
  },
  computed: {
    domain() {
      return window.location.hostname;
    },

  },
  created() {
    const data = JSON.parse(localStorage.getItem("ApiDetails"));
    if (data) {
      this.apiName = data.apiName;
      this.parameterNames = data.apiParametersName;
    }
  },
};
</script>
  