var hamburger = document.querySelector(".harke1");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function () {
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});


// ---------------- Quote Generator----------------//

const quoteText = document.querySelector(".wrapper .quote"),
authorName = document.querySelector(".author .name"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
quoteBtn = document.querySelector(".wrapper button");

function randomQuote(){
    quoteBtn.classList.add("Loading");
    quoteBtn.innerText = "Loading...";
    // console.log("clicked");
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result =>{
        // console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText =  result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("Loading");
    });
}

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance('${quoteText.innerText} by ${authorName.innerText}');
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = 'https://twitter.com/intent/tweet?url=${quoteText.innerText}';
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click",randomQuote);

// --------------- *Quote Generator*---------------//
