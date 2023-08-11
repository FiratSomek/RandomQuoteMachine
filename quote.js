let quotes = [
  {
    quote: "The meaning of life is to give life meaning.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "The secret of success is never giving up on your dreams.",
    author: "Thomas Edison",
  },
  {
    quote: "A person's worth is measured by the value they give to others.",
    author: "Albert Einstein",
  },
  {
    quote: "Tomorrow is determined by what we think today.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Great achievements are obtained by pursuing great dreams.",
    author: "Muhammad Ali",
  },
  {
    quote: "The key to success is continuous effort and never giving up.",
    author: "Napoleon Hill",
  },
  {
    quote: "You can't change the past, but you can influence the future.",
    author: "Unknown",
  },
  {
    quote: "You can do more than you think you can.",
    author: "Bill Gates",
  },
  {
    quote: "The most important thing in life is the skill of survival.",
    author: "Leonardo DiCaprio",
  },
  {
    quote: "The biggest obstacle in life is beyond our own fears.",
    author: "Franklin D. Roosevelt",
  },
];

let colors = [
  "#e833c6",
  "#3bc9ed",
  "#2eea4e",
  "#f2794d",
  "#97f767",
  "#47f7f1",
  "#0439f7",
  "#0f963c",
  "#ff81ff",
  "#ccff00",
  "#ff0000",
];

window.onload = function () {
  getRandomQuote();
  getRandomColor();
};

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  let randomQuoteOne = quotes[randomQuote];

  document.getElementById("text").innerText = randomQuoteOne.quote;
  document.getElementById("author").innerText = randomQuoteOne.author;
}

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  let randomColorOne = colors[randomColor];

  document.body.style.backgroundColor = randomColorOne;
  document.body.style.color = randomColorOne;
  document.getElementById("new-quote").style.backgroundColor = randomColorOne;
  document.getElementById("tweet-quote").style.backgroundColor = randomColorOne;

  document.getElementById("new-quote").addEventListener("click", function () {
    getRandomQuote();
    getRandomColor();
  });
}
