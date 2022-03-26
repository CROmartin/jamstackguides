const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  let categoryType = []
  const pages = await graphql(`
    query {
      allPrismicPost {
        edges {
          next {
            uid
          }
          node {
            uid
            data {
              url
              title
              category
              publish_date(formatString: "Y-M-D")
              author {
                id
                document {
                  ... on PrismicAuthor {
                    data {
                      name
                    }
                    id
                  }
                }
              }
              related1 {
                uid
                document {
                  ... on PrismicPost {
                    uid
                  }
                }
              }
              related2 {
                uid
                document {
                  ... on PrismicPost {
                    uid
                  }
                }
              }
            }
          }
          previous {
            uid
          }
        }
      }
    }
  `)
  const template = path.resolve("./src/templates/blogpost.js")
  pages.data.allPrismicPost.edges.forEach(post => {
    // console.log("Blog created: ", post.node.data.title);
    ///Kreiranje blogova
    createPage({
      path: `${post.node.data.url ? post.node.data.url : post.node.uid}`,
      component: template,
      context: {
        uid: post.node.uid,
        prev: post.previous ? post.previous.uid : "null",
        next: post.next ? post.next.uid : "null",
        related1: post.node.data.related1.uid
          ? post.node.data.related1.uid
          : "null",
        related2: post.node.data.related2.uid
          ? post.node.data.related2.uid
          : "null",
        lastmoddate: post.node.data.publish_date,
      },
    })
    ///Kreiranje stranica za kategorije
    if (!categoryType.includes(post.node.data.category))
      categoryType.push(post.node.data.category)

    const template_category = path.resolve(
      "./src/templates/blog-filter-category.js"
    )
    createPage({
      path: `${post.node.data.category}`,
      component: template_category,
      context: {
        categoryTypes: categoryType,
        category: post.node.data.category,
      },
    })

    ///Kreiranje stranica za autore
    const template_author = path.resolve(
      "./src/templates/blog-filter-author.js"
    )
    createPage({
      path: `${post.node.data.author.document.data.name}`,
      component: template_author,
      context: {
        categoryTypes: categoryType,
        id: post.node.data.author.id,
      },
    })
  })

  //Kreiranje stranice za Featured
  const template_featured = path.resolve(
    "./src/templates/blog-filter-featured.js"
  )
  createPage({
    path: `featured`,
    component: template_featured,
    context: {
      featured: true,
      categoryTypes: categoryType,
    },
  })
}
