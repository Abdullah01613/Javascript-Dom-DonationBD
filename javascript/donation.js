const donateNowButton = document.getElementById("donateNowButton");
donateNowButton.addEventListener("click", function(){
    const floodNoakhali = parseFloat(document.getElementById("floodNoakhali").value);
    if (floodNoakhali < 0 ) {
        alert("Opps give a positive Number");
    }
    const coinNoakhali = document.getElementById("coinNoakhali");
    coinNoakhali.innerText = floodNoakhali.toFixed(2);
});


const donateNowBtnFeni = document.getElementById("donateNowBtnFeni");
donateNowBtnFeni.addEventListener("click", function(){
    const floodFeni = parseFloat(document.getElementById("floodFeni").value);
    if (floodFeni < 0 ) {
        alert("Opps give a positive Number");
    }
    const coinFeni = document.getElementById("coinFeni");
    coinFeni.innerText = floodFeni.toFixed(2);
});


const donateNowInjured = document.getElementById("donateNowInjured");
donateNowInjured.addEventListener("click", function(){
    const Injured = parseFloat(document.getElementById("Injured").value);
    if (Injured < 0 ) {
        alert("Opps give a positive Number");
    }
    const coinInjured = document.getElementById("coinInjured");
    coinInjured.innerText = Injured.toFixed(2);
});

// buton function

const historyButton = document.getElementById("history-btn");
const donateButton = document.getElementById("donate-btn");
historyButton.addEventListener ('click', function() {
    historyButton.classList.add("bg-yellow-500")
    donateButton.classList.remove("bg-yellow-500")
    document.getElementById("card-section").classList.add("hidden")
})



