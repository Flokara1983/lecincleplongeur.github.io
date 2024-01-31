const mousemove = document.querySelector(".mousemove");
// const nav = document.querySelector();



window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
  
});
/////////////////////////////////////////
let lastScroll = 0; 

const imgPhil = document.querySelector(".img-phil")
const mainText = document.querySelector(".main-text")
const acc1 = document.querySelector(".acc1")
const acc2 = document.querySelector(".acc2")
const acc3 = document.querySelector(".acc3")

const panel1 = document.querySelector(".panel1")
const panel2 = document.querySelector(".panel2")
const panel3 = document.querySelector(".panel3")
const showPanel =document.querySelector(".showpanel")



window.addEventListener("scroll", () => {
let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight
  
  //NAV
  if(scrollValue < 0.16){
    navbar.style.visibility= "hidden"
  }
  else if(window.scrollY<lastScroll){
    navbar.style.visibility = "visible"
      }else{
    navbar.style.visibility = "hidden"
  }

  // Philippe
  if (scrollValue > 0.17) {
    imgPhil.style.transform = "none"
    mainText.style.transform = "none"
  }
  lastScroll = window.scrollY
})

// Qui somme-nous

acc1.addEventListener('click', () => {
  panel1.classList.toggle('showpanel')
})

acc2.addEventListener("click", () => {
  panel2.classList.toggle("showpanel");
});

acc3.addEventListener("click", () => {
  panel3.classList.toggle("showpanel");
});



