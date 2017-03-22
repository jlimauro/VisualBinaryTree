function Node(val, x, y) {
    this.left = null;
    this.right = null;
    this.value = val;
    this.x = x;
    this.y = y;
}

Node.prototype.addNode = function(n) {
    if (n.value < this.value) {
        if (this.left == null) {
            this.left = n;
            this.left.x = this.x - 41;
            this.left.y = this.y + 51;
        } else {
            this.left.addNode(n);
        }
    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n;
            this.right.x = this.x + 41;
            this.right.y = this.y + 51;
        } else {
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
    text(this.value, this.x, this.y);
    stroke(255);
    noFill()
    ellipse(this.x, this.y - 3, 20, 20);
    line(parent.x, parent.y, this.x, this.y);

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