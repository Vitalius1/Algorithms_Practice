function Sll(){
    this.head = null;
}
function Node(val){
    this.value = val;
    this.next = null;
}

Sll.prototype.add = function(val) {
    myNewNode = new Node(val);
    if (!this.head){
        this.head = myNewNode;
    } else{
        var runner = this.head;
        while (runner.next){
            runner = runner.next;
        }
        runner.next = myNewNode;
    }
    return this;
}

var mySll = new Sll();
mySll.add(20).add(50);
console.log(mySll);