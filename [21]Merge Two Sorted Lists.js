//将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
//
// 示例： 
//
// 输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4
// 
// Related Topics 链表



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var mergeTwoLists = function(l1, l2) {
    let firstNode;
    let point = new ListNode(-1);
    firstNode = point;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            point.next = l1;
            l1 = l1.next;
        } else {
            point.next = l2;
            l2 = l2.next;
        }
        point =  point.next;
    }
    if (l1 != null) {
        point.next = l1;
    } else {
        point.next = l2;
    }

    return firstNode.next;

};
//leetcode submit region end(Prohibit modification and deletion)
