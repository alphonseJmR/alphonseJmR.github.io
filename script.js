import style from "./style_sheet_main.css";

let nR = () => {
    let rand = Math.floor(Math.random() * 255)
    return rand
}
const randBackground = {

    rValue: nR(),
    gValue: nR(),
    bValue: nR(),
}

let backGrounds = () => {

let newBacks = document.querySelector("body")
newBacks.style.backgroundImage = linearGradient(nR(), rgb(randBackground.rValue, randBackground.gValue, randBackground.bValue), rgb(randBackground.bValue, randBackground.rValue, randBackground.gValue));
newBacks.style.backroundColor = 'green';
}

const newWidth = () => {
    let goodWidth = document.getElementsByClassName(".header-container");
    goodWidth.style.width = '70%';
}

newWidth();
while(1) {
    backGrounds();
}