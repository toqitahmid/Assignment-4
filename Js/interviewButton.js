const interviewButtons = document.querySelectorAll(".interview-btn");

interviewButtons.forEach(function(button){
    button.addEventListener("click", function(){

        const interviewCard = button.closest(".job-card");
        const interviewTab = document.getElementById("interview-section");

        interviewCard.classList.add("interview-card");
        interviewTab.appendChild(interviewCard);
        interviewFiltering();
        totalInterviewCards();
        totalRejectedCards();
        setInterviewButton(interviewCard);
    })
})