// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/maciejnowakowski/code/indiedojo/.cache/dev-404-page.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/maciejnowakowski/code/indiedojo/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/maciejnowakowski/code/indiedojo/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/maciejnowakowski/code/indiedojo/.cache/json/index.json")
}

exports.layouts = {

}