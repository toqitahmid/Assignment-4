const totalState = document.getElementById("total-state");
const totalTab = document.getElementById("all-jobs");
totalState.innerText = totalTab.children.length;

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
