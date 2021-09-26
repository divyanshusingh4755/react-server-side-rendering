const merge = require("webpack-merge");
const path = require("path");
const babelBaseConfig = require("./webpack.base.js");

const config = {

    // Tell webpack the root file of our client appplication
    entry: "./src/client/client.js",

    // Tell webpack where to put the output file that is generated
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    }
};

module.exports = merge(babelBaseConfig, config);