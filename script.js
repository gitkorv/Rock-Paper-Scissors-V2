// Grab basic variables
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
// Grab panels
let topPanel = document.querySelector(".cube__panel-top");
let backPanel = document.querySelector(".cube__panel-back");
console.log(topPanel);

// Grab buttons
let scissorBtn = document.querySelector(".panel-bottom__btn--scissor");
let rpsBtnsAll = Array.from(document.querySelectorAll(".panel-bottom__btn"));
console.log(rpsBtnsAll);
// Grab text/span in btns
let scissorBtnSpan = scissorBtn.querySelector("span");
const rpsBtnSpansAll = rpsBtnsAll.map(btn => btn.querySelector("span"));

let scissorBtnWidth = scissorBtn.offsetWidth;
console.log(scissorBtnWidth);
let scissorBtnSpanWidth = scissorBtnSpan.getBoundingClientRect().width;
let originalRPSButtonSizeWidth = scissorBtnSpanWidth;

function increaseFontSizeUntilWidth(spanClass, targetWidth, increment) {
    let span = document.querySelector(spanClass)
    let currentWidth = span.offsetWidth;
    console.log(currentWidth);
    let fontSize = parseInt(window.getComputedStyle(span).fontSize)
    console.log(fontSize);

    if (currentWidth >= targetWidth) {
        rpsBtnSpansAll.forEach(span => {
            span.style.fontSize = "2px";
        })
    }

    while (currentWidth * 1.11 < targetWidth) {
        fontSize += increment;
        rpsBtnSpansAll.forEach(span => {
            span.style.fontSize = fontSize + "px";
        })
        currentWidth = span.offsetWidth;
    }
}

increaseFontSizeUntilWidth(".scissor-span", scissorBtnWidth, 2)
console.log(rpsBtnSpansAll[0].style.fontSize);

function resizeThings() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    scissorBtnWidth = scissorBtn.offsetWidth;
    scissorBtnSpanWidth = scissorBtnSpan.getBoundingClientRect().width;
    // increaseFontSizeUntilWidth(".scissor-span", scissorBtnWidth, 2)
    adjustRockPaperScissorFontSizeOnResize(scissorBtnWidth, scissorBtnSpanWidth)
}

window.addEventListener('resize', resizeThings);

let rpsSpanFontSize = window.getComputedStyle(scissorBtnSpan).fontSize;

function adjustRockPaperScissorFontSizeOnResize(scissorBtnWidth, scissorBtnSpanWidth) {
    rpsSpanFontSize = window.getComputedStyle(scissorBtnSpan).fontSize;
    console.log(rpsSpanFontSize);
    let fontSizeXValue = parseInt(rpsSpanFontSize) / parseInt(scissorBtnSpanWidth) * 0.65;
    console.log(fontSizeXValue);

    rpsBtnSpansAll.forEach(span => {
        let newSize = scissorBtnWidth * fontSizeXValue;
        console.log(newSize);
        if (newSize < 1) { newSize = 1; }
        span.style.fontSize = newSize + "px";
    })
    console.log(rpsSpanFontSize);

}
// Slide in rps buttons
function slideInButtons() {
    let animDelay = .75;

    for (let i = 0; i < rpsBtnsAll.length; i++) {
        rpsBtnsAll[i].classList.add("slide-in-from-left");
        rpsBtnsAll[i].style.animationDelay = animDelay * i + "s";
    }
}

// slideInButtons()

function createHiMessage(delay) {
    let topPanelInsertedContainer = document.createElement("div");
    let backPanelInsertedContainer = document.createElement("div");
    let mainPanelArray = [topPanel, backPanel];
    let hiContainers = [topPanelInsertedContainer, backPanelInsertedContainer];

    for (let i = 0; i < hiContainers.length; i++) {
        hiContainers[i].classList.add("plain-panel");
        hiContainers[i].textContent = "Hi!"
        mainPanelArray[i].appendChild(hiContainers[i]);
        hiContainers[0].classList.add("start-minus-100-top")
        hiContainers[1].classList.add("start-minus-200-top")
    }
    setInterval(() => {
        for (let i = 0; i < hiContainers.length; i++) {
            hiContainers[0].classList.add("top");
            hiContainers[1].classList.add("back");
        }
    }, delay);
}

createHiMessage(500)

