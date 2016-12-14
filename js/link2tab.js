// // Javascript to enable link to tab
// var hash = document.location.hash;
// var prefix = "tab_";
// if (hash) {
//     $('.nav-tabs a[href="'+hash.replace(prefix,"")+'"]').tab('show');
// }
//
// // Change hash for page-reload
// $('.nav-tabs a').on('shown.bs.tab', function (e) {
//     window.location.hash = e.target.hash.replace("#", "#" + prefix);
// });
(function activateTabFromHash() { if (location.hash) { var tabLink = document.querySelector('a[href="' + location.hash + '"]'); if (!tabLink) { return false; } tabLink.click(); if (location.hash) {
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 1);
} } })();
