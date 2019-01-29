setTimeout(display, 1500);

function display() {
  document.querySelector("#loader").style.display = "none";
  document.querySelector(".custom-container").style.display = "block";
  window.sr = ScrollReveal();

  sr.reveal("#about", {
    duration: 1000,
    origin: "top",
    distance: "200px"
  });

  sr.reveal("#myCarousel", {
    duration: 500,
    origin: "bottom"
  });

  sr.reveal("#nam", {
    duration: 1000,
    origin: "bottom"
  });

  sr.reveal("#robots", {
    duration: 500,
    origin: "bottom"
  });

  sr.reveal("#me", {
    duration: 500,
    origin: "top"
  });

  sr.reveal("#fuji", {
    duration: 700,
    origin: "bottom"
  });

  sr.reveal("#nam2", {
    duration: 500,
    origin: "bottom"
  });

  sr.reveal("#random", {
    duration: 500,
    origin: "bottom"
  });

  sr.reveal("#a-star", {
    duration: 1000,
    origin: "bottom"
  });

  sr.reveal("#fern", {
    duration: 500,
    origin: "bottom"
  });

  sr.reveal("#blimp", {
    duration: 500,
    origin: "bottom"
  });

  sr.reveal("#tree", {
    duration: 300,
    origin: "bottom"
  });

  sr.reveal("#bridge", {
    duration: 800,
    origin: "top"
  });

  sr.reveal("#koch", {
    duration: 500,
    origin: "bottom"
  });

  sr.reveal("#triangle", {
    duration: 500,
    origin: "bottom"
  });

  sr.reveal("#triangle", {
    duration: 500,
    origin: "bottom"
  });
}
