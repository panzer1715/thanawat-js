const studentA = {
  name: "A",
  score: 100
};

//const name = studentA.name;
//const score = studentA.score;

//const { name, score } = studentA;
const { name, score: myscore } = studentA;

console.log(`${name} : ${myscore}`);
//console.log(`${name} : ${myScore}`);
