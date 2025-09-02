// hard counter section js 
let total = 0;
function hardCounter(){
    total++;
    document.getElementById("totalCount").innerText =  total;
}

document.getElementById("hard-btn").addEventListener("click", hardCounter)
document.getElementById("hard-btn-2").addEventListener("click", hardCounter)
document.getElementById("hard-btn-3").addEventListener("click", hardCounter)
document.getElementById("hard-btn-4").addEventListener("click", hardCounter)
document.getElementById("hard-btn-5").addEventListener("click", hardCounter)
document.getElementById("hard-btn-6").addEventListener("click", hardCounter)
document.getElementById("hard-btn-7").addEventListener("click", hardCounter)
document.getElementById("hard-btn-8").addEventListener("click", hardCounter)
document.getElementById("hard-btn-9").addEventListener("click", hardCounter)



// text copy 
let copyCount = 0;
function copyText(textId){
    const textElement = document.getElementById(textId);
    const textCopy = textElement.innerText;

    navigator.clipboard.writeText(textCopy).then(() => {
        copyCount++;
        document.getElementById("copyCounter").innerText =  + copyCount;
        alert(`"${textCopy}" copid from ${textId}`);
    }).catch(err => {
        console.log('Service Copy',err)
    })
}


// call function 
 document.addEventListener("DOMContentLoaded", function() {
    let coins = 100;

    function makeCall(serviceName, serviceNumber) {
        if (coins < 20) {
            alert("Not enough coins");
            return;
        }

        coins -= 20;
        document.getElementById("coinCounter").innerText = coins;
        alert(`Call to "${serviceName}" successful! -20 coins`);

        const historyList = document.getElementById("historyList");
        const item = document.createElement("div");
        item.className = "flex justify-center p-3 rounded-xl font-semibold bg-gray-200 my-2";
        item.textContent = `${serviceName} (${serviceNumber}) - ${new Date().toLocaleTimeString()}`;
        historyList.prepend(item);
    }

    document.getElementById("call1").onclick = () => makeCall("National Emergency Number", document.getElementsByClassName("num1")[0].innerText);
    document.getElementById("call2").onclick = () => makeCall("Police Helpline Number", document.getElementsByClassName("num2")[0].innerText);
    document.getElementById("call3").onclick = () => makeCall("Fire Service Number", document.getElementsByClassName("num3")[0].innerText);
    document.getElementById("call4").onclick = () => makeCall("Ambulance Service", document.getElementsByClassName("num4")[0].innerText);
    document.getElementById("call5").onclick = () => makeCall("Women & Child Helpline", document.getElementsByClassName("num5")[0].innerText);
    document.getElementById("call6").onclick = () => makeCall("Anti-Corruption Helpline", document.getElementsByClassName("num6")[0].innerText);
    document.getElementById("call7").onclick = () => makeCall("Electricity Helpline", document.getElementsByClassName("num7")[0].innerText);
    document.getElementById("call8").onclick = () => makeCall("Brac Helpline", document.getElementsByClassName("num8")[0].innerText);
    document.getElementById("call9").onclick = () => makeCall("Bangladesh Railway Helpline ", document.getElementsByClassName("num9")[0].innerText);


   const clearBtn = document.getElementById("clearHistoryBtn");
    clearBtn.addEventListener("click", function() {
        const historyList = document.getElementById("historyList");
        historyList.innerHTML = "";
    });
});

 

