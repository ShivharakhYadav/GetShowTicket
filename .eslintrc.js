module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "unused-imports", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "prefer-arrow-callback": "error", // Enforces arrow functions for callbacks
    "arrow-spacing": "error", // Enforces consistent spacing around arrows
    "no-confusing-arrow": "error", // Disallows confusing arrow function syntax
    "no-extra-semi": "error",
    "comma-spacing": ["error", { "before": false, "after": true }],
    "space-before-function-paren": ["error", "never"],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "space-infix-ops": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 1 }],
    "no-trailing-spaces": "error",
    "eol-last": ["error", "always"],
    "block-spacing": "error",
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "comma-dangle": ["error", "always-multiline"],
    "computed-property-spacing": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "no-tabs": "error",
    "object-curly-spacing": ["error", "always"],
    "space-before-blocks": "error",
    "space-in-parens": ["error", "never"],
    "switch-colon-spacing": "error",
    "react/react-in-jsx-scope": "off", // Next.js doesn't require importing React
    "react/jsx-uses-react": "off", // Next.js doesn't require importing React
    "react/jsx-uses-vars": "error", // Ensures variables used in JSX are declared
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
        "pathGroups": [
          {
            "pattern": "@/**",
            "group": "internal",
          },
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true,
        },
      },
    ],
    "import/no-unresolved": [
      "error",
      {
        commonjs: true,
        caseSensitive: true,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
