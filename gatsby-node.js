// const path = require('path');


// exports.createPages = async ({graphql, actions}) => {
//   const {createPage } = actions;

//   const pages = await graphql(`
  
//   `);
//    const template = path.resolve("src/templates/product.js");

//    pages.data.allPrismicProduct.edges.forEach(edge => {
//      createPage({
//        path: `edge.node.uid`,
//        component: template,
//        context: {
//          uid: edge.node.uid
//        }
//      })
//    });
// }