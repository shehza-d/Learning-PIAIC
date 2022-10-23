//Efficient Rock,Paper,Scissors Game Code
// import promptSync from "prompt-sync";

//                1        2           3
const choices = ["Rock", "Paper", "Scissors"];
const userNum = Number(prompt("Enter 1 for Rock, 2 for Paper and 3 for Scissors"));

console.log(`Your choice was ${choices[userNum - 1]}`);

const random = Math.floor(Math.random() * 3) + 1;
console.log(`Computer's choice was ${choices[random - 1]}`);


if (userNum === random) {
  console.log(`Draw`);
} else if (userNum === 1 && random === 2) {
  console.log("You lose!!");
} else if (userNum === 1 && random === 3) {
  console.log("You winn!!");
} else if (userNum === 2 && random === 1) {
  console.log("You Lose!!");
} else if (userNum === 2 && random === 3) {
  console.log("You winn!!");
} else if (userNum === 3 && random === 1) {
  console.log("You Lose!!");
} else if (userNum === 3 && random === 2) {
  console.log("You winn!!");
} else {
  console.log(`error`);
}
