document.addEventListener("DOMContentLoaded", function(event) {

  // =============================================
  // Smart Thumbnail — click to expand / collapse
  // =============================================
  var thumbnailElement = document.getElementById("smart_thumbnail");

  if (thumbnailElement) {
    thumbnailElement.addEventListener("click", function() {
      if (thumbnailElement.className == "") {
        thumbnailElement.className = "small";
      } else {
        thumbnailElement.className = "";
      }
    });
  }

  // =============================================
  // Active nav link highlight (redundant safety)
  // =============================================
  var currentPage = window.location.pathname.split("/").pop();
  var navLinks = document.querySelectorAll("header ul li a");

  navLinks.forEach(function(link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active_page");
    }
  });

});