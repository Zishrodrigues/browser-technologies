svg_fallback = (function(){
  var supportsSVG = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
  var body = document.querySelector('body');
  var images = document.querySelectorAll("[data-png-fallback]");

  if (!supportsSVG) {
    body.className += " no-svg";
    [].forEach.call(images, function(image) {
      image.src = image.getAttribute("data-svg-fallback");
    });
  }
})();
