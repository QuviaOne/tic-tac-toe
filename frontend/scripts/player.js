/**
 * @enum {String}
 */
const STATES = {
    CROSS: {
        imgLink: "./resources/cross.svg",
        id: "CROSS"
    },
    CIRCLE: {
        imgLink: "./resources/circle.svg",
        id: "CIRCLE"
    },
    EMPTY: {
        imgLink: "./resources/blank.svg",
        id: "EMPTY"
    }
}

class Player {
    constructor(state) {
        this.state = state;
        this.turn = true;
    }
    toggleTurn() {
        this.turn = !this.turn;
    }
}
var player = new Player(STATES.CROSS);
var AI = new Player(STATES.CIRCLE)