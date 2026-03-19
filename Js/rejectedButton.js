const rejectedButtons = document.querySelectorAll(".rejected-btn");

rejectedButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const card = button.parentElement;
        const rejectedTab = document.getElementById("rejected-section");

        rejectedTab.appendChild(card);
        rejecteFiltering();
        totalRejectedCards()
        totalInterviewCards();
    })
})