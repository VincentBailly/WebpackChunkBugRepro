const path = require('path');

module.exports = {
  entry: './main2.js',
  output: {
    filename: 'bundle2.js',
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