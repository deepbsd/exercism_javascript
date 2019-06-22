// Implement a Singly Linked List
class List {
    constructor(arr) {
        this.arr = [];
        this.length = this.arr.length || 0;
        this.head = null;
        if (this.arr.length) this.arr.forEach( value => this.add(value) );
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

    add(value){
        return this.unshift(value);
    }

    push(value) {
        const newNode = {
            value
        };

        // if we're pushing onto an empty list
        if (this.length === 0){
            this.head = newNode.value;
            this.head.next = null;
            this.length++;
        }else{
            // Find the node which we want to insert after
            const node = this._find(this.length-1);
            node.next = newNode;
            newNode.next = node;
            this.length++;
            console.log("this: ",this)
        }
        
    }

    reverse(){

    }

    shift(){
        // removing value from front of list
        let node = this.head;
        this.head = node.next;
        return node;
    }

    toArray(){

    }

    unshift(value){
        // Add value to beginning of list
        let newNode = {
            value
        };

        // dropping a value here...
        let node = this.head;
        this.head = newNode.value;
        this.head.next = node;
        this.length++;
        console.log("this: ",this)
    }


}

List.fromArray = function(arr){

}

class Element {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


module.exports = { List, Element }
