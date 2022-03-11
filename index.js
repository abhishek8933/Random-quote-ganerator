const quoteText=document.querySelector(".quote"),
quoteBtn=document.querySelector("button"),
SoundBtn=document.querySelector(".sound"),
CopyBtn=document.querySelector(".copy"),
FBBtn=document.querySelector(".facebook");


function randomQuote() {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText="Loading Text.."
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        quoteText.innerText=result.content;
        document.querySelector(".name").innerText=result.author;
        quoteBtn.innerText="New Quotes";
        quoteBtn.classList.remove("loading");
    });
}
SoundBtn.addEventListener("click", ()=> {
    // // let me=quoteText.innerText;
    // let utterence =new SpeechSynthesisUtterance('hello world');
    // window.SpeechSynthesis.speak(utterence);
    var msg = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    window.speechSynthesis.speak(msg);
})
CopyBtn.addEventListener("click",function () {
    navigator.clipboard.writeText(quoteText.innerText);
})
FBBtn.addEventListener("click",function(){
    let url="https://www.facebook.com/profile.php?id=100053705239163?url=${quoteText.innerText}"
    window.open(url,"_blank");
})
quoteBtn.addEventListener("click",randomQuote);