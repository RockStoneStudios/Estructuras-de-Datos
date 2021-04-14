
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null,
            previ : null
        }
        this.tail = this.head;
        this.lenght = 1;
    }

    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght ++;
        return this;
    }

    insert(index,value){
          if(index>= this.lenght){
              return this.append(value);
          }
          
          const newNode = new Node(value);
          const firstPointer = this.getTheIndex(index-1);
          newNode.next = firstPointer.next;
          firstPointer.next.prev = newNode;
          firstPointer.next = newNode;
         
          newNode.prev = firstPointer;
          this.lenght++;
          return this;
    }

    getTheIndex(index){
        let count =0;
        let currentNode = this.head;
        while(count !== index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
}

let MyLinkedList = new LinkedList(1);