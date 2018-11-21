
function  dookum() {
  console.log('dookieSammich')
}
dookum()


function whatsYourFunction(functions){
  return whatsYourFunction(functions);
}

document.addEventListener("DOMContentLoaded",()=>{
  let bdy = document.getElementsByTagName("body")
  for(let i = 0; i<bdy.length; i++){
    bdy[i].addEventListener("click",(e)=>{
      e.target.style.animation = "spin 15s linear infinite"
    })
  }
})


function dookieSammich () {
  console.log('🍞💩🍞')
}
dookieSammich()
