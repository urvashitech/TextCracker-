let charWith = document.getElementById('charW');
let chars = document.querySelector('#char');
let sentences = document.getElementById('sentence');
let paras = document.getElementById('para');

// Get text from localStorage or default to an empty string
const useText = localStorage.getItem('input') || '';
let data = useText.trim(); // Ensure text is trimmed

console.log(`User input is: ${useText}`);

let newChars = data.replace(/\s+/g, '').length; // Characters without whitespace
let newCharWith = data.length; // Characters including whitespace

function countPara(text) {
    return text
        .split(/\n{2,}/) // Split on two or more newlines
        .filter(para => para.trim() !== "") // Filter out empty paragraphs
        .length;
}

function countSentence(text) {
    return text
        .split(/[.!?]\s+/) // Split on sentence terminators followed by space
        .filter(sentence => sentence.trim() !== "") // Filter out empty sentences
        .length;
}

// Update HTML content
paras.innerHTML = `Number of paragraphs in the given text: ${countPara(data)}`;
sentences.innerHTML = `Number of sentences in the given text: ${countSentence(data)}`;
chars.innerHTML = `Number of characters (without whitespace) in the given text: ${newChars}`;
charWith.innerHTML = `Number of characters (with whitespace) in the given text: ${newCharWith}`;
