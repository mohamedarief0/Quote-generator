
  let quote = document.getElementById('quote');
  let author = document.getElementById('author');

function fetchQuots(){
  
  let randomNum = Math.floor(Math.random()*1640);
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      // console.log(data[randomNum].text);

      quote.innerText =  data[randomNum].text;
      author.innerText =  data[randomNum].author;
      // document.body.style.backgroundColor = '#'+Math.floor(Math.random()*11111).toString(16);
      

      // document.getElementById('quote').innerText = data[randomNum].text;
      // document.getElementById('author').innerText = data[randomNum].author;
  
    });
}
