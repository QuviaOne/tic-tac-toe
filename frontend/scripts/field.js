
/**
 * @class
 */
class Field {
    /**
     * 
     * @param {Number} x X position of the field
     * @param {Number} y Y position of the field
     */
    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.btn = document.getElementById("button" + x + y);
        this.svg = this.btn.children[0];
        this.state = STATES.EMPTY;

        // Onclick event
        this.btn.addEventListener("click", e => {
            if (!player.turn) throw new Error("Not your turn!");
            this.toggle(player.state);
        })
    }
    /**
     * 
     * @param {STATES} state The state to toggle field to
     */
    toggle(state) {
        if (!Object.values(STATES).includes(state)) throw new Error("Stest must be a valid state");
        this.state = state;
        this.svg.src = state.imgLink;
        player.toggleTurn();
        onUpdate();
    }
    AIPlay() {
        this.toggle(AI.state);
    }
    /**
     * @description Resets field
     */
    reset() {
        this.state = this.toggle(STATES.EMPTY);
    }
    highlight() {
        this.btn.style.backgroundColor = "rgba(255, 0, 0, 0.596)"
    }
}