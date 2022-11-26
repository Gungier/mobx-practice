// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["mobx"],
  extends: ["plugin:mobx/recommended", "react-app", "react-app/jest"],
  rules: {
    "mobx/mising-observer": "off",
  },
  /*
    rules from mobx recommended plugin extension: {
    "mobx/exhaustive-make-observable": "warn",
    "mobx/unconditional-observable": "error",
    "mobx/missing-make-observable": "error",
    "mobx/missing-observer": "warn",
    "mobx/no-anonymous-observer": "warn"
    }
    */
};
