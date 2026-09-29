let body = document.getElementById("body")
let title = document.querySelector("h1")
let paragraph = document.querySelector("p")
let image = document.querySelector("img")
let ul = document.querySelector("ul")

let currentHour = new Date().getHours()
console.log(currentHour)

body.style.fontFamily = "Arial, Helvetica, sans-serif"

let motivationalQuotes = [
    "Great achievements are born from repeating small steps every day.",
    "Wherever you are, do the best you can with what you have.",
    "You don't have to be perfect to start, but you have to start to be perfect.",
    "Difficulties prepare ordinary people for an extraordinary destiny.",
    "Live not with yesterday's regrets, but with today's gratitude.",
    "Every new day is a blank canvas given to you to improve yourself."
]

let dailyFocusWords = ["Success", "Discipline", "Hard Work"]

function preparePage() {
    if (currentHour >= 6 && currentHour < 18) {
        body.classList.add("morningTheme")
        if (currentHour >= 6 && currentHour < 12) {
            title.textContent = "Good Morning"
        } else {
            title.textContent = "Good Afternoon"
        }
        image.setAttribute("src", "/img/sun.svg")
        image.setAttribute("alt", "Sun")
        console.log(image.getAttribute("alt"))
    } else {
        body.classList.add("nightTheme")
        if (currentHour >= 18 && currentHour < 24) {
            title.textContent = "Good Evening"
        } else {
            title.textContent = "Good Night"
        }
        image.setAttribute("src", "img/moon.svg")
        image.setAttribute("alt", "Moon")
        console.log(image.getAttribute("alt"))
    }

    motivationalQuotes.forEach((quote) => {
        console.log(quote.length)
    })

    let randomNumber = Math.floor(Math.random() * motivationalQuotes.length)
    console.log(randomNumber)

    if (motivationalQuotes[randomNumber].length >= 70) {
        paragraph.textContent = motivationalQuotes[randomNumber].toUpperCase()
        paragraph.style.fontSize = "14px"
    } else {
        paragraph.textContent = motivationalQuotes[randomNumber].toUpperCase()
    }

    for (let i = 0; i < dailyFocusWords.length; i++) {
        ul.innerHTML += `<li>${dailyFocusWords[i]}</li>`
    }
}

preparePage()