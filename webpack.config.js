const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => {
  return {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: env.build === 'web' ? "/" : "./"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
      historyApiFallback: true
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
          '@': __dirname + '/src',
          '$': __dirname + '/assets'
        }
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // Load images via file-loader
            { test: /\.(png|svg|jpg|gif)$/, use: [{ 
              loader: "file-loader",
              options: { name: 'dirname/[hash].[ext]', }, 
            }]}
        ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),

      new CopyWebpackPlugin([
        { from: 'src/public/images', to: 'assets/images'}
      ])
    ]
  };
}