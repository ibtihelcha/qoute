const newQuotebutton = document.getElementById("new-quote");
const quoteText=document.getElementById("text");
const quoteauthor=document.getElementById("author");
const quotetwitter=document.getElementById("tweet-quote");
const quotetwi=document.getElementById("tumblr-quote");
const quotecote=document.getElementsByClassName("fa-quote-left")[0];
async function getQuote(){

    const  response=await (await fetch ("https://api.quotable.io/random")).json();
    const{content, author}= response;

    quoteText.style.opacity=0;
    quoteauthor.style.opacity=0;
    const color =`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    document.body.style.backgroundColor=color;
    quoteauthor.style.color=color;
    quoteText.style.color=color
    setTimeout(function opacity(){
        quoteText.textContent=content;
        quoteauthor.textContent=author;
        quoteText.style.opacity=1;
        quoteauthor.style.opacity=1;
    },500)

    newQuotebutton.style.backgroundColor=color;
    quotetwitter.style.backgroundColor=color;
    quotetwi.style.backgroundColor=color;
    quotecote.style.color=color;
	document.getElementById(
		"tweet-quote"
	).href = `https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
		content
	)}"${encodeURIComponent(" " + author)}`;
	document.getElementById(
		"tumblr-quote"
	).href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
		author
	)}&content=${encodeURIComponent(
		content
	)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
	// });
};

    


getQuote();


newQuotebutton.addEventListener("click", getQuote);
