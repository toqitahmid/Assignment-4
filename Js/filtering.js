function interviewFiltering() {
    const cards = document.querySelectorAll("#interview-section .interview-card");
    const interviewJob = document.getElementById("interview-job");

  if (cards.length > 0) {
    interviewJob.classList.add("hidden");
    
    const selected = document.getElementsByClassName("interview-card");
    
    for(let card of selected){
        card.classList.remove("hidden");
    }
} 
}
function rejecteFiltering() {
    const cards = document.querySelectorAll("#rejected-section .interview-card");
    const rejectJob = document.getElementById("rejected-job");

  if (cards.length > 0) {
    rejectJob.classList.add("hidden");
    
    const selected = document.getElementsByClassName("interview-card");
    
    for(let card of selected){
        card.classList.remove("hidden");
    }
} 
}
