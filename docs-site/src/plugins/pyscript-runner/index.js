// src/plugins/pyscript-runner/index.js
const path = require("path");

module.exports = function pluginPyScriptRunner(_context, options) {
  return {
    name: "pyscript-runner",

    getClientModules() {
      return [path.resolve(__dirname, "./client.js")];
    },

    configureWebpack(config, isServer) {
      const extra = {
        resolve: {
          conditionNames: ["browser", "import", "require", "default"],
        },
      };
      if (!isServer) {
        extra.devServer = {
          headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
          },
        };
      }
      return extra;
    },

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
              window.__PYSCRIPT__ = ${JSON.stringify(options)};
            `,
          },
        ],
      };
    },
  };
};
