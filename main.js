let charWith = document.getElementById('charW');
let chars = document.querySelector('.char');

let words = document.getElementById('word');
let paras = document.getElementById('para');
const useText = localStorage.getItem('input')
let data = useText.toString();
console.log(`user input is ${useText}`) 

let newChars = data.trim().length;
chars.innerHTML = `Number of characters(without whitespace) in the given text is :${newChars}`


