
const garden = document.getElementById("garden");

const flowers = [
  {
    left: "14%", size: "120px", height: "285px",
    ground: "80px", delay: ".2s", sway: "4.4s", petals: 10
  },
  {
    left: "30%", size: "86px", height: "230px",
    ground: "48px", delay: ".6s", sway: "3.8s", petals: 9
  },
  {
    left: "47%", size: "132px", height: "330px",
    ground: "0px", delay: ".1s", sway: "4.8s", petals: 11
  },
  {
    left: "65%", size: "94px", height: "240px",
    ground: "52px", delay: ".8s", sway: "4.1s", petals: 9
  },
  {
    left: "82%", size: "115px", height: "300px",
    ground: "4px", delay: ".4s", sway: "5s", petals: 10
  }
];

function createFlower(config) {
  const flower = document.createElement("div");
  flower.className = "flower";

  flower.style.setProperty("--left", config.left);
  flower.style.setProperty("--size", config.size);
  flower.style.setProperty("--height", config.height);
  flower.style.setProperty("--ground", config.ground);
  flower.style.setProperty("--delay", config.delay);
  flower.style.setProperty("--sway", config.sway);

  const stem = document.createElement("div");
  stem.className = "stem";
  flower.appendChild(stem);

  [24, 39, 54, 67].forEach((position) => {
    const leftLeaf = document.createElement("span");
    leftLeaf.className = "leaf left";
    leftLeaf.style.setProperty("--bottom", `${position}%`);
    flower.appendChild(leftLeaf);

    const rightLeaf = document.createElement("span");
    rightLeaf.className = "leaf right";
    rightLeaf.style.setProperty("--bottom", `${position + 6}%`);
    flower.appendChild(rightLeaf);
  });

  const bloom = document.createElement("div");
  bloom.className = "bloom";

  for (let i = 0; i < config.petals; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";

    petal.style.transform =
      `translate(-50%, -90%) rotate(${(360 / config.petals) * i}deg)`;

    bloom.appendChild(petal);
  }

  const center = document.createElement("span");
  center.className = "center";
  bloom.appendChild(center);

  flower.appendChild(bloom);
  return flower;
}

flowers.forEach((config) => {
  garden.appendChild(createFlower(config));
});
