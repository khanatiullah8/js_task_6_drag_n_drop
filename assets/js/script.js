window.addEventListener("load", function () {
  var box = document.querySelectorAll(".box");
  var figure = document.querySelector("figure");

  figure.addEventListener("dragstart", function () {
    setTimeout(function () {
      figure.classList.add("hide");
    }, 0);
  });

  figure.addEventListener("dragend", function () {
    figure.classList.remove("hide");
  });

  box.forEach(function (element) {
    element.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    element.addEventListener("dragenter", function (e) {
      e.target.classList.add("active");
    });

    element.addEventListener("dragleave", function (e) {
      e.target.classList.remove("active");
    });

    element.addEventListener("drop", function (e) {
      e.target.append(figure);
      setTimeout(function () {
        e.target.classList.remove("active");
      }, 10);
    });
  });
});