import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier"; // Import Prettier plugin

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next",
    "next/core-web-vitals",
    "prettier" // Ensure Prettier is included
  ),
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    plugins: {
      prettier: prettierPlugin, // Use the imported Prettier plugin
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }], // Enable Prettier rules
      "react/react-in-jsx-scope": "off", // Disable unnecessary React scope rule for Next.js
    },
  },
];

export default eslintConfig;
