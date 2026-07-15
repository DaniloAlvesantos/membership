import sharedConfig from "@membership/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  ...sharedConfig,
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
