const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// @deno-types="./asset-url.d.ts"
import earUrl from "./assets/spr_Ear.png?no-inline"; // made by me using Aseprite
import hatUrl from "./assets/spr_Hat.png?no-inline"; // made by me using Aseprite

function buildFace() {
  // The prototype grew inline. Keep it this way until the refactoring checkpoint.
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute(
    "aria-label",
    "A neutral face with big ears and a small hat",
  );

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "#f3cf87");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  const leftEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftEye.setAttribute("cx", "72");
  leftEye.setAttribute("cy", "82");
  leftEye.setAttribute("rx", "6");
  leftEye.setAttribute("ry", "9");
  leftEye.setAttribute("fill", "#302c29");
  face.append(leftEye);

  const rightEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightEye.setAttribute("cx", "128");
  rightEye.setAttribute("cy", "82");
  rightEye.setAttribute("rx", "6");
  rightEye.setAttribute("ry", "9");
  rightEye.setAttribute("fill", "#302c29");
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

  const leftEar = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  leftEar.setAttribute("href", earUrl);
  leftEar.setAttribute("x", "130");
  leftEar.setAttribute("y", "60");
  leftEar.style.transform = "scaleX(-1)";
  leftEar.style.transformOrigin = "center";
  face.append(leftEar);

  const rightEar = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  rightEar.setAttribute("href", earUrl);
  rightEar.setAttribute("x", "130");
  rightEar.setAttribute("y", "60");
  face.append(rightEar);

  const hat = document.createElementNS("http://www.w3.org/2000/svg", "image");
  hat.setAttribute("href", hatUrl);
  hat.setAttribute("x", "50");
  hat.setAttribute("y", "-40");
  face.append(hat);

  return face;
}

const face = buildFace();
portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
