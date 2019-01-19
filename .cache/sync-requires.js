// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/dawsonwalker/Documents/DawsonStuff/My-Website/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/dawsonwalker/Documents/DawsonStuff/My-Website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/dawsonwalker/Documents/DawsonStuff/My-Website/src/pages/index.js"))
}

