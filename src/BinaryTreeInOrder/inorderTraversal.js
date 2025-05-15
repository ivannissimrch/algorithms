function createTree() {
  class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  const root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);

  return root;
}

// function inorderTraversal(root) {
//   let current = root;
//   const stack = [];
//   const result = [];

//   while (stack.length > 0 || current !== null) {
//     if (current !== null) {
//       console.log(current, "current also root");
//       stack.push(current);
//       current = current.left;
//     } else {
//       current = stack.pop();
//       result.push(current.val);
//       current = current.right;
//     }
//   }

//   return result;
// }

// const treeRoot = createTree();
// console.log(inorderTraversal(treeRoot)); // Output: [1, 2, 3]

function inorderTraversal(root) {
  let result = [];

  //RECURSIVE SOLUTION

  function inorder(root) {
    console.log(result, "result");
    console.log(root, "root");

    // if node null, return back to the prenode (works like that with recursive functions)
    if (!root) {
      return;
    }

    console.log(root.left, "left value");
    inorder(root.left); // recursive call for left nodes
    console.log(root.val, "current root value");
    result.push(root.val); // push to result
    console.log(root.right, "right value");
    inorder(root.right); // when its done with left, start right
  }
  // call recursive function
  inorder(root);
  return result;
}

const treeRoot = createTree();
inorderTraversal(treeRoot);
