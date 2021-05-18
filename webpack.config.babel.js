import path from 'path';
//import EsmWebpackPlugin from '@purtuga/esm-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

// ──────────────────────────────────────────────────────────────────────────────

const CONTEXT = path.resolve(__dirname, 'src');
const ENTRY = {
  index: './index.mjs'
};
const DEVTOOL = false;
const MODE = 'production';
const TEST = /\.(es6?|m?jsx?)$/;
const BABEL_PRESETS = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: false // false means polyfill not required runtime
    }
  ],
  '@babel/preset-react'
];
const OUTPUT_PATH = path.join(__dirname, 'dist');
const PERFORMANCE = { hints: false };
const RESOLVE = {
  extensions: [
    '.js', // Or node_modules will fail to resolve
    '.jsx',
    '.mjs',
    '.es'
  ]
};

// ──────────────────────────────────────────────────────────────────────────────

const UMD_CONFIG = {
  context: CONTEXT,
  entry: ENTRY,
  devtool: DEVTOOL,
  mode: MODE,
  module: {
    rules: [
      {
        test: TEST,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false, // The .babelrc file should only be used to transpile config files.
              comments: false,
              compact: false,
              minified: false,
              plugins: [
                'array-includes',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-transform-object-assign'
              ],
              presets: BABEL_PRESETS
            } // options
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  performance: PERFORMANCE,
  output: {
    path: OUTPUT_PATH,
    filename: '[name].umd.js',
    // library: 'LIB',
    libraryTarget: 'umd'
  },
  resolve: RESOLVE
};

// ──────────────────────────────────────────────────────────────────────────────

const CJS_CONFIG = {
  context: CONTEXT,
  devtool: DEVTOOL,
  entry: ENTRY,
  /* externals: [
    'formik',
    'semantic-ui-react'
  ],*/
  mode: MODE,
  module: {
    rules: [
      {
        test: TEST,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false, // The .babelrc file should only be used to transpile config files.
              comments: false,
              compact: false,
              minified: false,
              plugins: [
                'array-includes',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-transform-object-assign'
              ],
              presets: BABEL_PRESETS
            } // options
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  performance: PERFORMANCE,
  output: {
    path: OUTPUT_PATH,
    filename: '[name].cjs.js',
    libraryTarget: 'commonjs'
  },
  resolve: RESOLVE
};

// ──────────────────────────────────────────────────────────────────────────────

/*const ESM_CONFIG = {
  context: CONTEXT,
  entry: ENTRY,
  devtool: DEVTOOL,
  mode: MODE,
  module: {
    rules: [
      {
        test: TEST,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false, // The .babelrc file should only be used to transpile config files.
              comments: false,
              compact: false,
              minified: false,
              plugins: [
                'array-includes',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-transform-object-assign'
              ],
              presets: BABEL_PRESETS
            } // options
          }
        ]
      }
    ]
  },
  performance: PERFORMANCE,
  output: {
    path: OUTPUT_PATH,
    filename: '[name].esm.js',
    library: 'LIB',
    libraryTarget: 'var'
  },
  plugins: [new EsmWebpackPlugin()],
  resolve: RESOLVE
};*/

// ──────────────────────────────────────────────────────────────────────────────

/*const EXAMPLE_ESM_CONFIG = {
  context: path.resolve(__dirname, 'example'),
  entry: {
    index: './index.jsx'
  },
  devtool: DEVTOOL,
  mode: 'development',
  module: {
    rules: [
      {
        test: TEST,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false, // The .babelrc file should only be used to transpile config files.
              comments: false,
              compact: false,
              minified: false,
              plugins: [
                'array-includes',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-transform-object-assign'
              ],
              presets: BABEL_PRESETS
            } // options
          }
        ]
      }
    ]
  },
  performance: PERFORMANCE,
  output: {
    path: path.join(__dirname, 'example'),
    filename: '[name].esm.js',
    library: 'LIB',
    libraryTarget: 'var'
  },
  plugins: [
    new EsmWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: '../node_modules/@babel/standalone/babel.js', to: './' },
        { from: '../node_modules/react/umd/react.development.js', to: './' },
        { from: '../node_modules/react-dom/umd/react-dom.development.js', to: './' },
        { from: '../node_modules/semantic-ui-css/semantic.css', to: './semantic-ui-css/' },
        { from: '../node_modules/semantic-ui-css/themes', to: './semantic-ui-css/themes' }
      ]
    })
  ],
  resolve: RESOLVE
};*/

// ──────────────────────────────────────────────────────────────────────────────

export default [
  UMD_CONFIG,
  CJS_CONFIG/*,
  ESM_CONFIG,
  EXAMPLE_ESM_CONFIG*/
];
