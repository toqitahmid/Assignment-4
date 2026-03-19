function switchTab(id){
    
    const allTab = document.getElementById("all-jobs");
    const interviewTab = document.getElementById("interview-section");
    const rejectedTab = document.getElementById("rejected-section");
    
    allTab.classList.add("hidden");
    interviewTab.classList.add("hidden");
    rejectedTab.classList.add("hidden");
    
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}
