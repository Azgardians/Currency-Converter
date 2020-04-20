// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
  if ((document.body.scrollTop > 280 || document.documentElement.scrollTop > 280)){
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("logo").style.backgroundColor = "#aff2ff";
  }else{
    document.getElementById("navbar").style.backgroundColor = "";
    document.getElementById("logo").style.backgroundColor = "";
  }
  // if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
  //   document.getElementById("navbar").style.backgroundColor = "";
  //   document.getElementById("logo").style.backgroundColor = "";
  // }
  

}
// for Converting the given denomination.
function priceConverter(valNum) {
  document.getElementById("outputPrice").innerHTML = valNum * 76.50;
}