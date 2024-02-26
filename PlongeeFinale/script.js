const mousemove = document.querySelector(".mousemove");
// const nav = document.querySelector();

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
/////////////////////////////////////////
let lastScroll = 0;

const imgPhil = document.querySelector(".img-phil");
const mainText = document.querySelector(".main-text");
const acc1 = document.querySelector(".acc1");
const acc2 = document.querySelector(".acc2");
const acc3 = document.querySelector(".acc3");

const panel1 = document.querySelector(".panel1");
const panel2 = document.querySelector(".panel2");
const panel3 = document.querySelector(".panel3");
const showPanel = document.querySelector(".showpanel");

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  //NAV
  if (scrollValue < 0.16) {
    navbar.style.visibility = "hidden";
  } else if (window.scrollY < lastScroll) {
    navbar.style.visibility = "visible";
  } else {
    navbar.style.visibility = "hidden";
  }

  // Philippe
  if (scrollValue > 0.17) {
    imgPhil.style.transform = "none";
    mainText.style.transform = "none";
  }
  lastScroll = window.scrollY;
});

// Qui somme-nous

acc1.addEventListener("click", () => {
  panel1.classList.toggle("showpanel");
});

acc2.addEventListener("click", () => {
  panel2.classList.toggle("showpanel");
});

acc3.addEventListener("click", () => {
  panel3.classList.toggle("showpanel");
});

//////////////////////////////////////////////////////////////////
const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

//tableau d'image: [0,1,2]

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;

    slides[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
});
///////////////////////////////////////////////////////////
//Text-anim

const target = document.getElementById("target");
let array = [
  "les plongeurs en piscine",
  "les plongeurs débutants",
  "les plongeurs confirmés",
  "les plongeurs en fosse",
  "les plongeurs niveau 3",
  "les plongeurs Niveau 1",
  "les plongeurs adolescent ",
  "les plongeurs apnéistes",
  "les plongeurs juste pour faire des bulles",
  `les plongeurs niveau 4`,
  "les plongeurs occasionels",
  "les plongeurs en retraite",
  "les plongeurs moniteurs",
  "les plongeurs niveau 2",
  "les plongeurs formateurs",
  "les plongeurs certifiés",
];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.style.color = "white";
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 80);
};

loop();
