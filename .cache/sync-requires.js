// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/macbook/Projects/Web/my-website/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/macbook/Projects/Web/my-website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/macbook/Projects/Web/my-website/src/pages/index.js"))
}

