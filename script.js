class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class Tree {
    constructor(array) {
        this.array = array;
        this.root = buildTree();
    }
}

function buildTree(array) {
    const sortedArray = array.sort((a, b) => a - b);
    const newArray = []

}


