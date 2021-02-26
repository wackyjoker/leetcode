

class NewNode {
    value:number;
    next:null|NewNode;
    constructor(value:number){
        this.value = value;
        this.next=null;
    }
}


class LinkedList{
    head:NewNode
    tail: null|NewNode;
    constructor(value:number) {
        this.head= new NewNode(value);
        this.tail = this.head;
    }

        length = 1;

    append(value:number){  // O(1)
        const newNode = new NewNode(value);
        if(!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }
    traverse() {  // O(n)
        let array:Array<number> = [];
        let currentNode = this.head;

        while (currentNode) {
            array.push(currentNode.value);
            if(currentNode.next) { // O(1);
                currentNode = currentNode.next;
            }
        }
        return array;
    }
    pop(){ //O(n)

        let currentNode:NewNode = this.head;

        while(currentNode.next?.next ) {    //check
            console.log(currentNode.value)
            if(currentNode.next) {//O(1);
                currentNode = currentNode.next;
            }
        }
        currentNode.next = null;
        this.tail= currentNode ;
        this.length--;
        return this;
        }

}

const newList = new LinkedList(1);

newList.append(2);
newList.append(3);
newList.append(4);
// newList.reverse();
console.log(newList.traverse());
// newList.pop();
console.log(newList);


