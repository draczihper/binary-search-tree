class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class Tree {
    constructor(array) {
        const sortedArray = this.sortArray(array)
        const newArray = this.removeDuplicates(array)
        this.root = this.buildTree(this.array);
    }

    sortArray(array) {
        return array.sort((a, b) => a - b);
}
    
    removeDuplicates(sortedArray) {
        return [...new Set(sortedArray)]
    }

    buildTree(array) { 
        let mid = Math.floor(newArray.length / 2);
        let root = new Node(newArray[mid]);
    
       
    
        root.left = buildTree(leftArr)
        root.right = buildTree(rightArr)
      
        return root;
    }
}







const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
