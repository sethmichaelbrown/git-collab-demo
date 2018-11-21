
function  dookum() {
  console.log('dookieSammich')
}
dookum()


function whatsYourFunction(functions){
  return whatsYourFunction(functions);
}
document.addEventListener("DOMContentLoaded",()=>{
  let bdy = document.getElementsByTagName("body")
  let h1=document.querySelector(".seth");
  for(let i = 0; i<bdy.length; i++){
    bdy[i].addEventListener("click",(e)=>{
      e.target.style.animation = "spin 15s linear infinite"
    })
  }
  h1.addEventListener("mouseover",()=>h1.innerText="Seth Did This");
  h1.addEventListener("mouseout",()=>h1.innerText="Paul Did This");

})
