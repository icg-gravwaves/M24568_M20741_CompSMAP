// GitHub Pages doesn't send a Content-Disposition: attachment header for
// .ipynb files, so the theme's "Download source file" button just navigates
// to the raw notebook instead of downloading it. Adding the `download`
// attribute forces the browser to save it instead.
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll('.menu-dropdown-download-buttons a[href$=".ipynb"]')
    .forEach(function (link) {
      link.setAttribute("download", "");
    });
});
