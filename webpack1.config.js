const path = require('path');

module.exports = {
  entry: './main1.js',
  output: {
    filename: 'bundle1.js',
    path: __dirname
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      
    ]
  },
  plugins: [
  ],
  mode: "development"
  
};