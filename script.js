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
    const sortedArray = sortArray(array);
    const newArray = removeDuplicates(sortedArray);

    const tree = new Tree(newArray);
    tree.root 

    
}

function sortArray(array) {
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray;
}

function removeDuplicates(sortedArray) {
    let newArray = []
    for (let i = 0; i < sortedArray.length; i++){
        if (sortedArray[i] !== sortedArray[i - 1]) {
            newArray.push(sortedArray[i])
        }
    }

    return newArray;
}

