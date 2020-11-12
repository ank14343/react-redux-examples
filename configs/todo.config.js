var path = require("path")
// var webpack = require("webpack")

module.exports = {
    mode: "none",
    devtool: "source-map",
    entry: "./TodoAppWithReactRedux/index.js",
    output: {
        filename: "main.js",
        path: path.join(__dirname, "../TodoAppWithReactRedux/public")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [ ".js" ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    watch: true,
    // watchOptions: {
    //     ignored: /node_modules/
    // }

    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env.NODE_ENV': JSON.stringify('development')
    //     })
    // ],
}