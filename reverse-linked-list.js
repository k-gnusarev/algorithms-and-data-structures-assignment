/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const node4 = new ListNode(4, null)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const head = new ListNode(1, node2)

console.log(head)
const reverseList = function (head) {
  let prev = null
  let current = head

  while (current) {
    const next = current.next

    current.next = prev
    prev = current
    current = next
  }

  return prev
};

console.log(reverseList(head))
