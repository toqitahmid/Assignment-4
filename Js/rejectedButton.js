const rejectedButtons = document.querySelectorAll(".rejected-btn");

rejectedButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const card = button.closest(".job-card");
        const rejectedTab = document.getElementById("rejected-section");

        rejectedTab.appendChild(card);
        rejecteFiltering();
        totalRejectedCards()
        totalInterviewCards();

        setRejectButton(card)
    })
})