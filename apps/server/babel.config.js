module.exports = (api) => {
    api.cache.using(() => process.env.NODE_ENV);

    return {
      "exclude": /node_modules\/(?!@testorama)/,
      "presets": [
        ["@babel/preset-env", {
          targets: 'current node'
        }]
      ]
    }
}