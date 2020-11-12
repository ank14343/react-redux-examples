var path = require("path")

module.exports = {
    mode: "none",
    devtool: "source-map",
    entry: "./TodoAppWithReactReduxTS/index.tsx",
    output: {
        filename: "main.js",
        path: path.join(__dirname, "../TodoAppWithReactReduxTS/public")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
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
        extensions: [ ".js", ".ts", ".tsx" ]
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