window.onload = function() {
  const links = document.querySelectorAll('.item');

  links.forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      // console.log(e.target.href);
      let url = e.target.href;
      let linkTitle = e.target.textContent;
      getContent(url, linkTitle);
      history.pushState(null, linkTitle, url);
      // Not all browsers support the 2nd parameter for the title of the history
      // entry, however, you can still put something there.
    });
  });
  // console.log(location.pathname);
  getContent(location.pathname)
};

var getContent = function (url) {
  let urlToLoad = (url === '/') ? 'index' : url;
  // The load() function is a part of the AJAX functions
  // bundled with jQuery and is short hand for making
  // an AJAX call to page and getting the content in an element
  // in this case an element with an id of 'main'.
  $('#main').load(urlToLoad + '.html #main');
};

// Adding popstate event listener to handle browser back button
window.addEventListener("popstate", function(e) {
  console.log('Pop that State!');
  // Get State values using e.state
  getContent(location.pathname);
  // getContent(e.state);
});
