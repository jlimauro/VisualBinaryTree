var tree;
var canvasWidth = 600;
var canvasHeight = 400;

function setup() {
    createCanvas(canvasWidth + 40, canvasHeight);
    background(51);

    tree = new Tree();

    for (var i = 0; i < 10; i++) {
        tree.addValue(floor(random(0, 100)));
    }

    console.log(tree);
    tree.traverse()
    var result = tree.search(10);
    if (result != null)
        console.log(result);
}