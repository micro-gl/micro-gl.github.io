const import_folder = require('./src/utils/folder').import_folder
const fs   = require('fs');
const path   = require('path');

module.exports = {
  async redirects() {
    const docs = import_folder(path.join(process.cwd(), 'content', 'docs'), fs, path)
    const first_route = `/docs/${docs.groups[0].items[1].route}`
    return [
      // {
      //   source: '/',
      //   destination: '/docs',
      //   permanent: true,
      // },
      {
        source: '/a',
        destination: first_route,
        permanent: true,
      },
    ]
  },
}