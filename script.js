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
        this.root = buildTree(this.array);
    }
}

function buildTree(array) {
    if (start > end) return null;
    const sortedArray = sortArray(array);
    const newArray = removeDuplicates(sortedArray);


    
    let mid = Math.floor(start + end) / 2;
    let root = new Node(newArray[mid]);

    leftArr = newArray.splice(0, mid - 1);
    rightArr = newArray.splice(mid + 1, newArray.length - 1)

    root.left = buildTree(leftArr)
    root.right = buildTree(rightArr)



    

    return root;
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

