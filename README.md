# TextCracker

TextCracker is a user-friendly web application designed to analyze text efficiently. It offers various features like dark mode toggling, character and word counting, and much more.

---

## Features

### 1. Dark Mode and Light Mode Toggle
- Switch between dark mode and light mode for a comfortable user experience.

### 2. Sentence Counting
- Calculates the total number of sentences in the provided text.

### 3. Paragraph Counting
- Counts the number of paragraphs by detecting breaks in the text.

### 4. Character Counting
- Displays the number of characters:
  - **With whitespace**: Includes all spaces, tabs, and line breaks.
  - **Without whitespace**: Ignores all spaces, tabs, and line breaks.

---

## Usage

1. Enter the text you want to analyze in the input box.
2. Use the "Analyze" button to view results.
3. Toggle between light and dark mode using the provided toggle button for better accessibility.

---

## How It Works

- Text input is processed using JavaScript to split and count sentences, paragraphs, and characters.
- LocalStorage is used to transfer text data between pages.
- Styling is dynamically manipulated to allow dark and light mode switching.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/textcracker.git
   ```
2. Open `index.html` in any web browser.