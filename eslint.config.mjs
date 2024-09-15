import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs", "**/*.ts", "**/*.tsx"],
    plugins: {
      react,
    },
    rules: {
      "prettier/prettier": ["warn", { printWidth: 100 }],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
);
