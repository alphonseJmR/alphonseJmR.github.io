let nR = Math.floor(Math.random() * 255)
const randBackground = {

    rValue: 0,
    gValue: 0,
    bValue: 0,
    newRGBValue() {
    
    this.rValue = nR;
    this.gValue = nR;
    this.bValue = nR;
    }
}