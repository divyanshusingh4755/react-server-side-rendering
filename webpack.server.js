const path = require("path");
const merge = require("webpack-merge");
const babelBaseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
    // Inform webpack that we're building the bundle for nodeJS, rather than for the browser
    target: "node",

    // Tell webpack the root file of our server appplication
    entry: "./src/index.js",

    // Tell webpack where to put the output file that is generated
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(babelBaseConfig, config);