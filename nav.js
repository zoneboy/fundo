
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mobile_header").style.display="none";
  document.getElementById("container").style.marginLeft = "250px";
  document.getElementById("mobile_header").style.marginLeft = "250px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mobile_header").style.display="block";
  document.getElementById("container").style.marginLeft= "0";
  document.getElementById("mobile_header").style.marginLeft = "50px";
  // document.body.style.backgroundColor = "teal";
}

//   let ham = document.getElementById('sport');
//   let fin = document.getElementById('finance');
//   let dis = document.getElementsByClassName('hideous');
//   // Object.entries(dis).map((object)=>{
//   // 	console.log(object)
//   // })
//  function dropdown() {
//   dis[0].classList.toggle("hide");
//   // dis[1].classList.toggle("hide");
// }
// function dropdownd() {
//   dis[1].classList.toggle("hide");

// }


// let closer = document.getElementById('myClose');
let openbtn = document.getElementsByClassName('openbtn')[0];
function bodyClose(e){
  var snav = document.getElementById('mySidenav');
  if (e.target.id !== snav.id && !snav.contains(e.target) && !e.target.className.match('openbtn'))
    closeNav();
  // console.log("Hello" + snav.id)
}
 window.addEventListener("click", bodyClose);

 //DARK AND LIGHT MODE

 var dark = document.getElementById('dark');
 var light = document.getElementById('light');
 var middle = document.querySelector(".middle");
 var image = document.querySelector(".image");
 var box = document.querySelectorAll(".box")[0];
 var boxSecond = document.querySelectorAll(".box")[1];
 var boxThird = document.querySelectorAll(".box")[2];
 var boxFirst = document.querySelectorAll(".box")[3];

 dark.addEventListener("click", function(){
  middle.classList.remove("middle");
  box.classList.remove("box");
  boxFirst.classList.remove("box");
  boxSecond.classList.remove("box");
  boxThird.classList.remove("box");
  image.classList.remove("image");
  middle.classList.add("middleColor");
  box.classList.add("boxColor");
  boxFirst.classList.add("boxColor");
  boxSecond.classList.add("boxColor");
  boxThird.classList.add("boxColor");
  image.classList.add("imageColor");
 })

 light.addEventListener("click", function(){
  middle.classList.add("middle");
  box.classList.add("box");
  boxFirst.classList.add("box");
  boxSecond.classList.add("box");
  boxThird.classList.add("box");
  image.classList.add("image");
  middle.classList.remove("middleColor");
  box.classList.remove("boxColor");
  boxFirst.classList.remove("boxColor");
  boxSecond.classList.remove("boxColor");
  boxThird.classList.remove("boxColor");
  image.classList.remove("imageColor");
 })



