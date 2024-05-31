const d = document,
  w = window;

const colores = [
  ["#FF5733", "#33FF57"],
  ["#5733FF", "#FF33A1"],
  ["#33FFA1", "#A133FF"],
  ["#FFBD33", "#33FFBD"],
  ["#BD33FF", "#FF3333"],
  ["#33FF33", "#3333FF"],
  ["#FFA133", "#A1FF33"],
  ["#33A1FF", "#FF33BD"],
  ["#A1BD33", "#BDFF33"],
  ["#3357FF", "#5733BD"],
  ["#FF57A1", "#57FF33"],
  ["#A13357", "#33FFBD"],
  ["#BD33A1", "#FFA1BD"],
  ["#57FFA1", "#A1BDFF"],
  ["#33A1BD", "#FF5733"],
  ["#33FF57", "#5733FF"],
  ["#FF33A1", "#33FFA1"],
  ["#A133FF", "#FFBD33"],
  ["#33FFBD", "#BD33FF"],
  ["#FF3333", "#33FF33"],
  ["#3333FF", "#FFA133"],
  ["#A1FF33", "#33A1FF"],
  ["#FF33BD", "#33FFBD"],
  ["#BD33FF", "#FF5733"],
  ["#33FF57", "#5733FF"],
  ["#FF33A1", "#33FFA1"],
  ["#A133FF", "#FFBD33"],
  ["#33FFBD", "#BD33FF"],
  ["#FF3333", "#33FF33"],
  ["#3333FF", "#FFA133"],
  ["#A1FF33", "#33A1FF"],
  ["#FF33BD", "#33FFBD"],
  ["#BD33FF", "#FF5733"],
  ["#33FF57", "#5733FF"],
  ["#FF33A1", "#33FFA1"],
  ["#A133FF", "#FFBD33"],
  ["#33FFBD", "#BD33FF"],
  ["#FF3333", "#33FF33"],
  ["#3333FF", "#FFA133"],
  ["#A1FF33", "#33A1FF"],
  ["#FF33BD", "#33FFBD"],
];

d.addEventListener("click", (e) => {
  if (e.target.matches(".circle")) {
    bolitas("particle-circle", ".container-1", e.target);
  }
  if (e.target.matches(".cuadrado")) {
    bolitas("particle-cuadrado", ".container-2", e.target);
  }
  if (e.target.matches(".rombo")) {
    bolitas("particle-rombo", ".container-3", e.target);
  }
  if (e.target.matches(".octagon")) {
    bolitas("particle-octagon", ".container-4", e.target);
  }
});

function bolitas(tipoDeForma, nContainer, eTarget) {
  for (let i = 0; i < 50; i++) {
    let particle = d.createElement("i");
    particle.classList.add("particle", tipoDeForma);

    let randomX = (Math.random() - 0.5) * w.innerWidth,
      randomY = (Math.random() - 0.5) * w.innerHeight,
      duration = Math.random() * 3 + 2,
      randomSize = Math.random() * 65 + 10;

    // Usar el operador módulo para asegurarse de que i esté dentro de los límites de colores
    let colorIndex = i % colores.length;

    particle.style.setProperty("--x", randomX + "px");
    particle.style.setProperty("--y", randomY + "px");
    particle.style.setProperty(
      "background-image",
      `linear-gradient(-45deg, ${colores[colorIndex][0]}, ${colores[colorIndex][1]})`
    );

    let targetColorIndex = Math.floor(Math.random() * colores.length);

    eTarget.style.setProperty(
      "background-image",
      `linear-gradient(-45deg, ${colores[targetColorIndex][0]}, ${colores[targetColorIndex][1]})`
    );
    particle.style.width = randomSize + "px";
    particle.style.height = randomSize + "px";
    particle.style.animation = `animate ${duration}s ease both`;

    d.querySelector(nContainer).appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 4000);
  }
}
