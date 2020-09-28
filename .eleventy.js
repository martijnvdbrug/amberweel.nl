module.exports = eleventyConfig => {
    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('admin');

    // Returning something from the configuration function is optional
    return {
        dir: {
            output: "_site",
            data: "_date"
        },
    };
};
