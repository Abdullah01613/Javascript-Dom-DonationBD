const donateNowButton = document.getElementById("donateNowButton");
donateNowButton.addEventListener("click", function(){
    const floodNoakhali = parseFloat(document.getElementById("floodNoakhali").value);
    if (floodNoakhali < 0 ) {
        alert("Opps give a positive Number");
    }
    const coinNoakhali = document.getElementById("coinNoakhali");
    coinNoakhali.innerText = floodNoakhali.toFixed(2);
    
 
    history = document.createElement("div")
    history.innerText = 
    `

    ${floodNoakhali.toFixed(2)} BDT you donate for Noakhali Flood;
    ${new Date()}



    `;

 const historySection = document.getElementById("history-section");
 historySection.append(history.innerText)
});


const donateNowBtnFeni = document.getElementById("donateNowBtnFeni");
donateNowBtnFeni.addEventListener("click", function(){
    const floodFeni = parseFloat(document.getElementById("floodFeni").value);
    if (floodFeni < 0 ) {
        alert("Opps give a positive Number");
    }
    const coinFeni = document.getElementById("coinFeni");
    coinFeni.innerText = floodFeni.toFixed(2);

    history = document.createElement("div")
    history.innerText = 
    `

    ${floodFeni.toFixed(2)} BDT you donate for Feni Flood;
    ${new Date()}



    `;

 const historySection = document.getElementById("history-section");
 historySection.append(history.innerText)
});


const donateNowInjured = document.getElementById("donateNowInjured");
donateNowInjured.addEventListener("click", function(){
    const Injured = parseFloat(document.getElementById("Injured").value);
    if (Injured < 0 ) {
        alert("Opps give a positive Number");
    }
    const coinInjured = document.getElementById("coinInjured");
    coinInjured.innerText = Injured.toFixed(2);

    history = document.createElement("div")
    history.innerText = 
    `

    ${Injured.toFixed(2)} BDT you donate for Injured in the Quota Movement;
    ${new Date()}



    `;

 const historySection = document.getElementById("history-section");
 historySection.append(history.innerText)
});

// button function

const historyButton = document.getElementById("history-btn");
const donateButton = document.getElementById("donate-btn");
historyButton.addEventListener ('click', function() {
    historyButton.classList.add("bg-yellow-500")
    donateButton.classList.remove("bg-yellow-500")
    document.getElementById("card-section").classList.add("hidden")
    document.getElementById("history-section").classList.remove("hidden")
})



