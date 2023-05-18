<<<<<<< HEAD
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
=======
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/code-api/" : "/",
};
>>>>>>> 42b5d3df305ec2bac0c5af1942fd6a56ae93fb93
