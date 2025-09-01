// hard counter section js 
let counter = 0;
const hardCound = document.getElementById("hard-count");
const hardBnt = document.getElementById("hard-btn").addEventListener('click',function(){
    counter +=1;
    hardCound.innerText = counter
})

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