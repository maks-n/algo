/**
 * Create Node class with value and next node pointer.
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Create LinkedList class with pointer to head and size of LL.
 */
class MyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }
}

/**
 * Traverse to the index node and return its value.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let current = this.head;

  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current.val;
};

/**
 * The same as addAtIndex with index equals 0
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * The same as addAtIndex with index equals Linked List size
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val);
};

/**
 * Process zero index case by preserving reference to the existing head in new node, then reference new node as new head.
 * For other correct indexes swap index-1 node next with new node.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  this.size++;

  if (index === 0) {
    const newNode = new ListNode(val, this.head);
    this.head = newNode;
    return;
  }

  let current = this.head;

  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }

  let oldNext = current.next;
  const newNode = new ListNode(val, oldNext);
  current.next = newNode;
};

/**
 * Process zero index case by changing head to `head.next`.
 * For other correct indexes change index-1 node next with `node.next.next`.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  this.size--;

  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;

  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }

  current.next = current.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
