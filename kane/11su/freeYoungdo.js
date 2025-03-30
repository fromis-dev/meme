const youngdoList = [
  "https://youtu.be/A1TqT1K1n6c",
  "https://youtu.be/an2L7P2y9K0",
  "https://youtu.be/-BaUJTPfuxc",
  "https://youtu.be/SvF-A61hNbE",
  "https://youtu.be/gIyi6HYWLvk",
  "https://youtu.be/7JMElunFinw",
  "https://youtu.be/FcxsSb5sX30",
  "https://youtu.be/XDPte4SAS3A",
  "https://youtu.be/EKcueBz2kuY",
  "https://youtu.be/97f3IeMxt6o",
  "https://youtu.be/YF3Z-Mxze0g",
  "https://youtu.be/92volEdYcCQ",
];

const free = document.querySelector("#freeYoungdo");
free.addEventListener("click", () => {
  const idx = Math.floor(Math.random() * youngdoList.length);
  window.open(youngdoList[idx], "_blank");
});
