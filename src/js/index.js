var Prismic = require('prismic-javascript');
var apiEndpoint = 'https://anthonystest.cdn.prismic.io/api/v2';
var PrismicDOM = require('prismic-dom');

Prismic.getApi(apiEndpoint)
  .then((api) => {
    return api.query(
      Prismic.Predicates.at('document.type', 'landing_page')
    ); // empty query will return all docs
  })
  .then((response) => { // if query is successful, log all the response
    var document = response.results[0];
    console.log(document);
  }, (err) => {
    console.log("Something went wrong: ", err);
  });

function linkResolver (doc) {
  // Define the URL bsaed on the document type
  if (doc.type === 'page') {
    return '/page/' + doc.uid;
  }
  else if (doc.type === 'blog_post') {
    return '/blog/' + doc.uid;
  }

  // otherwise, default to the homepage
  return '/';
}