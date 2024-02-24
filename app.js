const randomBtnCaptcha = document.querySelector(".captcha_area i"),
  capcthaEl = document.querySelector(".image span"),
  inputField = document.querySelector("form input"),
  btnCheck = document.querySelector(".check_btn"),
  resultDisplay = document.querySelector(".result_text");

const allCapatchaChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

function randomCaptcha() {
  capcthaEl.innerText = "";
  for (let i = 0; i < 6; i++) {
    //   console.log(i);
    let randomChar = Math.floor(Math.random() * allCapatchaChar.length);
    capcthaEl.innerText += allCapatchaChar[randomChar];
  }
}

randomCaptcha();

randomBtnCaptcha.addEventListener("click", () => randomCaptcha());

btnCheck.addEventListener("click", (e) => {
  e.preventDefault();

  let inputvalue = inputField.value.toLowerCase();
  if (inputvalue) {
    if (inputvalue == capcthaEl.innerText.toLowerCase()) {
      resultDisplay.classList.add("success");
      resultDisplay.classList.remove("error");
      resultDisplay.innerText = "Captcha is Matched";
    } else {
      resultDisplay.classList.add("error");
      resultDisplay.classList.remove("success");
      resultDisplay.innerText = "Captcha Not Matched";
    }
  }

  resultDisplay.style.display = "block";
});

inputField.addEventListener("keyup", () => {
  if (!inputField.value) {
    resultDisplay.style.display = "none";
  }
});
