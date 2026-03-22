let noBtnClicks = 1;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("click", () => {
  noBtnClicks++;
  yesBtn.style.transform = `scale(${noBtnClicks})`;

  if (noBtnClicks > 4) {
    noBtn.style.borderWidth = `10px`;
    noBtn.style.borderStyle = `solid`;
    noBtn.style.borderColor = `black`;
  }

  let audio = document.getElementById("myAudio");
  audio.play();
});