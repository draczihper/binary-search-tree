const Tree = require('./script')

// Function to generate an array of random numbers
function generateRandomArray(size, max) {
    return Array.from({length: size}, () => Math.floor(Math.random() * max));
}

// Function to print tree elements in different orders
function printTreeElements(tree) {
    console.log("Level Order:");
    tree.levelOrderIterative(node => console.log(node.data));
    
    console.log("\nPre Order:");
    tree.preOrder(node => console.log(node.data));
    
    console.log("\nPost Order:");
    tree.postOrder(node => console.log(node.data));
    
    console.log("\nIn Order:");
    tree.inOrder(node => console.log(node.data));
}

// Main driver script
function runBSTDemo() {
    // 1. Create a binary search tree from an array of random numbers < 100
    const randomArray = generateRandomArray(15, 100);
    const tree = new Tree(randomArray);
    console.log("Initial tree created with random numbers:");
    tree.prettyPrint();

    // 2. Confirm that the tree is balanced
    console.log("\nIs the tree balanced?", tree.isBalanced() ? "Yes" : "No");

    // 3. Find a value in the tree
    console.log("\nIs 13 in the tree?", tree.find(13) ? "Yes" : "No")

    // 4. Print out all elements in level, pre, post, and in order
    console.log("\nPrinting all elements in different orders:");
    printTreeElements(tree);

    // 5. Unbalance the tree by adding several numbers > 100
    console.log("\nUnbalancing the tree by adding numbers > 100:");
    [105, 120, 135, 150].forEach(num => tree.insert(num));
    tree.prettyPrint();

    // 6. Confirm that the tree is unbalanced
    console.log("\nIs the tree balanced after adding large numbers?", tree.isBalanced() ? "Yes" : "No");

    // 7. Balance the tree
    console.log("\nRebalancing the tree:");
    tree.rebalance();
    tree.prettyPrint();

    // 8. Confirm that the tree is balanced
    console.log("\nIs the tree balanced after rebalancing?", tree.isBalanced() ? "Yes" : "No");

    // 7. Print out all elements in level, pre, post, and in order
    console.log("\nPrinting all elements after rebalancing:");
    printTreeElements(tree);
}

// Run the demo
runBSTDemo();