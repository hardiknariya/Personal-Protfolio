const withLess = require("next-with-less");
withLess.patchNext(require("next/dist/build/webpack/config/blocks/css"));

module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    additionalData: (content) => `${content}\n@border-radius-base: 5px;`,
  },
});
