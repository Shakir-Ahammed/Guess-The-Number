let number = parseInt(Math.random() * 20) + 1;
let src = 20;
let highsrc = 0;
let gnum;

let sc = document.querySelector(".sc").textContent;
let hisrc = document.querySelector(".highsc").textContent;
document.querySelector(".sc").textContent += " " + src;
document.querySelector(".highsc").textContent += " " + highsrc;

const cbtnElements = document.getElementsByClassName("cbtn");
for (let i = 0; i < cbtnElements.length; i++) {
  cbtnElements[i].addEventListener("click", fun);
}
function fun() {
  gnum = document.querySelector(".innum").value;
  gnum = Number(gnum);
  if (src > 1) {
    if (gnum === number) {
      document.querySelector(".msg").textContent = "The Number is correct .";
      document.querySelector(".num").textContent = number;
      document.querySelector("body").style.backgroundColor = "greenyellow";
      console.log(typeof src, typeof highsrc);
      if (highsrc < src) {
        highsrc = src;
        document.querySelector(".highsc").textContent = hisrc;
        document.querySelector(".highsc").textContent += " " + highsrc;
      }
    } else if (gnum > number) {
      document.querySelector(".msg").textContent = "The Number is too High .";
      document.querySelector(".innum").value = "";
      src--;
      document.querySelector(".sc").textContent = sc;
      document.querySelector(".sc").textContent += src;
    } else if (gnum < number) {
      document.querySelector(".msg").textContent = "The Number is too Low .";
      document.querySelector(".innum").value = "";
      src--;
      document.querySelector(".sc").textContent = sc;
      document.querySelector(".sc").textContent += src;
    }
  } else {
    document.querySelector(".msg").textContent = "you lost the game .";
    document.querySelector("body").style.backgroundColor =
      "rgba(245, 45, 45, 0.932)";
  }
}

/// again

const abtnElements = document.getElementsByClassName("abtn");
for (let i = 0; i < abtnElements.length; i++) {
  abtnElements[i].addEventListener("click", fun2);
}

function fun2() {
  src = 20;
  number = parseInt(Math.random() * 20) + 1;
  document.querySelector(".msg").textContent = "Guessing Number...";
  document.querySelector(".num").textContent = "?";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".innum").value = "";
  document.querySelector(".sc").textContent = sc;
  document.querySelector(".sc").textContent += src;
}
