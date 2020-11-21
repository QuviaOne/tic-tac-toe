const PORT = 6969;

async function sendDataToAI() {
    var data = fields.map(a => a.map(b => b.state.id));
    var a = await sendPost("http://localhost:" + PORT, {
        state: AI.state.id,
        fields: data
    });

}























const sendPost = (address, postObject) => {
    var req = new XMLHttpRequest();
    return new Promise(resolve => {
        req.onreadystatechange = () => {
            if (req.readyState != 4) return;
            resolve(req);
        }
        req.open("POST", address, true);
        req.send(JSON.stringify(postObject));
    });
}