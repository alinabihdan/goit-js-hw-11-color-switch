// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];
const gradients = [
  "linear-gradient(#58b6b9, #edf1cf)",
  "linear-gradient(to right, #94525c, #14aad7, cyan)",
  "radial-gradient(#edf1cf, #43acb4)",
  "radial-gradient(circle at top left, #e1d767, #d3f6da)",
  "linear-gradient(45deg, #fff1eb, #ace0f9)",
  "linear-gradient(45deg, #f5f7fa, #c3cfe2)",
  "linear-gradient(#c6e4ee 0%, #c6e4ee 40%, #fed1ae 60%, #faa0b9 70%, #cb7dcb 80%, #757ecb 100%)",
  "linear-gradient(45deg, #F17C58, #E94584, #24AADB, #27DBB1, #FFDC18, #FF3706)",
  "linear-gradient(3deg, #e6d16c, #16014c)",
  "linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)",
  "linear-gradient(85deg, #fb63f9, #c2e534)",
  "linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3)",
];

let intervalId = null;

const refs = {
  startBtn: document.querySelector(".start"),
  stopBtn: document.querySelector(".stop"),
  body: document.querySelector("body"),
};

refs.stopBtn.disabled = true;

refs.startBtn.addEventListener("click", colorSwitchHandler);
refs.stopBtn.addEventListener("click", stopColorSwitch);

function colorSwitchHandler() {
  intervalId = setInterval(() => {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    refs.body.style.background =
      gradients[randomIntegerFromInterval(0, gradients.length - 1)];
  }, 1000);
}

function stopColorSwitch() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
