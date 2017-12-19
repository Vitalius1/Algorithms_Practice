// Function constructor for Singley Linked List
function Sll(){
    this.head = null;
}
// Function constructor for Node in SLL
function Node(val){
    this.value = val;
    this.next = null;
}
// =================================================================================================
// Prototype function "add" for Sll

Sll.prototype.add = function(val) {
    /* if user does not input any value, the method will a output a message to 
    the console and continue to the next call of the method in the chain */
    if (typeof(val) === 'undefined') {
        console.log("Node value can not be undefined. Input a value.");
        return this;
    }
    var myNewNode = new Node(val);
    if (!this.head){ // check if we don't have a Singley Linked List started -->
    this.head = myNewNode; // --> start the SLL at the new node
} else{
    var runner = this.head; // else traverse the list with a runner to find the last node in SLL
    while (runner.next){
        runner = runner.next;
    }
    runner.next = myNewNode; // assign to .next of the last node the newly created node
}
return this; // return Sll to be able to chain methods
};
// =================================================================================================

var mySll = new Sll();
mySll.add().add(50).add().add().add(22);
console.log(mySll);