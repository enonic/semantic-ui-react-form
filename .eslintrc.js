module.exports = {
  extends: [
    'eslint:recommended',
    //'airbnb-base',
    //'prettier'
    'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended'
  ], // extends
  globals: {
    React: false
  },
  overrides: [{
		files: [
			'**/*.ts',
			'**/*.tsx'
		]
	}],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'jsx-a11y',
    //'prettier'
    '@typescript-eslint'
  ], // plugins
  rules: {
	'@typescript-eslint/no-unused-vars': ['error', {
		argsIgnorePattern: '^_',
		//caughtErrorsIgnorePattern: '^_',
		//destructuredArrayIgnorePattern: '^_'
	}],
    'comma-dangle': [ 'error', {
        'arrays': 'never',
        'objects': 'never',
        'imports': 'never',
        'exports': 'never',
        'functions': 'ignore',
    }],
    'func-names': [ 'off' ],
    'import/prefer-default-export': [ 'off' ],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'prettier/prettier': [ 'off' ],
    'react/prop-types': [ 'off' ],
    'react/react-in-jsx-scope': [ 'off' ],
  }, // rules
  settings: {
    'import/extensions': [
      '.es',
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ],
    'import/resolver': {
      node: {
        extensions: [
          '.es',
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    },
    react: {
			version: 'detect'
		}
  } // settings
} // module.exports
