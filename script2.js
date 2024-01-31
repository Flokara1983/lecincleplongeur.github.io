//Text-anim

const target = document.getElementById("target");
let array = [
  "les plongeurs en piscine",
  "les plongeurs débutants",
  "les plongeurs confirmés",
  "les plongeurs en fosse",
  "les plongeurs niveau 3",
  "les plongeurs Niveau 1",
  "les plongeurs apnéistes",
  "les plongeurs juste pour faire des bulles",
  `les plongeurs niveau 4`,
  "les plongeurs occasionels",
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
  letter.style.color ="white";
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