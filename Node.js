function Node(val, x, y) {
    this.left = null;
    this.right = null;
    this.value = val;
    this.x = x;
    this.y = y;
    this.distance = 2;
}

Node.prototype.addNode = function(n) {
    if (n.value < this.value) {
        if (this.left == null) {
            this.left = n;
            this.left.x = this.x - (canvasWidth / Math.pow(2, n.distance));
            this.left.y = this.y + (canvasHeight / 12);
        } else {
            n.distance++;
            this.left.addNode(n);
        }
    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n;
            this.right.x = this.x + (canvasWidth / Math.pow(2, n.distance));
            this.right.y = this.y + (canvasHeight / 12);
        } else {
            n.distance++;
            this.right.addNode(n);
        }
    }
}

Node.prototype.visit = function(parent) {
    if (this.left != null) {
        this.left.visit(this);
    }
    console.log(this.value);
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(12);
    stroke(255, 100);
    line(parent.x, parent.y, this.x, this.y);
    stroke(255);
    fill(0);
    ellipse(this.x, this.y, 24, 24);
    noStroke();
    fill(255);
    text(this.value, this.x, this.y + 4);
    if (this.right != null) {
        this.right.visit(this);
    }
}

Node.prototype.search = function(val) {
    if (this.value == val) {
        console.log("found " + val);
        return this;
    } else if (val < this.value && this.left != null) {
        return this.left.search(val);
    } else if (val > this.value && this.right != null) {
        return this.right.search(val);
    } else {
        return console.log("Not found!");
    }
}