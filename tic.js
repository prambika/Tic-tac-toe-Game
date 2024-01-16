let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");

let chance0 = true;

const winC = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetbtn = () => {
  chance0 = true;
  enableBoxes();
  container.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (chance0) {
      box.innerText = "O";
      chance0 = false;
    } else {
      box.innerText = "X";
      chance0 = true;
    }

    box.disabled = true;
    winCheck();
  });
});
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const shoWinner = (winner) => {
  msg.innerText = `Congratulations, ${winner} you won`;
  container.classList.remove("hide");
};
const winCheck = () => {
  for (pat of winC) {
    let pos1 = boxes[pat[0]].innerText;
    let pos2 = boxes[pat[1]].innerText;
    let pos3 = boxes[pat[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        boxes.forEach((button) => {
          button.disabled = true;
          shoWinner(pos1);
        });
      }
    }
  }
};
newBtn.addEventListener("click", resetbtn);
btn.addEventListener("click", resetbtn);
