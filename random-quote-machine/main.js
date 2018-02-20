const quoteField = document.querySelector("blockquote");
const newQuoteButton = document.querySelector("#new");
const tweet = document.querySelector(".twitter")
tweet.href=`https://twitter.com/intent/tweet?text=${quoteField.innerText}&related=juzQrios&hashtags=freeCodeCamp`;

// Make an asyc req when new Quote button is pressed
newQuoteButton.addEventListener('click',asyncReq);

// Async req 
function asyncReq(){
  fetch('https://api.jsonbin.io/b/5a79de457ecc10127332f074',{
    cache : "force-cache",
    headers:{
      'secret-key': '$2a$10$8/P84Es/oqKo5l9iSGM2aOsUTAVUbcTBY4kzhxIdb3MNy7GqsGAuS'
    }
})
.then(res=>res.json())
.then(changeQuote)
.catch(err=>console.log(err));
}

function changeQuote(data){
  // Generate a random number less than fetched quote array length
  var r = Math.floor((Math.random()*data.quotes.length));
  // Update the Blockquote with randomly selected quote from fetched json
  quoteField.innerText = `"${data.quotes[r].quote}"`;
  // Set up tweet - Have to refactor this line of code - it doesn't belong here :p
  tweet.href=`https://twitter.com/intent/tweet?text=${quoteField.innerText}&related=juzQrios&hashtags=freeCodeCamp`;
}
