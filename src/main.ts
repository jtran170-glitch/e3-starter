const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A tired face");

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
const gradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);
gradient.setAttribute("id", "tired-gradient");
gradient.setAttribute("x1", "0%");
gradient.setAttribute("y1", "0%");
gradient.setAttribute("x2", "0%");
gradient.setAttribute("y2", "100%");

const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute("offset", "0%");
stop1.setAttribute("stop-color", "white");
const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute("offset", "100%");
stop2.setAttribute("stop-color", "red");
gradient.append(stop1, stop2);
defs.append(gradient);
face.append(defs);

const leftEye = document.createElementNS("http://www.w3.org/2000/svg", "path");
leftEye.setAttribute("d", "M 60 90 Q 70 100 80 80 Z");
leftEye.setAttribute("fill", "url(#tired-gradient)");
leftEye.setAttribute("stroke", "#000000");
leftEye.setAttribute("stroke-width", "1");
face.append(leftEye);

const rightEye = document.createElementNS("http://www.w3.org/2000/svg", "path");
rightEye.setAttribute("d", "M 140 90 Q 130 100 120 80 Z");
rightEye.setAttribute("fill", "url(#tired-gradient)");
rightEye.setAttribute("stroke", "#000000");
rightEye.setAttribute("stroke-width", "1");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
