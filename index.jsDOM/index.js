// function changeText(event){
//     console.log(event);
// let fpara = document.getElementById('fpara');
// fpara.textContent = "Hello Babbar";
// }
// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',changeText);
let anchorElement = document.getElementById("fanchor");
anchorElement.addEventListener("click", function (event) {
  event.preventDefault();
  anchorElement.textContent = "Click done bhai";
});

