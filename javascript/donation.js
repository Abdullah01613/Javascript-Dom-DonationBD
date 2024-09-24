const donateNowButton = document.getElementById("donateNowButton");
donateNowButton.addEventListener("click", function(){
    const floodNoakhali = parseFloat(document.getElementById("floodNoakhali").value);
    if (floodNoakhali < 0 ) {
        alert("Opps give a positive Number");
    }
    const coinNoakhali = document.getElementById("coinNoakhali");
    coinNoakhali.innerText = floodNoakhali;
});


const donateNowBtnFeni = document.getElementById("donateNowBtnFeni");
donateNowBtnFeni.addEventListener("click", function(){
    const floodFeni = parseFloat(document.getElementById("floodFeni").value);
    if (floodFeni < 0 ) {
        alert("Opps give a positive Number");
    }
    const coinFeni = document.getElementById("coinFeni");
    coinFeni.innerText = floodFeni;
});


const donateNowInjured = document.getElementById("donateNowInjured");
donateNowInjured.addEventListener("click", function(){
    const Injured = parseFloat(document.getElementById("Injured").value);
    if (Injured < 0 ) {
        alert("Opps give a positive Number");
    }
    const coinInjured = document.getElementById("coinInjured");
    coinInjured.innerText = Injured;
});