// write js code here corresponding to favourites.html
favData = JSON.parse(localStorage.getItem("favourites"));

favData.forEach(function (elem , index) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.matchNum;

    var td2 = document.createElement("td");
    td2.innerText = elem.teamA;

    var td3 = document.createElement("td")
    td3.innerText = elem.teamB;

    var td4 = document.createElement("td")
    td4.innerText = elem.date;

    var td5 = document.createElement("td")
    td5.innerText = elem.venue;

    var td6 = document.createElement("td")
    td6.innerText = "Delete";
    td6.style.color = "blue";
    td6.style.cursor = "pointer"
    // td6.setAttribute("class","deletText");
    td6.addEventListener("click",function()
    {
        delFav(elem ,index);
    });

    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr);

});

function delFav(elem ,index){

    favData.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(favData));
    window.location.reload();

}