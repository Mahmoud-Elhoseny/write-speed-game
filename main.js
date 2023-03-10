const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

let lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
}


let defaultLvlName = "Normal";
let defaultLvlSeconds = lvls[defaultLvlName]


let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");



lvlNameSpan.innerHTML = defaultLvlName
secondsSpan.innerHTML = defaultLvlSeconds
timeLeftSpan.innerHTML = defaultLvlSeconds
scoreTotal.innerHTML = words.length


input.onpaste = function () {
    return false
}


startButton.onclick = function () {
    this.remove()
    input.focus()
    genWords()


}

function genWords() {


    let randomWord = words[Math.floor(Math.random() * words.length)]


    let WordIndex = words.indexOf(randomWord)

    words.splice(WordIndex, 1)


    theWord.innerHTML = randomWord

    upcomingWords.innerHTML = ""


    for (let i = 0; i < words.length; i++) {

        let div = document.createElement("div")

        let txt = document.createTextNode(words[i])

        div.appendChild(txt)

        upcomingWords.appendChild(div)
    }

    startPlay()


}


function startPlay() {
timeLeftSpan.innerHTML = defaultLvlSeconds
let start = setInterval(() => {
    timeLeftSpan.innerHTML--
    if (timeLeftSpan.innerHTML === "0") {
        clearInterval(start)

        if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {

            input.value = ""

            scoreGot.innerHTML++

            if (words.length > 0) {
                genWords()
            }else{
                let span = document.createElement("span")
                span.className = "good"
                let spanTxt = document.createTextNode("You Are Perfect")
                span.appendChild(spanTxt)
    
                finishMessage.appendChild(span)
                upcomingWords.remove()
            }
        }else{
            let span = document.createElement("span")
            span.className = "bad"
            let spanTxt = document.createTextNode("Game Over")
            span.appendChild(spanTxt)

            finishMessage.appendChild(span)
        }

    }
}, 1000);
















































}



