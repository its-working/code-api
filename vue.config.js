const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          APPWRITE_ENDPOINT: JSON.stringify(process.env.APPWRITE_ENDPOINT),
          APPWRITE_PROJECT_ID: JSON.stringify(process.env.APPWRITE_PROJECT_ID),
        },
      }),
    ],
  },
};
