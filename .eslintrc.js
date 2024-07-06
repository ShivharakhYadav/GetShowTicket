module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "unused-imports",
    "react",
    "react-hooks",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // Make sure this is the last item
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    complexity: "warn",
    "no-console": ["error"],
    "prettier/prettier": "warn",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "prefer-arrow-callback": "error", // Enforces arrow functions for callbacks
    "arrow-spacing": "error", // Enforces consistent spacing around arrows
    "no-extra-semi": "error",
    "comma-spacing": ["error", { before: false, after: true }],
    "keyword-spacing": ["error", { before: true, after: true }],
    "space-infix-ops": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
    "no-trailing-spaces": "error",
    "eol-last": ["error", "always"],
    "block-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "comma-dangle": ["error", "always-multiline"],
    "computed-property-spacing": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "no-tabs": "error",
    "object-curly-spacing": ["error", "always"],
    "space-before-blocks": "error",
    "space-in-parens": ["error", "never"],
    "switch-colon-spacing": "error",
    "react/react-in-jsx-scope": "off", // Next.js doesn't require importing React
    "react/jsx-uses-react": "off", // Next.js doesn't require importing React
    "react/jsx-uses-vars": "error", // Ensures variables used in JSX are declared
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        "newlines-between": "always",
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
