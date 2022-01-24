
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


