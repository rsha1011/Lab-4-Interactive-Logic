window.addEventListener("mousemove", function (argument) {
  let cX = event.clientX;
  let cY = event.clientY;

  document.getElementById("client-x").innerHTML = cX;
  document.getElementById("client-y").innerHTML = cY;

  let boxL = document.getElementById("box-left");
  let boxC = document.getElementById("box-center");
  let boxR = document.getElementById("box-right");

  let resetBtn = document.getElementById("reset-btn");

  resetBtn.addEventListener("click", function () {
  boxL.style.backgroundImage = "";
  boxC.style.backgroundImage = "";
  boxR.style.backgroundImage = "";
  });

boxL.addEventListener("click", function () {
  boxL.style.backgroundImage = "url('Images/dog.png')";
});

boxC.addEventListener("click", function () {
  boxC.style.backgroundImage = "url('Images/cat.png')";
});

boxR.addEventListener("click", function () {
  boxR.style.backgroundImage = "url('Images/orangeball.png')";
  boxR.style.backgroundPosition = "center";
});

  if (cX < 400) {
    boxL.style.visibility = "visible";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "hidden";
  } else if (cX >= 400 && cX < 800) {
    boxL.style.visibility = "hidden";
    boxC.style.visibility = "visible";
    boxR.style.visibility = "hidden";
  } else if (cX >= 800 && cX < 1200) {
    boxL.style.visibility = "hidden";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "visible";
  } else {
    boxL.style.visibility = "hidden";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "hidden";
  }
});


