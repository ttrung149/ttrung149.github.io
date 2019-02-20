for (let i = 0; i < document.images.length; i++) {
  let image = document.images[i];
  let bigImage = document.createElement("img");

  bigImage.onload = function() {
    image.src = this.src;

    document.querySelectorAll(".custom-caption").forEach(function(elem) {
      elem.style.visibility = "visible";
    });

    document.querySelector("#caption1").style.visibility = "visible";
    image.className = "no-blur";
  };

  setTimeout(function() {
    let index = image.src.indexOf("min-");
    let src = image.src.slice(index + 4);
    bigImage.src = `assets/${src}`;
  }, Math.random() * 200 + 300);
}
