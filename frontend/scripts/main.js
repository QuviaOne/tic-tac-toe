var fields = [];
const FIELD_SIZE = 3;
const fieldBody = document.getElementById('fieldBody');
var winFields = [];
for (var i = 1; i <= FIELD_SIZE; i++) {
    fields[i - 1] = [];
    let a = document.createElement("tr");
    a.id = `fieldRow${i}`
    fieldBody.appendChild(a);
    for (var j = 1; j <= FIELD_SIZE; j++) {
        var b = document.createElement("td");
        var c = document.createElement("button");
        c.className = `fieldButton`
        c.id = `button${i}${j}`
        b.appendChild(c);
        var d = document.createElement("img");
        d.src = "./resources/blank.svg";
        c.appendChild(d);
        a.appendChild(b);
        fields[i - 1][j - 1] = new Field(i, j);
    }
}
/**
 * @returns {void}
 */
function reset() {
    for (var i of fields) {
        for (var j of i) {
            j.reset();
        }
    }
}
function onUpdate() {
    var a = verify();
    if (a) {
        console.log("Game ended. Victor: " + a.id);
        winFields.forEach(a=> a.highlight());
    }
}


/**
 * @returns {STATES | undefined}
 */
function verify() {
    const winCondition = FIELD_SIZE == 3 ? 3 : 5;
    if (FIELD_SIZE == 4 || FIELD_SIZE < 3) throw new Error("Invalid FIELD_SIZE for automatic verification.");
    for (var i = 0; i < fields.length; i++) {
        for (var j = 0; j < fields[i].length; j++) {
            if (i + 2 > winCondition) {
                if (([...Array(winCondition).keys()].map(g => i - g).map(v => fields[v][j])).filter(v => v.state == fields[i][j].state && v.state != STATES.EMPTY).length == winCondition) return (winFields = [...Array(winCondition).keys()].map(g => i - g).map(v => fields[v][j]), fields[i][j].state);
            }
            if (j + 2 > winCondition) {
                if (([...Array(winCondition).keys()].map(g => j - g).map(v => fields[i][v])).filter(v => v.state == fields[i][j].state && v.state != STATES.EMPTY).length == winCondition) return (winFields = [...Array(winCondition).keys()].map(g => j - g).map(v => fields[i][v]), fields[i][j].state);
            }
            if (i + 2 > winCondition && j + 2 > winCondition) {
                if ([...Array(winCondition).keys()].map(g => [i - g, j - g]).map(v => fields[v[0]][v[1]]).filter(v => v.state == fields[i][j].state && v.state != STATES.EMPTY).length == winCondition) return (winFields = [...Array(winCondition).keys()].map(g => [i - g, j - g]).map(v => fields[v[0]][v[1]]), fields[i][j].state);
            }
            if (FIELD_SIZE - i + 1 > winCondition && j + 2 > winCondition) {
                if ([...Array(winCondition).keys()].map(g => [i + g, j - g]).map(v => fields[v[0]][v[1]]).filter(v => v.state == fields[i][j].state && v.state != STATES.EMPTY).length == winCondition) return (winFields = [...Array(winCondition).keys()].map(g => [i + g, j - g]).map(v => fields[v[0]][v[1]]), fields[i][j].state);
            }
        }
    }
}