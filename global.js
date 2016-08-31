// window.addEventListener("load", function(){
//   function makeParagraph(v) {
//     var p = document.createElement("div");
//     p.setAttribute("id", v.value);
//     p.banana = v.value;
//     var t = document.createTextNode(v.value);
//     p.appendChild(t);
//     userData.appendChild(p);
//   }
//   var button = document.getElementById("button");
//   button.addEventListener("click", function(){
//   	var albumTitle = document.getElementById("albumTitle");
//   	var userData = document.getElementById("userData");
//   	makeParagraph(albumTitle);
//   	albumTitle.value = "";
//   });
//   var load = document.getElementById("load");
//   load.addEventListener("click", function(){
//     var albumTitle = document.getElementById("albumTitle");
//     var userDataPs = document.getElementById("userData").querySelectorAll("div");
//     debugger; 
//     albumTitle.value = userDataPs[0].banana;
//   });
// });  