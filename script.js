let nR = () => {
    let rand = Math.floor(Math.random() * 255)
    return rand
}
const randBackground = {

    rValue: 0,
    gValue: 0,
    bValue: 0,
    newRGBValue() {
    this.rValue = nR();
    this.gValue = nR();
    this.bValue = nR();
    },
}

let backGrounds = () => {

let newBacks = document.body
randBackground.newRGBValue();
newBacks.style.backgroundImage = linearGradient(nR(), rgb(randBackground.rValue, randBackground.gValue, randBackground.bValue), rgb(randBackground.bValue, randBackground.rValue, randBackground.gValue));

}

while(1) {
    backGrounds();
}