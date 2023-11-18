import Typed from "typed.js";
import confetti from "canvas-confetti";

const typed = new Typed("#element", {
  strings: [
    "Civil Engineer.",
    "3D Artist.",
    "Self-Taught Programmer.",
    "Photographer.",
  ],
  typeSpeed: 50,
  loop: true,
});

const typedOne = new Typed("#element1", {
  strings: [
    "Need More Information?",
    "Have a Question?",
    "Need Collaboration?",
    "Need Help?",
  ],
  typeSpeed: 80,
  loop: true,
});

const confettiBtn = document.getElementById("confetbtn");
confettiBtn.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = -1;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });

  myConfetti({
    particleCount: 200,
    spread: 200,
  });
});
