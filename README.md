# Dynamic Daily Greeting Board

## 📌 About The Project
This is a lightweight, dynamic web application built entirely with Vanilla JavaScript. The project automatically detects the user's local time and dynamically updates the page's theme, greeting message, and visuals. It also features a random motivational quote generator and a daily focus list. 

The primary goal of this project is to practice and demonstrate foundational **DOM Manipulation** techniques, with a specific focus on CSS class management, attribute manipulation, and dynamic styling.

## 🚀 Features
- **Time-Based Theme:** Automatically applies a "Morning" or "Night" CSS class depending on the current hour.
- **Dynamic Greetings:** Changes the `<h1>` text to "Good Morning", "Good Afternoon", "Good Evening", or "Good Night" based on specific time conditions.
- **Dynamic Image Swapping:** Updates the `<img>` `src` and `alt` attributes based on the active theme (Sun or Moon).
- **Random Quote Generator:** Selects a random quote from an array, converts it to uppercase, and dynamically shrinks its `font-size` if it exceeds a certain character length.
- **Focus List Generator:** Uses a `for` loop to inject `<li>` elements into an unordered list via `innerHTML`.

## 🧠 JavaScript Concepts Applied
This project was built strictly using the following core JavaScript concepts:
- Variables, Data Types, and Arrays
- `If / Else If / Else` Conditionals
- `For` and `ForEach` Loops
- `Math` (random, floor) and `Date` (getHours) Objects
- **DOM Selectors:** `getElementById`, `querySelector`
- **DOM Content Manipulation:** `textContent`, `innerHTML`
- **DOM Style Properties:** `element.style.fontFamily`, `element.style.fontSize`
- **DOM Attributes:** `getAttribute()`, `setAttribute()`
- **DOM Class Manipulation:** `classList.add()` *(Latest learning focus)*

## 🛠️ Built With
* HTML5
* CSS3
* Vanilla JavaScript

## 💻 How to Run
1. Clone this repository to your local machine.
2. Open the `index.html` file in any modern web browser.
3. The application will automatically run based on your system's local time. No local server setup is required!
