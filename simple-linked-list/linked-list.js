// Implement a Singly Linked List
class List {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    
    _find(index) {
        let node = this.head;
        for (let i=0; i<index; i++) {
            node = node.next;
        }
        return node;
    }

    pop(){
        let prevNode = _find(this.length-1);
        let node = prevNode.next;
        prevNode.next = null;
        this.length--;
        return node;
    }

    push(value) {
        const newNode = {
            value
        };

        // if we're pushing onto an empty list
        if (this.length === 0){
            this.head = newNode;
            this.head.next = null;
            this.length++;
        }else{
            // Find the node which we want to insert after
            const node = this._find(this.length);
            node.next = newNode;
            newNode.next = node;
            this.length++;
        }
    }

    reverse(){

    }

    shift(){
        // removing value from front of list
        let node = this.head;
        let this.head = node.next;
        return node;
    }

    toArray(){

    }

    unshift(value){
        // Add value to beginning of list
        let newNode = {
            value
        };

        let node = this.head;
        this.head = newNode;
        this.head.next = node;
    }


}

List.fromArray = function(arr){

}

class Element {


}


module.exports = { List, Element }
