// let btn = document.getElementsByTagName("button");
// let display = document.getElementById("display");
// let hellodiv = document.getElementsByClassName("helloDiv");

// let innerHTML = display.innerHTML;
// let innertext = display.innerText;

// console.log(innerHTML);
// console.log(innertext);

// function addElements() {
//   let displays = document.getElementById("display");
//   displays.innerHTML += '<div class="helloDiv">안녕하세요</div>';
// }

// btn[0].addEventListener("click", addElements);

// let button = document.getElementsByClassName("colorBtn");

// let i = 0;
// let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
// function changeColor() {
//   document.body.style.backgroundColor = colors[i];
//   i = (i + 1) % colors.length;
// }
// button[0].addEventListener("click", changeColor);

// let d1 = new Date();
// let d2 = new Date(2024, 0, 16);
// let d3 = new Date(" January 16, 2024 17:28:00");
// let d4 = new Date(2024, 0, 16, 17, 28, 0, 0);

// console.log(d1);
// console.log(d2);
// console.log(d3);
// console.log(d4);

// function setClock() {
//   let d1 = new Date();

//   i =
//     d1.getHours() +
//     ":" +
//     ("0" + d1.getMinutes()).slice(-2) +
//     ":" +
//     d1.getSeconds();
//   document.body.innerHTML = i;
// }
// setClock();

// function change() {
//   let content = document.getElementById("content").innerHTML;
//   document.getElementById("content").innerHTML = content.replace(
//     "나",
//     "혜민이"
//   );
// }

// const body = document.getElementsByTagName("body")[0];
// const firstdiv = document.getElementById("firstdiv");
// const newdiv = document.createElement("div");
// firstdiv.appendChild(newdiv);
// console.log(body);

// const newimg = document.createElement("img");
// const newh1 = document.createElement("h1");
// newimg.src = "/0328/a.png";
// newh1.innerText = "멍게";
// newdiv.appendChild(newimg);
// newdiv.appendChild(newh1);
// console.log(body);

// const body = document.getElementsByTagName("body")[0];
// const seafood = ["해삼", "멍게", "말미잘"];
// const table = document.getElementById("table");
// let i = 0;
// function addSeafood() {
//   if (i < seafood.length) {
//     const newdiv = document.createElement("h1");
//     newdiv.innerHTML = seafood[i];
//     table.appendChild(newdiv);
//     i++;
//   }
// }
// function removeSeafood() {
//   if (i > 0) {
//     i--;
//     const lastChild = table.lastChild;
//     table.removeChild(lastChild);
//   }
// }
// document.getElementById("addBtn").addEventListener("click", addSeafood);
// document.getElementById("removeBtn").addEventListener("click", removeSeafood);

// window.addEventListener("scroll", function () {
//   var currentPosition =
//     window.pageU0ffset || document.documentElement.scrollTop;
//   if (currentPosition >= 500) {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   } else {
//     console.log("스크롤 위치가 500px이상이 아닙니다.");
//   }
// });
