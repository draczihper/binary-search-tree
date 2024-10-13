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
      }

    insert(value, node = this.root) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.data) {
            node.left = this.insert(value, node.left)
        } else if(value > node.data) {
            node.right = this.insert(value, node.right)
        }
        return node;
    }

    deleteItem(value, node = this.root) {
        if (node === null) {
            return null;
        }
        if (value < node.data) {
            node.left = this.deleteItem(value, node.left)
        } else if (value > node.data) {
            node.right = this.deleteItem(value, node.right)
        } else {
            if (node.left === null) {
                return node.right;
            }else if (node.right === null) {
                return node.left;
            }

            node.data = this.minValue(node.right)
            node.right = this.deleteItem(node.data, node.right)
        }
        return node;
    }

    minValue(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left
        }
        return current.data;
    }

    find(value, node = this.root) {
        if (node == null || node.data == value) { // Base case
            return node;
        }

        if (value > node.data) {
            return this.find(value, node.right)
        }

        return this.find(value, node.left);
    }

    levelOrderIterative(callback) {
        if (typeof callback !== 'function') {
            throw new Error("A callback function is required for levelOrder traversal!")
        }

        if (this.root === null) return;

        const queue = [this.root];

        queue.push(this.root);

        while (queue.length > 0) {
            const node = queue.shift()
            callback(node);

            if (node.left !== null) {
                queue.push(node.left)
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }

    levelOrderRecursive(callback) {
        if (typeof callback !== 'function'){
            throw new Error("A callback is required for levelOrder traversal!")
        }
        
        const traverseLevel = (level) => {
            if (level.length === 0) return;

            const nextLevel = [];

            level.forEach(node => {
                callback(node);
                if (node.left !== null) {
                    nextLevel.push(node.left)
                }

                if (node.right !== null) {
                    nextLevel.push(node.right);
                }
                
            });

            traverseLevel(nextLevel);
        };

        traverseLevel([this.root])
    }

    inOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error("A callback is required for inOrder traversal")
        }

        const traverse = (node) => {
            if (node === null) return;
            traverse(node.left);
            callback(node)
            traverse(node.right);
        }

        traverse(this.root)
    }


}

module.exports = Tree;