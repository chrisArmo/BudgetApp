/**
 * Webpack Configuration
 */

// Dependencies

const path = require("path");

// Export config

module.exports = {
    mode: "development",
    entry: {
        main: ["./src/index.js"]
    },
    output: {
        path: path.join(process.cwd(), "public"),
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: path.join(process.cwd(), "public"),
        publicPath: "/",
        port: 3000,
        overlay: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            }
        ]
    }
};
