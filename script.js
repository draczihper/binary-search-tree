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
        const newArray = this.removeDuplicates(sortedArray)
        this.root = this.buildTree(newArray);
    }

    sortArray(array) {
        return array.sort((a, b) => a - b);
}
    
    removeDuplicates(sortedArray) {
        return [...new Set(sortedArray)]
    }

    buildTree(array) { 
        if (array.length === 0) return null;

        let mid = Math.floor(array.length / 2);
        const root = new Node(array[mid]);
    
        root.left = this.buildTree(array.slice(0, mid))
        root.right = this.buildTree(array.slice(mid+1))
      
        return root;
    }

    prettyPrint (node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
}


const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.prettyPrint()
