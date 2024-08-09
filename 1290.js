class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var getDecimalValue = function (head) {
    let values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    return values.reduce((acc, val) => acc * 2 + val, 0);
};

let head = new ListNode(1, new ListNode(0, new ListNode(1)));

console.log(getDecimalValue(head)); 
