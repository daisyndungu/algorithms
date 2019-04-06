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
}