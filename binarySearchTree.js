class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // insert data into a BinarySearchTree
    insert(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                // if data is less than node them move it to the left side of the tree
                if (data < node.data) {
                    // if left node is null then insert the node here otherwise repeat the process with left node being the root node
                    if (node.left === null) {
                        return node.left = new Node(data);
                    } else {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    // if right node is null then insert the node here otherwise repeat the process with right node being the root node 
                    if (node.right === null) {
                        node.right = new Node(data);
                    } else {
                        return searchTree(node.right);
                    }
                } else {
                    return;
                }
            };
            return searchTree(node);
        }
    }

    getRootNode() {
        return this.root
    }

    breathFirstSearch(node, data) {
        var queue = [];
        if (node === null) {
            return;
        }
        queue.push(node);
        while (queue.length !== 0) {
            var currentNode = queue[0];
            if (currentNode.data === data) {
                return data;
            }
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
            queue.shift(currentNode);
        }
        return 'item not found';
    }
    
    dfsPreOrder(node) {
        // root, left, right
        if (node === null) return;
        var output = [];
        function traverse(node) {
            output.push(node.data);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            return output
        }
        return traverse(node);
    }
}