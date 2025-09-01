// hard counter section js 
let total = 0;
function hardCounter(){
    total++;
    document.getElementById("totalCount").innerText =  total;
}
document.getElementById("hard-btn").addEventListener("click", hardCounter)
document.getElementById("hard-btn-2").addEventListener("click",hardCounter)
document.getElementById("hard-btn-3").addEventListener("click",hardCounter)



// const hardCound = document.getElementById("hard-count");
// const hardBnt = document.getElementById("hard-btn").addEventListener('click',function(){
//     counter +=1;
//     hardCound.innerText = counter
// })

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
let coins = 100;

document.getElementById("call1").onclick = () => 
    makeCall("National Emergency Number", document.getElementsByClassName("num1")[0].innerText);

document.getElementById("call2").onclick = () => 
    makeCall("National Emergency Number", document.getElementsByClassName("num2")[0].innerText);

document.getElementById("call3").onclick = () => 
    makeCall("National Emergency Number", document.getElementsByClassName("num3")[0].innerText);

function makeCall(serviceNmae, serviceNumber){
    if(coins < 20){
        alert("");
        return;
    }

    coins -= 20;
    document.getElementById("coinCounter").innerText = coins;
    alert(` Call to "${serviceNmae}" successful! -20 coins`);

    const historyList = document.getElementById("historyList");
    const items = document.createElement("div");
    items.className = "flex justify-center p-3 rounded-xl  font-semibold bg-gray-200 my-2";
    items.textContent = `${serviceNmae} (${serviceNumber}) - ${new Date().toLocaleTimeString()}`;
    historyList.prepend(items);
}

function clearHistory(){
    document.getElementById("historyList").innerText = "";
}