
class Node{

    constructor(value){
        this.value = value;
        this.next=null;
    }
}

class singleLinkedList{
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }
    append(value){  // O(1)
        const newNode = new Node(value);
        if(this.length===0) {
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
          let array = [];
          let currentNode = this.head;

          while (currentNode) {
              array.push(currentNode.value);
              currentNode = currentNode.next;
          }
          return array;
      }
       pop(){ //O(n)

           let currentNode = this.head;
           while(currentNode.next.next ) {
              console.log(currentNode.value)
              currentNode = currentNode.next;
           }
           currentNode.next = null;
           this.tail= currentNode ;
           this.length--;
           return this;
        }

        reverse(){ //O(n)
          let currentNode = this.head; //1  // mutable
          let newHead =currentNode.next; // second time currentNode.next = 3 till it's 5
          let tempNode = null; // mutable
            // 2.next=== 1+  THIS IS OUR NEW HEAD.NEXT
          let unSorted = true; // immutable
            // Object.assign({},unSorted);
            //unSorted.next = tempNode;  // 3 .next 2 .next 1 [Circular]

            // while(unSorted!==null){
            //   unSorted = currentNode.next   // 2.. 3.. next:4 ... next:5 till it's 5 , unSorted = null;
            //   newHead.next  = currentNode;     // it is 2 at second time
            //   tempNode = newHead;
            //   currentNode=currentNode.next;   // currentNode.next = 2.3.4 NEW currentNode.next 3.
            // }
            while(unSorted){
                console.log(currentNode.value); //1
                unSorted = newHead.next ;
                currentNode=currentNode.next;
            }

            // old linkedlist 1 2 3 4
            // tempNode 2 1
            // this.tail = 4
            // this.tail = 1 //tempNode.next.next should be null
            // console.log(tempNode,"our temp Node !!!!");

          return this;
        }

}

const newList = new singleLinkedList();
newList.append(1);
newList.append(2);
newList.append(3);
newList.append(4);
// newList.reverse();
console.log(newList.traverse());
// newList.pop();
console.log(newList);
