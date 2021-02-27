const yaml = require('js-yaml');
const fs   = require('fs');
const path   = require('path');

export const process = (document) => {
  const paths = document.groups.map(group => group.items)
                              .flat() 
  let __map = {}
  paths.forEach(item => {
    if(__map[item.route]!==undefined)
      console.log(`processor warning:: route ${item.route} is overriden`)
    __map[item.route] = item.path
  })
  return { ...document, __map }
}

export default (folder_path) => {
  let doc = undefined
  try {
    doc = yaml.load(fs.readFileSync(path.join(folder_path, 'index.yaml'), 'utf8'));
    // console.log(doc);
  } catch (e) {
    console.log(e);
  }
  return process(doc)
}