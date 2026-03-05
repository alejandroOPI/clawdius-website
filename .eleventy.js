module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"krevolut": "krevolut"});
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
