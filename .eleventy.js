require("dotenv").config();

module.exports = {
  dataTemplateEngine: "njk",
  dir: {
    input: "./src/pages",
    output: "./dist",
    includes: "../templates",
    data: "../data",
  },
};
