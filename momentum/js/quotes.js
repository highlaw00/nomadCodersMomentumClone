const quotes = [
  {
    quotes: "A book must be the axe for the frozen sea within us.",
    author: "Franz Kafka",
  },
  {
    quotes: "Without music, life would be a mistake.",

    author: "Friedrich Nietzsche",
  },
  {
    quotes:
      "We cannot solve our problems with the same thinking we used when we created them.",

    author: "Albert Einstein",
  },
  {
    quotes: "I have no special talent. I am only passionately curious.",

    author: "Albert Einstein",
  },
  {
    quotes: "Whatever you are, be a good one.",

    author: "Abraham Lincoln",
  },
  {
    quotes:
      "My Best Friend is a person who will give me a book I have not read.",

    author: "Abraham Lincoln",
  },
  {
    quotes: "Veni, vidi, vici.",
    author: "Julius Caesar",
  },
  {
    quotes: "Experience is the teacher of all things.",

    author: "Julius Caesar",
  },
  {
    quotes: "Divide and Conquer.",

    author: "Julius Caesar",
  },
  {
    quotes: "The dice is cast.",

    author: "Julius Caesar",
  },
  {
    quotes: "Boys, be ambitious!",
    author: "William Smith Clark",
  },
  {
    quotes: "Old soldiers never die, they just fade away.",
    author: "Douglas MacArthur",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const QUOTES_LENGTH = quotes.length;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const currentRandomInt = getRandomInt(0, QUOTES_LENGTH);
const currentRandomQuote = quotes[currentRandomInt]["quotes"];
const currentRandomAuthor = quotes[currentRandomInt]["author"];

quote.innerText = currentRandomQuote + "\n";
author.innerText = currentRandomAuthor;
