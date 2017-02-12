window.onload = function() {
  const links = document.querySelectorAll('.item');

  links.forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      // console.log(e.target.href);
      let url = e.target.href;
      let linkTitle = e.target.textContent;
      getContent(url, linkTitle);
    });
  });
};

var getContent = function (url, title) {
  $('#main').load(url + ' #main');
  history.pushState(null, title, url);
  // Not all browsers support the 2nd parameter for the title of the history
  // entry, however, you can still put something there.
};

// Adding popstate event listener to handle browser back button
window.addEventListener("popstate", function(e) {
  console.log('Pop that State!');
  // Get State values using e.state
  getContent(location.pathname);
  // getContent(e.state);
});
