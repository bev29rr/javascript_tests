function generateTower(height) {
    let layers = [];
    let prevLayers = 0;
    for (let i=height; i >= 0; i--) {
        layers.unshift(createLayer(i, prevLayers));
        prevLayers += 1
    }
    return layers
}

function createLayer(width, prevLayers) {
    let layer = ""
        " ".repeat(prevLayers) +
        "#".repeat(prevLayers) +
        " " +
        "#".repeat(prevLayers)
        ;
    return layer;
}

let running = true
let user_input = 0;
while (running) {
    let input = prompt("enter a number: ");
    input = Math.floor(input);

    if (input >= 0 && input <= 8) {
        running = false;
        user_input = input;
    }
}

let tower = generateTower(user_input);
for (let i=0; i < tower.length; i++) {
    console.log(tower[i]);
}
