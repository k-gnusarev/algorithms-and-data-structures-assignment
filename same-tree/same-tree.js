/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) { // both trees are empty
    return true;
  } else if (!p || !q) { // only one tree is empty
    return false;
  } else if (p.val !== q.val) { // values of current nodes are not equal
    return false;
  } else { // recursively compare the left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};
