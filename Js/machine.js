const totalState = document.getElementById("total-state");
const totalTab = document.getElementById("all-jobs");
totalState.innerText = totalTab.children.length;

function setInterviewButton(card) {
  const parentApplied = card.querySelector(".applied");
  parentApplied.innerHTML = "";
  const appliedButton = document.createElement("button");
  appliedButton.innerText = "INTERVIEWD";
  appliedButton.className = "btn btn-outline w-30";

  parentApplied.appendChild(appliedButton);
}
function setRejectButton(card) {
  const parentApplied = card.querySelector(".applied");
  parentApplied.innerHTML = "";
  const appliedButton = document.createElement("button");
  appliedButton.innerText = "RIJECTED";
  appliedButton.className = "btn btn-outline w-30";

  parentApplied.appendChild(appliedButton);
}

function totalInterviewCards() {
  const interviewCards = document.getElementById("interview-section");
  const totalInterviewTabs = document.getElementById("interview-state");

  totalInterviewTabs.innerText = interviewCards.children.length - 1;
}

function totalRejectedCards() {
  const rejectedCards = document.getElementById("rejected-section");
  const totalRejectedTabs = document.getElementById("rejected-state");

  totalRejectedTabs.innerText = rejectedCards.children.length - 1;
}

function countAllJobTabs(id) {
  const variableNumber = document.getElementById("variable-no");
  const selected = document.querySelectorAll(`#${id} .job-card`);

  variableNumber.innerText = selected.length;
}
function countInterviewTabs(id) {
  const variableNumber = document.getElementById("variable-no");
  const selected = document.querySelectorAll(`#${id} .interview-card`);

  variableNumber.innerText = selected.length;
}
function countRjectedTabs(id) {
  const variableNumber = document.getElementById("variable-no");
  const selected = document.querySelectorAll(`#${id} .rejected-card`);

  variableNumber.innerText = selected.length;
}
