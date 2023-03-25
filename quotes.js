// 명언 랜덤 생성
const quotes = [
    {
        quote: "You will face many defeats in life, but never let yourself be defeated. ",
        author : "Maya Angelou"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author : "Abraham Lincoln"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author : "Babe Ruth"
    },
    {
        quote: " Life is either a daring adventure or nothing at all.",
        author : "Helen Keller"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author : "Thomas A. Edison"
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. ",
        author : "Dr. Seuss"
    },
    {
        quote: "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
        author : "Rosa Parks"
    },
    {
        quote: "Being happy never goes out of style. ",
        author : "Lilly Pulitzer"
    },
    {
        quote: " Life is either a great adventure or nothing",
        author : "Helen Keller"
    }   
];


const quote = document.querySelector("#quotes span:nth-child(1)");
const author = document.querySelector("#quotes span:nth-child(2)");

const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = TodaysQuote.quote;    
author.innerText = TodaysQuote.author;

//math.random() - 랜덤숫자 얻기. 그런데 이것은 소수점 float 값을 얻음

//Math.round(1.1) - 하면 1이나옴 -> 앞에 정수값만을 얻을수 있음.

//Math.ceil() - 천장을 높여준다는 말로 () 안에 1.1 넣으면 2 이되고 , 1.9 해도 2가 됌

//Math.floor() - ceil의 반대로 1.1을 넣으면 1 , 1.9 넣으면 1이 됌

// quotes