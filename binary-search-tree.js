// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    if(this.root === null){
      this.root = new TreeNode(val)
    }
    while(currentNode != null){
      if(currentNode.val > val){
        if(currentNode.left === null){
          currentNode.left = new TreeNode(val)
          break
        }else{
          currentNode = currentNode.left;
          
        }
      }if(currentNode.val < val){
        if(currentNode.right === null){
          currentNode.right = new TreeNode(val)
          break
        }else{
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(val) {
    let currentNode = this.root

    while(currentNode != null){
      if(currentNode.val === val ) return true
      if(currentNode.val > val){
        currentNode = currentNode.right
        continue
      } 
      if(currentNode.val < val){
        currentNode = currentNode.left
        continue
      } 
    }
    return false
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };