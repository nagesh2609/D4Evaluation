// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",myfunction)

ArrTeams=JSON.parse(localStorage.getItem("schedule")) || [];

function myfunction()
{
    event.preventDefault();
    teamObj={
        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value, 
    }
    
    ArrTeams.push(teamObj)
    localStorage.setItem("schedule",JSON.stringify(ArrTeams))
    window.location.href="matche
    
}