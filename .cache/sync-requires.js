// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---src-pages-index-js": preferDefault(require("/Users/maciejnowakowski/code/indiedojo/src/pages/index.js"))
}

exports.json = {
  "index.json": require("/Users/maciejnowakowski/code/indiedojo/.cache/json/index.json")
}

exports.layouts = {

}