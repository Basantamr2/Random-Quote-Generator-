var allQuotes=[
    {quote: `“Be yourself; everyone else is already taken.”`,
    writer: `― Oscar Wilde`},
    {quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    writer: `― Marilyn Monroe`},
    {quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    writer: `― Albert Einstein`},
    {quote: `“So many books, so little time.”`,
    writer: `― Frank Zappa`},
    {quote: `“A room without books is like a body without a soul.”`,
    writer: `― Marcus Tullius Cicero`},
    {quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
    writer: `― Steve Jobs`},
    {quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    writer: `― Mahatma Gandhi`},
    {quote: `“Without music, life would be a mistake.”`,
    writer: `― Friedrich Nietzsche, Twilight of the Idols`},
    {quote: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
    writer: `― Ralph Waldo Emerson`},
    {quote: `“Insanity is doing the same thing, over and over again, but expecting different results.”`,
    writer: `― Narcotics Anonymous`}
];
btn.addEventListener('click',
()=>{randomQuote();});
var index;
function randomQuote(){
    var randomIndex=Math.floor(Math.random() * allQuotes.length);
    if(index !== randomIndex){
    document.getElementById('quote').innerHTML=allQuotes[randomIndex].quote;
    document.getElementById('writer').innerHTML=allQuotes[randomIndex].writer;
    index=randomIndex;
}else{
    randomQuote();
}}